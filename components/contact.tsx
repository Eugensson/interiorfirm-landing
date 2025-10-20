"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const Contact = () => {
  return (
    <section className="relative min-h-175 xl:min-h-190">
      <div className="container pt-25 xl:border-x border-primary/30">
        <div className="absolute left-0 right-0 py-24 xl:rounded-br-[370px] bg-secondary">
          <div className="container">
            <div className="w-full flex flex-col xl:flex-row items-center justify-between">
              <div className="w-full xl:max-w-204 text-center xl:text-left">
                <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="h2 !mb-9"
                >
                  Interested in
                  <br />
                  Working with us?
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-12 max-w-150 mx-auto xl:mx-0 text-xl"
                >
                  Let’s bring your vision to life. Our team is ready to design
                  interiors that reflect your style and meet your needs with
                  creativity, precision, and care. Reach out today to start your
                  next project with confidence.
                </motion.p>
                <motion.button
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  type="button"
                  className="btn btn-lg btn-accent"
                >
                  Contact Us
                </motion.button>
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="hidden xl:flex flex-1 justify-end"
              >
                <Image
                  src="/assets/contact/img.png"
                  width={265}
                  height={410}
                  alt="Interior design"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
