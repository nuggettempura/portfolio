import theAccessGroupIcon from "@images/the-access-group.svg";
import ifcaIcon from "@images/ifca-msc-bhd.svg";
import reactIcon from "@images/react.svg";
import nextjsIcon from "@images/nextjs.svg";
import firebaseIcon from "@images/firebase.svg";
import htmlIcon from "@images/html.svg";
import scssIcon from "@images/sass.svg";
import javascriptIcon from "@images/javascript.svg";
import typescriptIcon from "@images/typescript.svg";
import angularIcon from "@images/angular.svg";
import tailwindcssIcon from "@images/tailwind.svg";
import expressjsIcon from "@images/express.svg";
import graphqlIcon from "@images/graphql.svg";
import postgresqlIcon from "@images/postgresql.svg";
import nginxIcon from "@images/nginx.svg";
import bootstrapIcon from "@images/bootstrap.svg";
import nodeIcon from "@images/nodejs.svg";
import shopifyLiquidIcon from "@images/shopify.svg";
import linuxIcon from "@images/linux.svg";
import githubIcon from "@images/github.svg";
import linkedinIcon from "@images/linkedin.svg";
import dinoGame from "@images/dino-game.png";
import spotifyClone from "@images/spotify-clone.png";
import solsEnergy from "@images/solsenergy-meta-image_2.png";

export interface NavLink {
  label: string;
  href: string;
}

export type DateRange = {
  start: Date;
  end: Date | null;
};

export interface CardData {
  company: string;
  title: string;
  description: string;
  techStack: string[];
  duration: DateRange;
  companyImage: string;
}

interface ContactData {
  link: string;
  icon: string;
  linkName: string;
}

export interface ProjectData {
  name: string;
  image: string;
  link: string;
  description: string;
  techStack: string[];
  projectLink: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const workExperienceData: CardData[] = [
  {
    company: "SOLS Energy Sdn Bhd",
    title: "Web Application Developer",
    description:
      "1. Maintained an internal admin dashboard (sols-energy-admin) using Next.js, TypeScript, Firebase (RTDB and Firestore), and Vercel to manage energy project operations. \n 2. Developed a bulk WhatsApp payment reminder feature integration Respond.io Conversations API, replacing a manual process and cutting the time to send reminders to all subscribers from 2 hours to 10 minutes \n 3. Built an automated invoice email delivery feature using @react-pdf/renderer, @puppeteer-core, generating and sending PDF invoices within Vercel serverless function constraints, reducing solar generation billing from around 3 days of manual checking and sending to roughly 1 hour. \n 4. Managed feature development and Git branch workflows across a team repository, working independently to design and ship features end to end.",
    companyImage: solsEnergy,
    duration: {
      start: new Date("2026-05-18"),
      end: null,
    },
    techStack: ["React", "TypeScript", "Firebase", "Tailwind", "Vercel"],
  },
  {
    company: "The Access Group",
    title: "Frontend Developer",
    description:
      "1. Built and maintained recruitment websites for clients using HTML, SCSS, JavaScript, jQuery, and Shopify Liquid with the company's built-in CMS. \n 2. Delivered new client builds, redesigns, and add-ons for existing clients, averaging 2-3 client website updates per week and one new project (redesign or new client) per month. \n 3. Ensured website compliance with WCAG 2 AA and AAA accessibility standards, achieving scores above 95% on Google Lighthouse and accessibility checker audits, while optimizing Core Web Vitals and strengthening SEO performance. ",
    techStack: ["Shopify Liquid", "jQuery", "JavaScript", "SASS", "CSS"],
    duration: {
      start: new Date("2025-01-06"),
      end: new Date("2026-03-20"),
    },
    companyImage: theAccessGroupIcon,
  },
  {
    company: "IFCA MSC BHD",
    title: "Software Engineer (Full Stack)",
    description:
      "1. Maintained a property-industry SaaS product (Sales-Admin) for the Indonesian market using TypeScript, React, Angular, TypeGraphQL, TypeORM, Node.js, Express.js, and PostgreSQL. \n 2. Led application security work to prevent XSS and CSRF attacks using framework features, Burp Suite, RegEx, and byte-size validation; eliminated 15 of 17 identified Critical (CVSS 10.0-9.0) and High (CVSS 8.9-7.0) vulnerabilities in the company's flagship product, leaving only minor issues outstanding. \n 3. Performed e-invoice installations, integrations, and configurations across diverse client environments and Windows Server instances, completing 100+ client onboardings in two months while maintaining secure data connections. \n 4. Worked in an Agile environment with daily standups, delivering an average of 2 JIRA tickets per week across new features, improvements, and code cleanup, in collaboration with local and overseas (Indonesia-based) teams. ",
    techStack: [
      "React",
      "Angular",
      "SASS",
      "TypeScript",
      "JavaScript",
      "Express",
      "Apollo GraphQL",
      "TypeORM",
      "PostgreSQL",
      "NodeJS",
      "Linux",
      "Burp Suite",
    ],
    duration: {
      start: new Date("2023-04-08"),
      end: new Date("2024-12-20"),
    },
    companyImage: ifcaIcon,
  },
];

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "HTML", icon: htmlIcon },
      { name: "SCSS", icon: scssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "Angular", icon: angularIcon },
      { name: "TailwindCSS", icon: tailwindcssIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Shopify Liquid", icon: shopifyLiquidIcon },
    ],
  },
  {
    category: "Backend & data",
    items: [
      { name: "Node JS", icon: nodeIcon },
      { name: "Express JS", icon: expressjsIcon },
      { name: "GraphQL", icon: graphqlIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Firebase", icon: firebaseIcon },
    ],
  },
  {
    category: "Platform",
    items: [
      { name: "NginX", icon: nginxIcon },
      { name: "Linux", icon: linuxIcon },
    ],
  },
];

export const contactData: ContactData[] = [
  {
    link: "https://github.com/nuggettempura",
    icon: githubIcon,
    linkName: "Github Link",
  },
  {
    link: "https://www.linkedin.com/in/adam-halid/",
    icon: linkedinIcon,
    linkName: "LinkedIn Link",
  },
];

export const projects: ProjectData[] = [
  {
    name: "Dino Game",
    link: "https://github.com/nuggettempura/Dino-Game",
    image: dinoGame,
    description:
      "A simple dino game built with HTML CSS and JS. This project mainly challenges my understanding of DOM interaction",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://github.com/nuggettempura/Dino-Game",
  },
  {
    name: "Spotify Clone",
    link: "https://github.com/nuggettempura/Spotify-Clone",
    image: spotifyClone,
    description: "Imitating Spotifys UI with CSS",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://github.com/nuggettempura/Spotify-Clone",
  },
];
