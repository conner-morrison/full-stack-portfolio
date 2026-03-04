"use client";

import ProjectCard from "../ProjectCard/page";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProjects() {
    return (
      <section className="px-24 py-32 space-y-20">
  
        <h2 className="text-3xl font-semibold">Featured Work</h2>
  
        {/* Large Feature */}
        <motion.div
          whileHover={{ y: -8 }}
          className="relative rounded-3xl overflow-hidden border border-neutral-800"
        >
          <Image
            src="/projects/saas-platform.png"
            alt="Multi-Tenant SaaS Admin Dashboard Screenshot"
            width={1600}
            height={900}
            className="object-cover"
          />
  
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-medium">
              Multi-Tenant SaaS Platform
            </h3>
            <p className="text-neutral-400">
              35% performance improvement via SSR + Redis caching
            </p>
          </div>
        </motion.div>
  
        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12">
  
          <ProjectCard
            image="/projects/crm.png"
            title="Enterprise CRM Modernization"
          />
  
          <ProjectCard
            image="/projects/workflow.png"
            title="Workflow SaaS Platform"
          />
  
        </div>
  
      </section>
    );
  }