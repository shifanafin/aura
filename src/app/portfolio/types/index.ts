export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  stack: string[];
  url: string;
}

export interface Education {
  institution: string;
  image: string;
  degree: string;
  year: string;
  description: string;
}
