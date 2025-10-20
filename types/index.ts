import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavItem = {
  name: string;
  path: string;
  offset: number;
};

export type Service = {
  icon: StaticImport;
  alt: string;
  title: string;
  description: string;
};

export type Project = {
  img: StaticImport;
  alt: string;
  description: string;
};

export type Testimonial = {
  img: StaticImport;
  name: string;
  role: string;
  text: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type FooterItem = {
  title: string;
  links: LinkItem[];
};
