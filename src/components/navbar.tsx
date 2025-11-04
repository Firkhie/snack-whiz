import Link from "next/link";
import CountdownTimer from "@/components/countdown-timer";
import getRecipesMetadata from "@/lib/recipe-lib/get-recipes-metadata";

export default function Navbar() {
  const data = getRecipesMetadata();

  return (
    <div className="flex h-fit w-full flex-col justify-between gap-y-4 py-10 lg:flex-row lg:items-center lg:gap-y-0">
      <div>
        <Link href="/">
          <h3 className="text-4xl font-bold">SnackWhiz</h3>
        </Link>
        <p className="text-lg font-light tracking-wide">
          AI Generated Recipes – Bringing You New Recipe Every Week
        </p>
        <p className="text-sm font-medium lg:pt-3 pt-2">
          🍳 SnackWhiz has cooked up {data.length} recipes so far!
        </p>
      </div>
      <CountdownTimer />
    </div>
  );
}
