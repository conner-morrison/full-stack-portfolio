"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header({ onOpenCommand }: { onOpenCommand: () => void }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-[var(--foreground)] tracking-tight hover:opacity-80 transition-opacity"
        >
          Conner Morrison
        </Link>
        <nav className="flex items-center gap-1" role="navigation">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[var(--accent-soft)] text-[var(--accent)] dark:bg-[var(--accent-soft)] dark:text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 text-[var(--muted)]">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : null}
          </button>
        </div>
      </div>
    </header>
  );
}
