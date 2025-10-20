"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const ServicesTertiary = () => {
  return (
    <section className="xl:border-b border-primary/30">
      <div className="container relativez-40 xl:border-x border-primary/30">
        <div className="max-w-150 pt-24 mx-auto xl:mx-0">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center xl:text-left"
          >
            We will make Unique Designs for You.
          </motion.h2>
        </div>
        <motion.ul
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col xl:flex-row items-center gap-7.5"
        >
          <li className="flex">
            <Image
              src="/assets/services/s1.png"
              width={750}
              height={604}
              alt="Interior design"
            />
          </li>
          <li className="flex">
            <Image
              src="/assets/services/s2.png"
              width={750}
              height={604}
              alt="Interior design"
            />
          </li>
        </motion.ul>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="hidden xl:block xl:py-20 text-xl"
        >
          Every project we create is guided by your personality, lifestyle, and
          aspirations. Our team blends modern aesthetics with timeless details
          to design interiors that feel both unique and welcoming. The result is
          a space that tells your story through texture, form, and light.
        </motion.p>
      </div>
    </section>
  );
};
