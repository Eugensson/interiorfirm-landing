"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Logo } from "@/components/logo";

import { footerData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="relative">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container py-24"
      >
        <div className="flex flex-col xl:flex-row justify-center gap-24 text-center xl:text-left">
          <div className="mx-auto xl:mx-0 xl:w-95">
            <Logo className="mb-8 block" width={252} height={36} />
            <p className="max-w-175 mx-auto xl:mx-0">
              Transform your spaces with Interiorfirm. We create interiors that
              balance style, comfort, and innovation, turning every room into a
              functional and aesthetically pleasing environment.
            </p>
          </div>
          <ul className="flex flex-1 flex-col xl:flex-row gap-24 xl:gap-0 text-center xl:text-left">
            {footerData.map((section) => (
              <li key={section.title} className="flex-1">
                <h4 className="mb-12 text-xl font-secondary">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-6">
                  {section.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="border-t border-primary/30"
      >
        <div className="container py-10 text-sm text-center">
          <p>&copy; Copyright 2025 Interiorfirm - All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};
