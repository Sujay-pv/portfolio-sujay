import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  capgemini,
  independent,
  horizon,
  Fitpulse,
  StaffEase,
  GenMail,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Tinkerer",
    icon: web,
  },
  {
    title: "React.JS Developer",
    icon: mobile,
  },
  {
    title: "REST APIs with Java & Node",
    icon: backend,
  },
  {
    title: "AI & Automation Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Horizon Ventures",
    icon: horizon,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jan 2023",
    points: [
      "Independently developed a responsive and dynamic Single Page Application (SPA) using React.js for an Environmental Consulting firm to showcase their products and services.",
      "Implemented reusable components, smooth navigation, and clean UI/UX optimized for performance and user engagement.",
      "Delivered the project end-to-end, from requirement gathering to deployment, ensuring cross-device compatibility, basic SEO, and a polished user experience.",
    ],
  },
  {
    title: "Analyst / Full Stack Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Contributed to the maintenance of internal tools, ensuring reliability and performance across client-facing environments.",
      "Collaborated with cross-functional teams to analyze issues, resolve bugs, and deliver minor feature enhancements based on business requirements.",
      "Gained hands-on experience with real-world production systems, improving skills in debugging, documentation, and stakeholder communication.",
    ],
  },
  {
    title: "Independent Developer",

    icon: independent,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Building AI-powered tools like WhisprBill (invoice generator) and GenMail (Email Assistant), using LLM APIs like Gemini API and OpenAI API.",
      "Developing SaaS-style applications that address real-world productivity and business needs using React, Node.js and Spring Boot",
      "Actively learning and applying new technologies to expand full-stack capabilities.",
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: "MERN Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "CI/CD & DevOps",
    modelPath: "/models/docker.glb",
    scale: 1.5,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GenMail - Email Assistant",
    description:
      "GenMail is a smart email assistant that generates context-aware, customizable responses directly within Gmail via a seamless Chrome extension and web app. Designed to save time and reduce repetitive writing, it offers tone selection, auto thread detection, and smooth integration for effortless email automation.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "chrome manifest",
        color: "pink-text-gradient",
      },
    ],
    image: GenMail,
    source_code_link: "https://github.com/Sujay-pv/ai-email-generator",
  },
  {
    name: "Staff Ease",
    description:
      "StaffEase is an employee management system equipped with a custom-built resume parser to streamline candidate onboarding and data extraction. It automates the process of parsing resumes and managing employee records, improving efficiency and reducing manual effort.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: StaffEase,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fitpulse",
    description:
      "Fitpulse is an all-in-one online platform offering fitness and wellness content, home workout equipment, and access to nearby gyms for users of all experience levels. It provides a convenient and affordable way to stay healthy, whether you prefer exercising at home or at a gym.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Fitpulse,
    source_code_link: "https://github.com/Sujay-pv/Fitpulse",
  },
  {
    name: "WhisprBill - In Progress",
    description:
      "WhisprBill is an AI-powered tool that lets users generate professional invoices through natural chat input, offering a seamless and intuitive experience. With voice support coming soon, it aims to deliver a fully hands-free, end-to-end invoicing solution in just seconds.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    // source_code_link: "https://github.com/Sujay-pv/",
  },
  
  
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  techStackIcons,
};
