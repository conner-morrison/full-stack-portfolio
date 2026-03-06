"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", section: null as string | null },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export function Header({ onOpenCommand }: { onOpenCommand: () => void }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-spy: update active nav item based on which section is in view (home page only)
  useEffect(() => {
    if (pathname !== "/") return;

    const updateActive = () => {
      const sectionIds = ["about", "projects", "contact"];
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      if (window.scrollY < 150) {
        setActiveSection(null);
        return;
      }
      if (elements.length === 0) return;
      let current: string | null = null;
      let minTop = Infinity;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.top > -rect.height * 0.5) {
          if (rect.top < minTop) {
            minTop = rect.top;
            current = el.id;
          }
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => requestAnimationFrame(updateActive);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 flex justify-between items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 font-serif text-base sm:text-lg font-semibold text-[var(--foreground)] tracking-tight hover:opacity-80 transition-opacity min-w-0"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/70 text-white text-xs font-bold shadow-sm ring-2 ring-[var(--border)]"
            aria-hidden
          >
            CM
          </span>
          Conner Morrison
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0" role="navigation">
          {navItems.map(({ href, label, section }) => {
            const isActive =
              pathname !== "/"
                ? href === "/"
                  ? false
                  : pathname.startsWith("/" + (section ?? ""))
                : section === null
                  ? activeSection === null
                  : activeSection === section;
            return (
              <Link
                key={href}
                href={href}
                className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center h-10 w-10 rounded-xl border-2 border-[var(--border)] bg-[var(--muted-bg)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />) : null}
          </button>
        </div>
      </div>
    </header>
  );
}
