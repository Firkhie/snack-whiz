import { RecipeMetadata } from "@/components/snack-view";
import fs from "fs";
import matter from "gray-matter";

export default function getRecipesMetadata() {
  const folder = "./src/recipes";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      cook_time: matterResult.data.cook_time,
      difficulty: matterResult.data.difficulty,
      slug: filename.replace(".md", ""),
    };
  });
  return posts as RecipeMetadata[];
}
