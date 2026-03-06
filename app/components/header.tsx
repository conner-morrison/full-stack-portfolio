"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header({ onOpenCommand }: { onOpenCommand: () => void }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 flex justify-between items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 font-serif text-base sm:text-lg font-semibold text-[var(--foreground)] tracking-tight hover:opacity-80 transition-opacity min-w-0"
        >
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-sm ring-2 ring-[var(--border)] items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/70 text-white text-xs font-bold" aria-hidden>
            {avatarError ? (
              "CM"
            ) : (
              <Image
                src="/conner/avatar.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="36px"
                priority
                onError={() => setAvatarError(true)}
              />
            )}
          </span>
          Conner Morrison
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0" role="navigation">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : href.startsWith("/#")
                  ? false
                  : pathname.startsWith(href);
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
