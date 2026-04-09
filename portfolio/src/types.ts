export type NavSectionId = "home" | "about" | "skills" | "projects" | "contact";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  kind: "featured" | "project";
};

export type Skill = {
  name: string;
  level: number; // 0..100
};

