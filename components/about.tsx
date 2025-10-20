"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const About = () => {
  return (
    <section
      className="relative min-h-auto xl:h-153.5 border-b border-primary/30"
      id="about"
    >
      <div className="container h-full xl:border-x border-primary/30">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="absolute left-[32%] w-67.5 h-119.5 rounded-full hidden xl:block"
        >
          <Image
            src="/assets/about/img1.png"
            alt="Interior design"
            width={270}
            height={478}
          />
        </motion.div>
        <div className="h-full flex justify-center gap-4">
          <div className="relative hidden xl:flex flex-1">
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="absolute left-41 bottom-0 w-33 h-51.5"
            >
              <Image
                src="/assets/about/img2.png"
                alt="Interior design"
                width={132}
                height={206}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="absolute bottom-15 -left-16.25 w-33 h-50"
            >
              <Image
                src="/assets/about/scroll-down.svg"
                alt="Interior design"
                width={132}
                height={206}
              />
            </motion.div>
          </div>
          <div className="p-12 flex flex-1 items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <motion.ul
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="mb-12 flex gap-16"
              >
                <li className="flex flex-col gap-2s">
                  <p className="text-5xl xl:text-[70px] font-extrabold leading-none">
                    24
                  </p>
                  <p className="max-w-25 text-xl leading-6">
                    Years of experience
                  </p>
                </li>
                <li className="flex flex-col gap-2s">
                  <p className="text-5xl xl:text-[70px] font-extrabold leading-none">
                    162
                  </p>
                  <p className="max-w-25 text-xl leading-6">
                    Projects completed
                  </p>
                </li>
              </motion.ul>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <h4 className="h4 mb-8 text-center">Disign your dream home.</h4>
                <form className="min-h-33.75 xl:min-h-auto flex flex-col items-center xl:flex-row gap-4 xl:gap-0 drop-shadow-xl drop-shadow-primary/10">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input pl-6"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary w-full xl:w-auto"
                  >
                    Let&apos;s Chat
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
