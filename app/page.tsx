"use client";
import GradientText from "@/components/GradientText";
import LetterGlitch from "@/components/LetterGlitch";
import Shuffle from "@/components/Shuffle";

export default function Home() {
  return (
    <div className="relative h-dvh">
      <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-6">
        <Shuffle
          text="Coming Soon"
          shuffleDirection="right"
          duration={1.05}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          respectReducedMotion={true}
          loop
          className="font-bold text-white"
        />
        <GradientText
          colors={["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"]}
          animationSpeed={5}
          showBorder={false}
          className="-mt-6 px-4 py-2 text-5xl font-black"
        >
          MACHE WEB !
        </GradientText>
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
