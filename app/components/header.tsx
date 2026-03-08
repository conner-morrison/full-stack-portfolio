"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3X3, Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { BackgroundMode } from "@/app/types";

const navItems = [
  { href: "/#top", label: "Home", section: null as string | null },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export function Header({
  onOpenCommand,
  backgroundMode,
  onToggleBackgroundMode,
}: {
  onOpenCommand: () => void;
  backgroundMode: BackgroundMode;
  onToggleBackgroundMode: () => void;
}) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-spy: update active nav item based on which section is in view (home page only)
  useEffect(() => {
    if (pathname !== "/") return;

    const updateActive = () => {
      const sectionIds = ["about", "projects", "contact"];
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const activationOffset = 180;

      if (elements.length === 0) return;

      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      let current = elements[0]?.id ?? "home";

      for (const el of elements) {
        const sectionTop = el.offsetTop;
        if (window.scrollY + activationOffset >= sectionTop) {
          current = el.id;
        } else {
          break;
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm w-full min-w-0">
      <div className="w-full max-w-[min(92vw,64rem)] mx-auto px-[clamp(0.75rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.5vw,1rem)] flex flex-wrap justify-between items-center gap-2 sm:gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 font-serif text-[clamp(0.875rem,2vw,1.125rem)] font-semibold text-[var(--foreground)] tracking-tight hover:opacity-80 transition-opacity min-w-0 shrink-0"
        >
          <span
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/70 text-white text-[10px] sm:text-xs font-bold shadow-sm ring-2 ring-[var(--border)]"
            aria-hidden
          >
            CM
          </span>
          <span className="truncate">Conner Morrison</span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0 flex-wrap justify-end" role="navigation">
          {navItems.map(({ href, label, section }) => {
            const isActive =
              pathname !== "/"
                ? href === "/" || href === "/#top"
                  ? false
                  : pathname.startsWith("/" + (section ?? ""))
                : section === null
                  ? activeSection === "home"
                  : activeSection === section;
            const isHome = (href === "/" || href === "/#top") && label === "Home";
            const isSectionLink = section !== null;
            return (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                  if (isHome && pathname === "/" && !window.location.hash) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }
                  if (pathname === "/" && isSectionLink) {
                    const id = href.split("#")[1];
                    if (id) {
                      const el = document.getElementById(id);
                      if (el) {
                        e.preventDefault();
                        window.history.replaceState(null, "", href);
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }
                }}
                className={`min-h-[2.75rem] min-w-[2.75rem] sm:min-h-10 sm:min-w-10 px-2 sm:px-4 py-2 rounded-lg text-[11px] sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
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
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={onToggleBackgroundMode}
            className="inline-flex items-center gap-2 min-h-[2.75rem] sm:min-h-10 px-3 sm:px-3 rounded-xl border-2 border-[var(--border)] bg-[var(--muted-bg)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`Switch background animation mode. Current mode: ${backgroundMode}`}
            title={`Background mode: ${backgroundMode === "aurora" ? "Aurora" : "Grid"}`}
          >
            {backgroundMode === "aurora" ? (
              <Sparkles size={16} strokeWidth={2} />
            ) : (
              <Grid3X3 size={16} strokeWidth={2} />
            )}
            <span className="hidden sm:inline text-xs font-semibold">
              {backgroundMode === "aurora" ? "Aurora" : "Grid"}
            </span>
          </button>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] sm:min-h-10 sm:min-w-10 rounded-xl border-2 border-[var(--border)] bg-[var(--muted-bg)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />) : null}
          </button>
        </div>
      </div>
    </header>
  );
}
