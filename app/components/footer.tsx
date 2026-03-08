import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] w-full min-w-0">
      <div className="w-full max-w-[min(92vw,64rem)] mx-auto px-[clamp(0.75rem,2.5vw,2.5rem)] py-[clamp(1rem,3vw,2rem)] flex flex-col sm:flex-row justify-between items-center gap-4 text-[clamp(0.6875rem,1.5vw,0.875rem)] sm:text-sm text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Conner Morrison</span>
        <div className="flex gap-6">
        </div>
      </div>
    </footer>
  );
}
