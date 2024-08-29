import fs from "fs";
import path from "path";

export async function getUsedRecipes(): Promise<string[]> {
  const recipes: string[] = [];
  const recipesDir = path.join(process.cwd(), "src/recipes");
  return new Promise((resolve, reject) => {
    fs.readdir(recipesDir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        files.forEach((file) => {
          const fileName = path.basename(file, path.extname(file));
          recipes.push(`- ${fileName}\n`);
        });
        resolve(recipes);
      }
    });
  });
}
