"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export function Parallax({
  children,
  speed = 50,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}