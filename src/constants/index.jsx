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
    description: (
      <ul className="list-disc list-inside ml-5">
        <li>Completed commissions for students struggling with programming or development tasks</li>
        <li>Created basic websites for small businesses</li>
      </ul>
    ),
    technologies: [],
  },
  {
    year: "2021 - 2023",
    role: "Computer Technician",
    company: "Freelance",
    description: (
      <ul className="list-disc list-inside ml-5">
        <li>Repaired and upgraded laptops and desktop computers</li>
        <li>Reformatted, installed OS, and upgraded hardware (SSD/RAM)</li>
        <li>Performed password bypassing for local and Microsoft accounts</li>
        <li>Installed and configured essential software</li>
        <li>Provided technical support for hardware and software issues</li>
      </ul>
    ),
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "NiyogHub Web Application",
    image: project1,
    description:
      "NiyogHub is an innovative web application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map. (2024)",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
    livePage: "https://niyoghub.com",
  },
  {
    title: "NiyogHub Mobile Application",
    image: project2,
    description:
      "NiyogHub is an innovative mobile application developed for coconut farmers in Quezon Province. This capstone project, created alongside my group mates Leonna Almendras and Nikki Bernardo, features real-time chat support, a voice AI assistant, a chat AI assistant, coconut leaf disease classification, and a suitability map. (2024)",
    technologies: ["React Native", "Express.js", "MongoDB"],
  },
  {
    title: "NiyogHub Blog",
    image: project3,
    description:
      "NiyogHub Blog is a coconut news blog app built with React, Vite, and Tailwind CSS, and Express for the backend and MongoDB for the database. It features user authentication with cookie-based token storage, registration notifications, and password resets. Users can create, edit, and delete blog posts, providing an easy way to manage and share content. (2023)",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
    githubRepo: 'https://github.com/eligiorbautista/niyoghub-blog',
  },
  {
    title: "NoteKeeper",
    image: project4,
    description:
      "NoteKeeper is a note-taking app built with React and Vite, styled with Tailwind CSS. It utilizes Django for the backend and SQLite3 for the database. It supports user authentication, email notifications, password resets, and CRUD operations for notes. The app features a responsive design, text editing, and a RESTful API for seamless communication. (2023)",
    technologies: ["React", "Tailwind", "Django", "SQLite3"],
    githubRepo: 'https://github.com/eligiorbautista/notekeeper',
  },
  {
    title: "Elliana coffee + sweets",
    image: project5,
    description:
      "Experience the charm of Elliana coffee + sweets through this website. Built with HTML, CSS, and JavaScript, this project showcases the cozy ambiance the coffee shop. (2023)",
    technologies: ["HTML", "CSS", "JavaScript"],
    livePage: "https://ellianacoffeesweet.vercel.app/",
  },
  {
    title: "EspressoExpress",
    image: project6,
    description:
      "EspressoExpress is a mobile app crafted with Dart and Flutter. Explore the world of coffee with this dynamic application that brings the coffee experience to your fingertips. (2022)",
    technologies: ["Dart", "Flutter"],
    githubRepo: 'https://github.com/eligiorbautista/projects/tree/main/Mobile/flutter-espresso-express',
  },
  {
    title: "Student Information System",
    image: project7,
    description:
      "Simplify education management with this desktop app in Python, PyQt6, and SQLite. It features automatic email alerts for student registrations and enables administrators to send messages directly to registered students (2022)",
    technologies: ["Python", "PyQt6", "SQL"],
    githubRepo: 'https://github.com/eligiorbautista/projects/tree/main/Desktop/python_student_information_system',
  },
];

export const CONTACT = {
  address: "Lucena City, Quezon Province, Philippines",
  phoneNo: "+63 933 862 9001",
  email: "dev.elibautista@gmail.com",
};
