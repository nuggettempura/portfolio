import theAccessGroupIcon from "@images/the-access-group.svg";
import ifcaIcon from "@images/ifca-msc-bhd.svg";
import reactIcon from "@images/react.svg";
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

export interface NavLink {
  label: string;
  href: string;
}

export type DateRange = {
  start: Date;
  end: Date;
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
}

export const navLinks: NavLink[] = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Work Experience", href: "work-experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export const workExperienceData: CardData[] = [
  {
    company: "The Access Group",
    title: "Frontend Developer",
    description:
      "1. Develop and maintain recruitment websites using HTML, SCSS, JavaScript, jQuery, and Shopify Liquid. \n 2. Create new websites for clients, redesign existing sites, and implement additional features or updates. \n 3. Use Shopify Liquid and the company’s CMS to build and customize templates. \n 4. Regularly manage 2–3 client website updates per week and contribute to approximately one new website or redesign project each month.",
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
      "1. Develop and maintain full-stack applications using TypeScript, React, Angular, Node.js, C# .NET, and PostgreSQL. \n 2. Work in an Agile team to deliver features and improvements, averaging four tasks per week. \n 3. Improve application security by mitigating XSS and CSRF vulnerabilities, eliminating critical and high-risk issues. \n 4. Implement and configure e-invoicing integrations for 100+ clients, ensuring secure system connections.",
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

export const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "SCSS", icon: scssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Angular", icon: angularIcon },
  { name: "TailwindCSS", icon: tailwindcssIcon },
  { name: "Shopify Liquid", icon: shopifyLiquidIcon },
  { name: "Express JS", icon: expressjsIcon },
  { name: "Node JS", icon: nodeIcon },
  { name: "GraphQL", icon: graphqlIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "NginX", icon: nginxIcon },
  { name: "Linux", icon: linuxIcon },
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
  },
  {
    name: "Spotify Clone",
    link: "https://github.com/nuggettempura/Spotify-Clone",
    image: spotifyClone,
  },
];
