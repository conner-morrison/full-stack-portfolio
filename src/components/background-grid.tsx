"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const gridLight =
  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)";
const gridDark =
  "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)";

export function BackgroundGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ backgroundPosition: "50% 0%" }}
        animate={{ backgroundPosition: "50% 60px" }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
        className="absolute inset-0 bg-[length:56px_56px] opacity-[0.97]"
        style={{
          backgroundImage: isDark ? gridDark : gridLight,
        }}
      />
    </div>
  );
}