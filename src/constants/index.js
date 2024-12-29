import project1 from "../assets/projects/project-1.png"; 
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg"; 

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
    title: "NiyogHub Web Application",
    image: project1,
    description:
      "NiyogHub is an innovative web application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map.",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    title: "NiyogHub Mobile Application",
    image: project2,
    description:
      "NiyogHub is an innovative mobile application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map.",
    technologies: ["React Native", "Express.js", "MongoDB"],
  },
  {
    title: "NiyogHub Blog",
    image: project3,
    description: "-",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    title: "NoteKeeper",
    image: project4,
    description: "-",
    technologies: ["React", "Tailwind", "Django", "SQLite3"],
  },
  {
    title: "Elliana coffee + sweets",
    image: project5,
    description: "-",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "EspressoExpress",
    image: project6,
    description: "-",
    technologies: ["Dart", "Flutter"],
  },
  {
    title: "Student Information System",
    image: project7,
    description: "-",
    technologies: ["Python", "PyQt6", "SQL"],
  },
];

export const CONTACT = {
  address: "Lucena City, Quezon Province, Philippines",
  phoneNo: "+63 933 862 9001",
  email: "dev.elibautista@gmail.com",
};
