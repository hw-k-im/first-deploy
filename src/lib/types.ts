export type SkillsGroup = {
  frontend: string[];
  backend: string[];
  devops: string[];
  tools?: string[];
};

export type General = {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
  profile_image?: string;
  skills: SkillsGroup;
};

export type Experience = {
  company: string;
  role: string;
  period: string;          // "2025.03 - 2025.09"
  achievements?: string[]; // bullet list
  tech_stack: string[];
};

export type Project = {
  project_name: string;
  project_description: string;
  tech_stack: string[];
  github: string;
  demo?: string;
  thumbnail?: string;
};

export type Education = {
  school: string;
  major?: string;
  period: string;
  details?: string;
};
