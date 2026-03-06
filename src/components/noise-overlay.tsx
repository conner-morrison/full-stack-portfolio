"use client";

export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none opacity-[0.045] dark:opacity-[0.06] mix-blend-soft-light"
      style={{
        backgroundImage: "url('/assets/noise.png')",
      }}
    />
  );
}