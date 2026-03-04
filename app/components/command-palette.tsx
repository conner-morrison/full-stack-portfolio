"use client";

import { Command } from "cmdk";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const navigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 bg-black/40 flex items-start justify-center pt-40"
    >
      <Command className="bg-white dark:bg-neutral-900 w-full max-w-lg rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
        <Command.Input
          placeholder="Search..."
          className="w-full px-4 py-3 outline-none bg-transparent border-b border-neutral-200 dark:border-neutral-800"
        />
        <Command.List className="p-2">
          <Command.Item onSelect={() => navigate("/")}>
            Home
          </Command.Item>
          <Command.Item onSelect={() => navigate("/about")}>
            About
          </Command.Item>
          <Command.Item onSelect={() => navigate("/architecture")}>
            Architecture
          </Command.Item>
          <Command.Item onSelect={() => navigate("/projects")}>
            Projects
          </Command.Item>
          <Command.Item onSelect={() => navigate("/leadership")}>
            Leadership
          </Command.Item>
          <Command.Item onSelect={() => navigate("/contact")}>
            Contact
          </Command.Item>
        </Command.List>
      </Command>
    </Command.Dialog>
  );
}