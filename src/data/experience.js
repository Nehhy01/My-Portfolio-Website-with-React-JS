import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  } from "@heroicons/react/16/solid";

export const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: CodeBracketIcon,
    iconColor: "text-blue-400",
    percentage: 90,
    percentageColor: "text-blue-400 text-sm",
    gradient: "bg-linear-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: ServerIcon,
    iconColor: "text-cyan-400",
    percentage: 85,
    percentageColor: "text-cyan-400 text-sm",
    gradient: "bg-linear-to-r from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Graphics Designing",
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    percentage: 93,
    percentageColor: "text-blue-400 text-sm",
    gradient: "bg-linear-to-r from-blue-500 to-cyan-500",
  },
];

export const experience = [
  {
    id: 1,
    position: "Frontend Intern",
    company: "FuelMetrics Inc.",
    period: "May 2026 - Present",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-blue-400 text-sm font-semibold",
    companyColor: "text-cyan-400",
  },
  {
    id: 2,
    position: "Frontend Intern",
    company: "UBA Group",
    period: "July 2026 - Present",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-cyan-500/30",
    dotColor: "bg-cyan-500",
    borderClass: "border-cyan-500/20",
    dateColor: "text-cyan-400 text-sm font-semi-bold",
    companyColor: "text-blue-400",
  },

  {
    id: 3,
    position: "Web Developer Intern",
    company: "TechCrush",
    period: "December 2025 - March 2026",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-blue-400 text-sm font-semi-bold",
    companyColor: "text-cyan-400",
  },
];

export const techStack = [
  "Vue JS",
  "React JS",
  "Tailwind CSS",
  "Node JS",
  "Express JS",
  "Canva",
  "CorelDraw",
  "Git",
];
