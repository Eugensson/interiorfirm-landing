import serviceImg1 from "@/public/assets/services/icon-1.svg";
import serviceImg2 from "@/public/assets/services/icon-2.svg";
import serviceImg3 from "@/public/assets/services/icon-3.svg";
import projectImg from "@/public/assets/projects/slide-1.jpg";
import projectImg1 from "@/public/assets/projects/project1.jpg";
import projectImg2 from "@/public/assets/projects/project2.jpg";
import projectImg3 from "@/public/assets/projects/project3.jpg";
import projectImg4 from "@/public/assets/projects/project4.jpg";
import womanImg1 from "@/public/assets/testimonials/avatar-img-1.png";
import womanImg2 from "@/public/assets/testimonials/avatar-img-2.png";

import { FooterItem, NavItem, Project, Service, Testimonial } from "@/types";

export const navData: NavItem[] = [
  { name: "Home", path: "home", offset: -150 },
  { name: "About", path: "about", offset: -50 },
  { name: "Services", path: "services", offset: 0 },
  { name: "Projects", path: "projects", offset: 0 },
  { name: "Feedback", path: "feedback", offset: 0 },
];

export const servicesData: Service[] = [
  {
    icon: serviceImg1,
    alt: "House icon",
    title: "Professional Excellence",
    description:
      "Our expert designers craft elegant interiors that seamlessly unite beauty, comfort, and architectural precision.",
  },
  {
    icon: serviceImg2,
    alt: "Chair icon",
    title: "Seamless Design Process",
    description:
      "From first concept to final detail, our workflow ensures every stage runs smoothly and meets your expectations.",
  },
  {
    icon: serviceImg3,
    alt: "Wall icon",
    title: "Reliable Partnership",
    description:
      "We value long-term trust, offering transparent communication and flawless results through every design project.",
  },
];

export const projectsData: Project[] = [
  {
    img: projectImg,
    alt: "Interior design two-bedroom apartment",
    description:
      "This two-bedroom apartment was transformed into a modern, elegant space. Each room maximizes light and functionality, combining soft textures, contemporary furnishings, and thoughtful layouts for a welcoming, stylish home.",
  },
  {
    img: projectImg1,
    alt: "Interior design four-bedroom apartment",
    description:
      "In this four-bedroom apartment, we created a harmonious blend of comfort and sophistication. Bedrooms and common areas are designed with balanced lighting, tailored furniture, and refined materials to enhance space and reflect modern living.",
  },
  {
    img: projectImg2,
    alt: "Interior design one-bedroom apartment",
    description:
      "Our one-bedroom apartment design maximizes space and style. The layout integrates practical storage, modern furnishings, and a neutral palette, creating a cozy yet elegant home with functional and visually appealing corners.",
  },
  {
    img: projectImg3,
    alt: "Interior design two-bedroom apartment",
    description:
      "This two-bedroom apartment combines contemporary style with comfort. Thoughtful room planning ensures functionality and openness, enhanced by soft colors, elegant finishes, and personalized design touches.",
  },
  {
    img: projectImg4,
    alt: "Interior design four-bedroom apartment",
    description:
      "In this four-bedroom apartment, modern design meets functionality. Each room is arranged to optimize space, light, and comfort, featuring sleek furniture, neutral tones, and sophisticated decor for a balanced, inviting home.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    img: womanImg1,
    name: "Sophie Miller",
    role: "Project Manager",
    text: "From the first meeting to the final reveal, the entire process was seamless. The designers truly understood our needs and translated them into a space that perfectly reflects both comfort and sophistication.",
  },
  {
    img: womanImg2,
    name: "Emily Parker",
    role: "Marketing Specialist",
    text: "I was impressed by their creativity and modern approach to design. The team managed to capture my vision and transform it into a stylish, cohesive interior that feels both welcoming and inspiring every day.",
  },
];

export const footerData: FooterItem[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Our Team", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "Our Story", href: "/" },
    ],
  },
  {
    title: "Design",
    links: [
      { label: "2D Plans", href: "/" },
      { label: "3D Renderings", href: "/" },
      { label: "Collaboration", href: "/" },
      { label: "Design Tools", href: "/" },
      { label: "Resources", href: "/" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Our Projects", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Get a Quote", href: "/" },
      { label: "Fiverr Services", href: "/" },
      { label: "Upwork Portfolio", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Company Profile", href: "/" },
      { label: "Design Assets", href: "/" },
      { label: "Location Map", href: "/" },
      { label: "Project Estimator", href: "/" },
      { label: "Standard Quotation", href: "/" },
    ],
  },
];
