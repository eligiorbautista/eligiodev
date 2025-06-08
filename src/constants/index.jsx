import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.png";

import certificate1 from "../assets/certificates/certificate1.jpg";
import certificate2 from "../assets/certificates/certificate2.jpg";
import certificate3 from "../assets/certificates/certificate3.jpg";


export const HERO_CONTENT = `I'm passionate about learning different technologies. Here, I share my journey of trying out various projects to improve my skills in web development and other technologies. Each project helps me learn and grow.`;

export const ABOUT_TEXT = `I am Eligio R. Bautista III, a fourth-year student at Manuel S. Enverga University, I am currently pursuing a Bachelor of Science in Information Technology with a specialization in Web and Mobile Application Development.`;

export const EXPERIENCES = [
  {
    year: "February - May 2025",
    role: "IT Developer Intern",
    company: "ICTD (MSEUF)",
    description: (
      <ul className="list-disc list-inside ml-5">
        <li>Developed and maintained company systems including the Laboratory Information Management System (LIMS)</li>
        <li>Implemented system updates and improvements</li>
        <li>Presented system changes and improvements to end-users</li>
        <li>Collaborated with the IT department team on various development projects</li>
      </ul>
    ),
    technologies: [],
  },
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
    title: "Laboratory Information Management System (LIMS)",
    image: project8,
    description:
      "Developed a Laboratory Information Management System (LIMS) for the Science Laboratory department during my OJT/Internship at ICTD (MSEUF). Built with Laravel 9, PHP 8.2, MySQL, and Tailwind CSS, the system features inventory management, real-time tracking, automated reporting, and role-based access control.",
    technologies: ["PHP", "Laravel", "SQL"],
  },
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

export const certificates = [
  {
    title: "Foundations of Cybersecurity",
    organization: "Google",
    date: "Issued: April 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/G090ZCEY4CPN",
    image: certificate3,
  },
  {
    title: "It Specialist - JavaScript",
    organization: "Certiport - A Pearson VUE Business",
    date: "Issued: March 2025",
    credentialUrl: "https://www.credly.com/badges/27756479-2681-490d-bf23-1ec080ce891f/linked_in_profile",
    image: certificate2,
  },
  {
    title: "Best in Information Technology Capstone Project",
    organization: "Manuel S. Enverga University Foundation",
    date: "Issued: March 2025",
    image: certificate1,
  }
];

export const testimonials = [
  {
    testimonial:
      "Eligio's expertise in web development and his ability to create responsive, user-friendly interfaces made our project a success. His attention to detail and commitment to quality code is impressive.",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "Meta",
    image: "https://i.insider.com/681cc2f3a466d2b74ab56231?width=1300&format=jpeg&auto=webp",
  },
  {
    testimonial:
      "Working with Eligio was a great experience. His knowledge of modern web technologies and clean code practices helped us deliver a robust application that exceeded our expectations.",
    name: "Steve Jobs",
    designation: "Founder",
    company: "Apple",
    image: "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/Steve_Jobs_c8e59d6f44.jpg",
  },
  {
    testimonial:
      "Eligio's technical skills and problem-solving abilities are outstanding. He consistently delivered high-quality code and was always willing to go the extra mile to ensure project success.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla",
    image: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society-1024x1024.jpg",
  },
]; 