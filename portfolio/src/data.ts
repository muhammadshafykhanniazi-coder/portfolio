import type { Project, Skill } from "./types";

export const profile = {
  name: "Muhammad Shafy Khan",
  role: "Developer · Cybersecurity Learner",
  tagline:
    "I build secure, real‑world software and learn how systems break — so I can help protect them.",
  location: "Pakistan",
  email: "muhammadshafykhanniazi@gmail.com",
  links: {
    github: "https://github.com/muhammadshafykhanniazi-coder",
    linkedin: "https://www.linkedin.com/in/shafy-khan-/",
    tryhackme: "https://tryhackme.com/p/muhammadshafykhanniazi",
  },
} as const;

export const skills: Skill[] = [
  { name: "Python / Flask", level: 90 },
  { name: "Web Security", level: 78 },
  { name: "Networking", level: 72 },
  { name: "Java / C++", level: 65 },
];

export const projects: Project[] = [
  {
    kind: "featured",
    title: "Sender Guided AI Optimized Path Finder",
    description:
      "An AI‑driven pathfinding system where the sender guides route optimization in real time. Combines intelligent graph traversal with sender-defined constraints for efficient routes.",
    tags: ["AI", "Python", "Pathfinding", "Optimization"],
    href: "https://github.com/muhammadshafykhanniazi-coder/Sender_Guided_Map_Optimizer/tree/main",
  },
  {
    kind: "project",
    title: "Learning Management System",
    description:
      "Complete LMS with dual‑role authentication for students and teachers, including course registration, announcements, file uploads, and fee records.",
    tags: ["Flask", "SQLite", "Auth", "REST API"],
  },
  {
    kind: "project",
    title: "Hotel Management System",
    description:
      "Java-based desktop system for reservations, guest management, check-in/check-out, and billing with clean OOP architecture.",
    tags: ["Java", "OOP", "Database"],
  },
  {
    kind: "project",
    title: "Automation Script Suite",
    description:
      "A practical collection of scripts for workflow automation, data processing, and system-level tasks to reduce manual overhead.",
    tags: ["Python", "Scripting", "Automation"],
  },
];

