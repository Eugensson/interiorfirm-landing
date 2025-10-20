"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 126, height = 18 }: LogoProps) => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-150}
      className={cn("cursor-pointer", className)}
    >
      <Image src="/assets/logo.svg" alt="Logo" width={width} height={height} />
    </ScrollLink>
  );
};
