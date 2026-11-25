export type Language = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface LocalizedList {
  id: string[];
  en: string[];
}

export type ProjectCategory = "IoT" | "Web" | "AI";

export interface Project {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  category: ProjectCategory;
  year: string;
  badge?: LocalizedText;
  techStack: string[];
  highlights: LocalizedList;
  image?: string;
  imageFit?: "cover" | "contain";
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: LocalizedText;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  organization: string;
  type: LocalizedText;
  period: LocalizedText;
  points: LocalizedList;
  current?: boolean;
}

export interface AchievementItem {
  id: string;
  title: LocalizedText;
  issuer: string;
  year: string;
  category: LocalizedText;
  description: LocalizedText;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  skills: string[];
}

export interface PostSection {
  heading?: LocalizedText;
  paragraphs: LocalizedList;
  code?: {
    language: string;
    snippet: string;
  };
}

export interface Post {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  category: "IoT" | "Web" | "AI" | "Education";
  date: string;
  readTimeMinutes: number;
  tags: string[];
  sections: PostSection[];
}
