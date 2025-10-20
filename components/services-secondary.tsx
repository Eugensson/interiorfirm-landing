"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const ServicesSecondary = () => {
  return (
    <section className="relative xl:h-345 border-b border-primary/30">
      <div className="container z-40 h-full xl:border-x border-primary/30">
        <div className="pt-25 flex justify-end">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="h2 mx-auto xl:mx-0 max-w-150 text-center xl:text-right"
          >
            Providing Innovative Interior Design.
          </motion.h2>
        </div>
      </div>

      <div className="absolute left-0 top-120 w-full hidden xl:block">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="absolute -top-30 left-0 w-full max-w-160"
        >
          <Image
            src="/assets/services/1.jpg"
            width={640}
            height={597}
            alt="Interior design"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="absolute top-0 right-0 pl-7.5 pt-7.5 w-258.75 h-224.75 bg-page border-t border-primary/30"
        >
          <div className="absolute top-7.5 z-10 size-217.5 border-l border-primary/30">
            <div className="w-217.5 h-117.5 rounded-br-[370px] overflow-hidden">
              <Image
                src="/assets/services/2.jpg"
                width={875}
                height={428}
                alt="Interior design"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="absolute bottom-7.5 right-0 w-242.5 h-139.25 flex flex-col justify-end pb-12 rounded-tr-[370px] bg-secondary">
            <div className="relative z-40 py-12 ml-20 max-w-165">
              <p className="mb-10 text-xl italic leading-relaxed">
                Every space we create tells a story of balance, comfort, and
                creativity. From concept sketches to final touches, our team
                transforms interiors into inspiring environments that reflect
                individuality and refined taste. Design becomes personal,
                functional, and beautifully timeless.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="xl:hidden w-full h-100 bg-secondary">
        <div className="container h-full flex items-center">
          <div className="relative z-40 py-12 mx-auto max-w-170 flex flex-col items-center justify-center">
            <p className="mb-10 text-lg leading-relaxed text-center">
              We combine artistic vision with architectural precision to bring
              every interior to life. Each project is guided by passion,
              innovation, and attention to detail — creating spaces that inspire
              everyday living and elevate your sense of home.
            </p>
            <div className="px-16 flex items-center justify-between">
              <button type="button" className="btn btn-lg btn-accent">
                About Us
              </button>
              {/* <Image
                src="/assets/arrow-right.svg"
                width={125}
                height={6}
                alt="Arrow right"
                className="hidden xl:block"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
