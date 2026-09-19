import dotenv from "dotenv";

dotenv.config();

import connectDB from "../config/db.js";

import Project from "../models/Project.js";
import Profile from "../models/Profile.js";
import Skill from "../models/Skill.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    /*
     * Clear existing portfolio data.
     */
    await Project.deleteMany({});
    await Profile.deleteMany({});
    await Skill.deleteMany({});

    /*
     * Profile
     */
    await Profile.create({
      name: "Dhiraj Kumar",

      title:
        "Full Stack MERN Developer",

      tagline:
        "Problem Solver | Lifelong Learner",

      bio:
        "I'm Dhiraj Kumar, a Computer Science and Engineering student and Full Stack Developer passionate about building intuitive, scalable and real-world web applications. I enjoy working across the entire development lifecycle, from designing user interfaces to building robust APIs, databases and deploying applications.",

      profileImage:
        "/images/profile.jpg",

      email:
        "your-email@gmail.com",

      location:
        "Bhopal, Madhya Pradesh",

      education:
        "B.Tech CSE - Oriental Institute of Science & Technology",

      github:
        "https://github.com/Offical-Dhiraj",

      linkedin:
        "YOUR_LINKEDIN_URL",

      leetcode:
        "https://leetcode.com/u/Dhiraj19/",

      resumeUrl:
        "/resume.pdf",

      availability:
        "Open for opportunities"
    });

    /*
     * Projects
     */
    await Project.insertMany([
      {
        title:
          "AI Learning Platform",

        shortTitle:
          "Personalized Exam Preparation System",

        description:
          "An AI-powered exam preparation platform that generates practice questions, analyzes student performance, identifies weak topics and creates personalized study plans.",

        image:
          "/images/projects/ai-learning-platform.png",

        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Generative AI"
        ],

        githubUrl:
          "https://github.com/Offical-Dhiraj/ai-learning-platform",

        liveUrl:
          "",

        featured: true,

        category:
          "AI & Full Stack",

        order: 1
      },

      {
        title:
          "Mini Social Post",

        shortTitle:
          "Social Media Platform",

        description:
          "A modern social media application where users can create posts, upload images and interact with other users.",

        image:
          "/images/projects/mini-social-post.png",

        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB"
        ],

        githubUrl:
          "https://github.com/Offical-Dhiraj/Mini-social-post",

        liveUrl:
          "https://mini-social-post-dun.vercel.app/feed",

        featured: false,

        category:
          "Full Stack",

        order: 2
      },

      {
        title:
          "Developer Portfolio",

        shortTitle:
          "Personal Developer Portfolio",

        description:
          "An interactive full-stack developer portfolio showcasing projects, skills, GitHub activity, resume and contact information.",

        image:
          "/images/projects/portfolio.png",

        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "Framer Motion"
        ],

        githubUrl:
          "",

        liveUrl:
          "",

        featured: false,

        category:
          "Web Development",

        order: 3
      }
    ]);

    /*
     * Skills
     */
    await Skill.insertMany([
      {
        name: "React.js",
        category: "Frontend",
        icon: "react",
        level: 85,
        order: 1
      },

      {
        name: "JavaScript",
        category: "Frontend",
        icon: "javascript",
        level: 85,
        order: 2
      },

      {
        name: "HTML5",
        category: "Frontend",
        icon: "html",
        level: 90,
        order: 3
      },

      {
        name: "CSS3",
        category: "Frontend",
        icon: "css",
        level: 85,
        order: 4
      },

      {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: "tailwind",
        level: 80,
        order: 5
      },

      {
        name: "Node.js",
        category: "Backend",
        icon: "node",
        level: 85,
        order: 1
      },

      {
        name: "Express.js",
        category: "Backend",
        icon: "express",
        level: 85,
        order: 2
      },

      {
        name: "REST API",
        category: "Backend",
        icon: "api",
        level: 85,
        order: 3
      },

      {
        name: "MongoDB",
        category: "Database",
        icon: "mongodb",
        level: 80,
        order: 1
      },

      {
        name: "SQL",
        category: "Database",
        icon: "sql",
        level: 75,
        order: 2
      },

      {
        name: "Java",
        category: "Language",
        icon: "java",
        level: 80,
        order: 1
      },

      {
        name: "Git",
        category: "Tools",
        icon: "git",
        level: 85,
        order: 1
      },

      {
        name: "GitHub",
        category: "Tools",
        icon: "github",
        level: 90,
        order: 2
      },

      {
        name: "Postman",
        category: "Tools",
        icon: "postman",
        level: 85,
        order: 3
      },

      {
        name: "Docker",
        category: "Tools",
        icon: "docker",
        level: 70,
        order: 4
      }
    ]);

    console.log(
      "Database seeded successfully."
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Database seeding failed:",
      error
    );

    process.exit(1);
  }
};

seedDatabase();