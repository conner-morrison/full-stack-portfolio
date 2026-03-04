"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ image, title }: any) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="rounded-2xl overflow-hidden border border-neutral-800"
      >
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="object-cover"
        />
  
        <div className="p-6">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </motion.div>
    );
  }