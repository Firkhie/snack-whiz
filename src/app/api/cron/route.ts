import { generateRecipe } from "@/lib/recipe-lib/generate-recipe";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");
  const token = process.env.API_TOKEN;

  if (authHeader !== `Bearer ${token}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await generateRecipe();
  return new NextResponse("Recipe generation triggered", { status: 200 });
}
