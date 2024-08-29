"use client";

import RecipeCard from "@/components/recipe-card";
import Link from "next/link";

export interface RecipeMetadata {
  title: string;
  description: string;
  cook_time: number;
  difficulty: string;
  slug: string;
}

interface Props {
  metadatas: RecipeMetadata[];
}

export default function SnackView({ metadatas }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {metadatas.map((e) => (
          <Link key={e.title} href={`/recipe/${e.slug}`}>
            <RecipeCard
              title={e.title}
              description={e.description}
              cook_time={e.cook_time}
              difficulty={e.difficulty}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
