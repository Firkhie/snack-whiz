"use client";

import { useState } from "react";
import Link from "next/link";
import RecipeCard from "@/components/recipe-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
  const rowsPerPage = 12;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  return (
    <div className="flex-1 flex flex-col gap-y-10">
      {/* Snack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
        {metadatas.slice(startIndex, endIndex).map((e) => (
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
      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex >= metadatas.length ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
