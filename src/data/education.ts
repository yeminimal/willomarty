export type Education = {
  icon: string;
  credential: string;
  institution: string;
  period?: string;
  note?: string;
};

export const EDUCATION: Education[] = [
  {
    icon: "🎓",
    credential: "B.Sc. Mass Communication",
    institution: "University of Benin",
    period: "Aug 2021 — Feb 2025",
  },
  {
    icon: "📐",
    credential: "Diploma, Graphic Design",
    institution: "Enikin Design Academy",
    period: "Feb 2017 — Dec 2017",
  },
  {
    icon: "💻",
    credential: "Frontend Development",
    institution: "Self-directed · freeCodeCamp · Scrimba · shipped production code",
  },
  {
    icon: "🤖",
    credential: "AI-Assisted Product Development",
    institution: "Self-directed · Lovable ecosystem",
  },
];
