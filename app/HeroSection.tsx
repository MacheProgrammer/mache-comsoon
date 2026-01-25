import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="text-primary absolute inset-0 z-0 flex h-full w-full flex-col items-center pt-10 text-center text-3xl text-shadow-md text-shadow-neutral-700">
      <div className="flex h-full items-center justify-center">
        <Link href="/top2026" className="cursor-pointer">
          <Button className="px-6 py-3 text-lg font-semibold">TOP 2026</Button>
        </Link>
      </div>
      <header className="absolute top-10">
        <h3 className="font-bold">EXPLORE EVENTS AT</h3>
        <h3 className="mt-2 text-4xl font-black">SMA NEGERI 5 YOGYAKARTA</h3>
      </header>
    </div>
  );
}

export default HeroSection;
