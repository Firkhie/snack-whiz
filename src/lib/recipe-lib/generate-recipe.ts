import fs from "fs";
import path from "path";
import { Octokit } from "@octokit/rest";

import { TextBlock } from "@anthropic-ai/sdk/resources/messages.mjs";

import { getUsedRecipes } from "@/lib/recipe-lib/get-used-recipes";
import { claudeApi } from "@/lib/claude-api";
import { splitRecipeName } from "./split-recipe-name";

const template = `---
title: <snack_name>
description: <snack_description>
cook_time: <total_time_in_minutes>(number)
difficulty: <Easy | Medium | Hard>
---

# <snack_name>

## Ingredients

### <ingredient_sub_header>(optional)
- <ingredient>
....

## Instructions

1. **<Instruction_header>** <instruction_description>`;

const message = `Create a unique snack recipe inspired by flavors from around the world, prioritize generating snack that have short name. Use the template above to craft the recipe and ensure it is not a recreation of existing ones.`;

export async function generateRecipe() {
  try {
    let usedRecipes = (await getUsedRecipes()).join("");
    const finalMessage = `
TEMPLATE:
${template}

EXISTING RECIPES:
${usedRecipes}

MESSAGE:
${message}
`;
    console.log(finalMessage, "finalMessage");
    const response = await claudeApi({ message: finalMessage });
    const textResponse = (response.content[0] as TextBlock).text;
    const title = splitRecipeName({ text: textResponse });

    if (!title) throw new Error("No title extracted from recipe");

    const folder = path.join(process.cwd(), "src/recipes");
    const file = path.join(folder, `${title}.md`);

    if (process.env.NODE_ENV === "development") {
      fs.writeFile(file, textResponse, function (err) {
        if (err) {
          throw err;
        }
      });
    } else if (process.env.NODE_ENV === "production") {
      console.log(title, "TITLE");
      const client = new Octokit({
        auth: process.env.GITHUB_TOKEN,
      });
      const repoOwner = "Firkhie";
      const repoName = "snack-whiz";

      await client.repos.createOrUpdateFileContents({
        owner: repoOwner,
        repo: repoName,
        path: `src/recipes/${title}.md`,
        content: Buffer.from(textResponse).toString("base64"),
        message: `Add new recipe: ${title}`,
      });
      console.log(`Recipe pushed to GitHub: ${title}.md`);
    }
  } catch (error) {
    console.error("Error generating recipe:", error);
  }
}
