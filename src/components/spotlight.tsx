"use client";

export function Spotlight() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(600px_circle_at_50%_20%,rgba(120,120,120,0.12),transparent_60%)]
        dark:bg-[radial-gradient(600px_circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]
      "
    />
  );
}