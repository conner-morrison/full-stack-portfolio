"use client";

export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: "url('/assets/noise.png')",
      }}
    />
  );
}