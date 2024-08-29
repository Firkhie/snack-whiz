import { NextApiRequest, NextApiResponse } from "next";
import { generateRecipe } from "@/lib/recipe-lib/generate-recipe";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await generateRecipe();
  return new NextResponse("Recipe generation triggered", { status: 200 });
}
