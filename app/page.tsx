import FloatingLines from "@/components/FloatingLines";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <main className="h-dvh">
      <div style={{ width: "100%", height: "100dvh", position: "relative" }}>
        <FloatingLines
          linesGradient={["#47d2f5", "#4a2cdd", "#47f5bb"]}
          animationSpeed={1}
          interactive
          bendRadius={6}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
          className="absolute inset-0 z-0"
        />
        <HeroSection />
      </div>
    </main>
  );
}
