"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-2xl"
    >
      {children}
    </motion.div>
  );
}