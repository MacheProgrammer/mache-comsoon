import GradientText from "@/components/GradientText";
import LetterGlitch from "@/components/LetterGlitch";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-6">
        <GradientText
          colors={["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"]}
          animationSpeed={5}
          showBorder={false}
          className="-mt-6 bg-black/30 px-4 py-2 text-center text-5xl font-black"
        >
          Ups, halaman yang kamu cari tidak tersedia, yuk kembali ke halaman
          utama!
        </GradientText>
        <Link
          href="/"
          className="rounded-2xl bg-linear-to-br from-sky-500 to-emerald-500 px-4 py-2 text-2xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90"
        >
          Kembali ke halaman utama
        </Link>
      </div>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
      />
    </div>
  );
}
