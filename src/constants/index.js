import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm a student passionate about learning different technologies. Here, I share my journey of trying out various projects to improve my skills in web development and other technologies. Each project helps me learn and grow.`;

export const ABOUT_TEXT = `I am Eligio R. Bautista III, a fourth-year student at Manuel S. Enverga University, I am currently pursuing a Bachelor of Science in Information Technology with a specialization in Web and Mobile Application Development.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Freelance Programmer",
    company: "Freelance",
    description: `
    Completed commissions for students struggling with their programming or development tasks and created basic websites for small businesses.
    `,
    technologies: [],
  },
  {
    year: "2021 - 2023",
    role: "Computer Technician",
    company: "Freelance",
    description: `
    Self-taught technician who repaired and upgraded laptops and desktop computers, including reformatting, OS installation, and hardware upgrades (SSD/RAM installation). Performed password bypassing for local and Microsoft accounts, troubleshooting user issues with forgotten credentials. Installed and configured essential software, ensuring systems were optimized for user requirements. Provided technical support for hardware and software issues.
    `,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "NiyogHub Web Application | Capstone Project",
    image: project1,
    description:
      "NiyogHub is an innovative web application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map.",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    title: "NiyogHub Mobile Application | Capstone Project",
    image: project1,
    description:
      "NiyogHub is an innovative mobile application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map.",
    technologies: ["React Native", "Express.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Lucena City, Quezon Province, Philippines",
  phoneNo: "+63 933 862 9001",
  email: "dev.elibautista@gmail.com",
};