"use client";

export function Spotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_50%_25%,var(--accent-soft)_0.15_,transparent_55%)] dark:bg-[radial-gradient(800px_circle_at_50%_25%,var(--accent-soft)_0.08_,transparent_55%)]"
    />
  );
}