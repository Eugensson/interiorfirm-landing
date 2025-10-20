"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

import { fadeIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section
      className="relative py-24 xl:py-0 xl:h-200 flex items-center"
      id="home"
    >
      <div className="absolute top-0 left-0 z-10 w-full xl:w-3/4 h-full xl:rounded-tr-[500px] bg-secondary" />
      <div className="relative z-40 h-full w-full max-w-292.5 mx-auto flex items-center xl:border-l xl:border-primary/30 before:content-[''] before:absolute before:left-67.5 before:top-0 before:h-full xl:before:border-l before:border-primary/30 before:-z-[1]">
        <div className="mx-auto xl:mx-0 flex text-center xl:text-left">
          <div className="w-full max-w-150 xl:max-w-180 px-4 xl:px-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="h1 mb-8"
            >
              Modern Interior Design Studio
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mx-auto xl:mx-0 mb-12 max-w-120"
            >
              Interiorfirm is a renowned multidisciplinary studio crafting
              interiors that blend architecture, design, and decor — redefining
              the essence of laid-back luxury.
            </motion.p>
            <div className="xl:absolute flex xl:items-start justify-center gap-16">
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="hidden xl:block w-67.5 h-119.5 rounded-full bg-gray-200"
              >
                <Image
                  src="/assets/hero/img1.png"
                  width={270}
                  height={478}
                  alt="Interior design"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <button
                  type="button"
                  className="btn btn-lg btn-accent flex items-center gap-3 !px-6"
                >
                  <span>Explore Now</span>
                  <MdArrowRightAlt size={24} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute right-0 z-20 hidden xl:flex"
      >
        <div className="relative z-20 w-195 h-150 rounded-bl-[400px] overflow-hidden">
          <Image src="/assets/hero/hero-img.jpg" alt="Interior design" fill />
        </div>
        <div className="absolute top-10 -left-10 z-10 w-205 h-150 border border-primary/30 rounded-bl-[400px]" />
      </motion.div>
      <div className="absolute bottom-0 right-0 z-10 w-292.5 xl:border-b border-primary/30" />
    </section>
  );
};
