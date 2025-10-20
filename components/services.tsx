"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { servicesData } from "@/lib/data";

export const Services = () => {
  return (
    <section id="services" className="border-b border-primary/30">
      <div className="container pt-25 pb-12.5 xl:border-x xl:border-primary/30">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="h2 mb-12 xl:mb-22.5 max-w-140 mx-auto xl:mx-0 text-center xl:text-left"
        >
          Design the Space You’ve Always Dreamed Of
        </motion.h2>
        <ul className="flex flex-col xl:flex-row items-center xl:items-start">
          {servicesData.map(({ icon, alt, title, description }, index) => (
            <motion.li
              variants={fadeIn("up", 0.2 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="px-15 py-12 h-110 max-w-120 xl:max-w-max flex-1 text-center xl:text-left"
            >
              <Image
                src={icon}
                width={110}
                height={110}
                alt={alt}
                className="mb-11 mx-auto xl:mx-0"
              />
              <h4 className="mb-4 text-3xl font-medium">{title}</h4>
              <p>{description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
