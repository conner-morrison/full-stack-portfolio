"use client";

import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">

      <motion.div
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "0px 100px" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
               linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
    </div>
  );
}