"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialsSlider } from "@/components/testimonials-slider";

import { fadeIn } from "@/lib/variants";

export const Testimonials = () => {
  return (
    <section className="xl:h-217.5" id="feedback">
      <div className="container pt-32 xl:border-x border-primary/30">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="xl:mb-12 flex items-center justify-between"
        >
          <h2 className="h2 !mb-0 mx-auto xl:mx-0 text-center xl:text-left">
            Our Customers
            <br />
            Feedback.
          </h2>
          <Image
            src="/assets/testimonials/quotes.svg"
            width={228}
            height={158}
            alt="Quotes icon"
            className="hidden xl:block"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <TestimonialsSlider />
        </motion.div>
      </div>
    </section>
  );
};
