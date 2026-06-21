import {
  GraduationCap,
  Compass,
  Code2,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Education = {
  icon: LucideIcon;
  credential: string;
  institution: string;
  period?: string;
  note?: string;
};

export const EDUCATION: Education[] = [
  {
    icon: GraduationCap,
    credential: "B.Sc. Mass Communication",
    institution: "University of Benin",
    period: "Aug 2021 — Feb 2025",
  },
  {
    icon: Compass,
    credential: "Diploma, Graphic Design",
    institution: "Enikin Design Academy",
    period: "Feb 2017 — Dec 2017",
  },
  {
    icon: Code2,
    credential: "Frontend Development",
    institution: "Self-directed · freeCodeCamp · Scrimba · shipped production code",
  },
  {
    icon: Sparkles,
    credential: "AI-Assisted Product Development",
    institution: "Self-directed · Lovable ecosystem",
  },
];

export const CERTIFICATIONS: Education[] = [
  {
    icon: BadgeCheck,
    credential: "Google Ads Display Certification",
    institution: "Google Ads",
    period: "2021",
  },
  {
    icon: BadgeCheck,
    credential: "Jobberman Soft Skills Course",
    institution: "Jobberman Youth Engagement and Learning",
    period: "2021",
  },
  {
    icon: ShieldCheck,
    credential: "Cybersecurity",
    institution: "University of the People",
    period: "Ongoing",
  },
];
