"use client";

import { motion } from "framer-motion";

import { ProjectsSlider } from "@/components/projects-slider";

import { fadeIn } from "@/lib/variants";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container xl:border-x border-primary/30">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="h2 pt-24 pb-22.5 !mb-0 text-center xl:text-right"
        >
          Amazin project from
          <br />
          Talented Interior Architects!
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <ProjectsSlider />
        </motion.div>
      </div>
    </section>
  );
};
