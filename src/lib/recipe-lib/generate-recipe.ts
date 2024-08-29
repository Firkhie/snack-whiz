import { getUsedRecipes } from "@/lib/recipe-lib/get-used-recipes";
import { claudeApi } from "@/lib/claude-api";
import fs from "fs";
import { splitRecipeName } from "./split-recipe-name";
import { TextBlock } from "@anthropic-ai/sdk/resources/messages.mjs";

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
    const response = await claudeApi({ message: finalMessage });
    const textResponse = (response.content[0] as TextBlock).text;
    const title = splitRecipeName({ text: textResponse });
    if (title) {
      fs.writeFile(`./src/recipes/${title}`, textResponse, function (err) {
        if (err) {
          throw err;
        }
      });
    }
  } catch (error) {
    console.error("Error generating recipe:", error);
  }
}
