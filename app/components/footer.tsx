import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Conner Morrison</span>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-[var(--foreground)] transition-colors">
            Contact
          </Link>
          <a
            href="https://www.google.com/maps?q=1049+NW+178th+St+Shoreline+WA+98177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Shoreline, WA
          </a>
        </div>
      </div>
    </footer>
  );
}
