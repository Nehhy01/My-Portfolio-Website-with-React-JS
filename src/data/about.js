import about1 from "../assets/images/About1.png";
import about2 from "../assets/images/About2.png";
import about3 from "../assets/images/About3.png";
import about4 from "../assets/images/About4.png";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  CubeIcon,
  PaintBrushIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";

export const aboutImage = [
  {
    id: 1,
    src: about1,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40`,
    badge: "Professional",
    badgeColor: "bg-blue-500",
    animation: "fade-right",
    delay: 200,
  },
  {
    id: 2,
    src: about2,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-500 to-cyan-500 border-blue-400/40`,
    badge: "Creative",
    badgeColor: "bg-cyan-500",
    animation: "fade-left",
    delay: 300,
  },
  {
    id: 3,
    src: about3,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-500 to-cyan-500 border-blue-400/40`,
    badge: "Developer",
    badgeColor: "bg-blue-600",
    animation: "fade-right",
    delay: 400,
  },
  {
    id: 4,
    src: about4,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40`,
    badge: "Designer",
    badgeColor: "bg-cyan-600",
    animation: "fade-left",
    delay: 600,
  },
]


export const skills = [
  {
    id: 1,
    icon: CodeBracketSquareIcon,
    iconColor: "text-blue-400",
    title: "Frontend",
    desc: "Vuejs React Git JavaScript Tailwind CSS",
  },
  {
    id: 2,
    icon: ServerIcon,
    iconColor: "text-cyan-400",
    title: "Backend",
    desc: "Nodejs Express, MongoDB",
  },
  {
    id: 3,
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    title: "Graphics Design",
    desc: "CorelDraw Adobe Photoshop",
  },
  {
    id: 4,
    icon: CubeIcon,
    iconColor: "text-cyan-400",
    title: "Tools",
    desc: "Git VSCode AWS",
  },
]

export const ctaButtons = [
  {
    id: 1,
    text: "View Portfolio",
    icon: ArrowRightIcon,
    iconClass: `ml-2 group-hover:translate-x-1 transition-transform`,
    classes: `bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500`,
  },
  {
    id: 2,
    text: "Contact Me",
    icon: ChatBubbleLeftRightIcon,
    iconClass: `mr-2`,
    classes: `border border-blue-400 text-blue-400 hover:bg-blue-400/10`,
  },
]
