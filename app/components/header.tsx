"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header({ onOpenCommand }: { onOpenCommand: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center text-sm">
        <button
          onClick={onOpenCommand}
          className="font-medium tracking-tight"
        >
          Conner Morrison
        </button>

        <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="hover:opacity-80 transition-colors duration-200"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={onOpenCommand}
            className="border border-neutral-300 dark:border-neutral-700 px-3 py-1 rounded-md text-xs"
          >
            ⌘K
          </button>
        </div>
      </div>
    </header>
  );
}