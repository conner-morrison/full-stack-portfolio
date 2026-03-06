"use client";

import { motion } from "framer-motion";

export function AuroraMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-30 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[8%] top-[-6%] h-[28rem] w-[28rem] rounded-full blur-[92px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.48)_0%,rgba(59,130,246,0.24)_34%,transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.34)_0%,rgba(59,130,246,0.18)_34%,transparent_68%)]"
        animate={{
          x: [0, 90, 0],
          y: [0, 55, 0],
          scale: [1, 1.12, 1],
          opacity: [0.82, 1, 0.82],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
      <motion.div
        className="absolute right-[-10%] top-[14%] h-[24rem] w-[24rem] rounded-full blur-[82px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.26)_0%,rgba(56,189,248,0.2)_30%,transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.24)_0%,rgba(96,165,250,0.14)_30%,transparent_68%)]"
        animate={{
          x: [0, -72, 0],
          y: [0, 54, 0],
          scale: [1.02, 0.94, 1.02],
          opacity: [0.72, 0.96, 0.72],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
      <motion.div
        className="absolute left-[26%] bottom-[-10%] h-[22rem] w-[22rem] rounded-full blur-[80px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.24)_0%,rgba(99,102,241,0.16)_32%,transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.22)_0%,rgba(59,130,246,0.1)_32%,transparent_68%)]"
        animate={{
          x: [0, 48, 0],
          y: [0, -72, 0],
          scale: [0.96, 1.1, 0.96],
          opacity: [0.64, 0.88, 0.64],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
      <motion.div
        className="absolute left-[42%] top-[10%] h-[16rem] w-[16rem] rounded-full blur-[72px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.22)_0%,rgba(125,211,252,0.14)_32%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14)_0%,rgba(125,211,252,0.08)_32%,transparent_70%)]"
        animate={{
          x: [0, 32, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
          opacity: [0.58, 0.86, 0.58],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
    </div>
  );
}
