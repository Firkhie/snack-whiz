import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex h-fit w-full items-center justify-between gap-y-2 py-10">
      <div>
        <Link href="/">
          <h3 className="text-4xl font-bold">SnackWhiz</h3>
        </Link>
        <p className="text-lg font-light tracking-wide">
          AI Generated Recipes – Bringing You New Recipe Every Week
        </p>
      </div>
      {/* <CountdownTimer /> */}
    </div>
  );
}
