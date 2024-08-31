import Link from "next/link";
import CountdownTimer from "@/components/countdown-timer";

export default function Navbar() {
  return (
    <div className="flex h-fit w-full flex-col justify-between gap-y-4 py-10 lg:flex-row lg:items-center lg:gap-y-0">
      <div>
        <Link href="/">
          <h3 className="text-4xl font-bold">SnackWhiz</h3>
        </Link>
        <p className="text-lg font-light tracking-wide">
          AI Generated Recipes – Bringing You New Recipe Every Week
        </p>
      </div>
      <CountdownTimer />
    </div>
  );
}
