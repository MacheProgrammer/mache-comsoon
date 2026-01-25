export function AladinDunes() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="h-[220px] w-full md:h-80"
      >
        {/* Back dune */}
        <path
          fill="var(--dune-back)"
          d="M0,192 C240,96 480,128 720,160 960,192 1200,128 1440,96 L1440,320 L0,320 Z"
        />

        {/* Middle dune */}
        <path
          fill="var(--dune-mid)"
          d="M0,224 C320,160 560,200 800,176 1040,152 1280,176 1440,144 L1440,320 L0,320 Z"
        />

        {/* Front dune */}
        <path
          fill="var(--dune-front)"
          d="M0,256 C240,224 480,256 720,272 960,288 1200,272 1440,240 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
