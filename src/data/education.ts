import {
  GraduationCap,
  Compass,
  Code2,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import chatgptLogo from "@/assets/chatgpt-logo.png.asset.json";
import orchidsLogo from "@/assets/orchids-icon.svg.asset.json";

export type EducationTool = { name: string; logo: string };

export type Education = {
  icon: LucideIcon;
  /** Optional remote logo URL — when present, replaces the lucide icon. */
  logo?: string;
  credential: string;
  institution: string;
  period?: string;
  note?: string;
  /** Optional list of tool logos rendered as a small strip on the card. */
  tools?: EducationTool[];
};

const gold = "C8A96E";

export const EDUCATION: Education[] = [
  {
    icon: GraduationCap,
    credential: "B.Sc. Mass Communication",
    institution: "University of Benin (UNIBEN)",
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
    institution: "Self-directed",
    tools: [
      { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
      { name: "Orchids (Buds)", logo: orchidsLogo.url },
      { name: "Claude", logo: `https://cdn.simpleicons.org/claude/${gold}` },
      { name: "ChatGPT", logo: chatgptLogo.url },
      { name: "GitHub Copilot", logo: `https://cdn.simpleicons.org/githubcopilot/${gold}` },
      { name: "Gemini", logo: `https://cdn.simpleicons.org/googlegemini/${gold}` },
    ],
  },
];

export const CERTIFICATIONS: Education[] = [
  {
    icon: BadgeCheck,
    logo: `https://cdn.simpleicons.org/googleads/${gold}`,
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
