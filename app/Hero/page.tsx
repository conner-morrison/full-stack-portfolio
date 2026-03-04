"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center px-24">
  
        {/* Spotlight */}
        <div className="absolute inset-0 -z-10 
          bg-[radial-gradient(800px_circle_at_50%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
  
        <div className="max-w-3xl space-y-8">
  
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-semibold tracking-tight"
          >
            Conner Morrison
          </motion.h1>
  
          <p className="text-xl text-neutral-400">
            Engineering Manager & Software Architect
          </p>
  
          <p className="text-lg text-neutral-300">
            I build scalable SaaS systems and lead high-performing engineering teams.
          </p>
  
          <div className="flex gap-6">
            <button className="px-6 py-3 bg-white text-black rounded-full text-sm">
              View Work
            </button>
  
            <button className="px-6 py-3 border border-neutral-700 rounded-full text-sm">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    );
}