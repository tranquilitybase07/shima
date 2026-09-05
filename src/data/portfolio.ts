// Ported from the Design-Canvas component's renderVals().
// Single source of truth for all page content.

export interface Skill {
  name: string;
  bg: string;
  fg: string;
}

export interface Project {
  num: string;
  title: string;
  date: string;
  bg: string;
  fg: string;
  desc: string;
  top: string;
  slot: string;
  tags: string[];
  href?: string;
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
}

// Editable props (were DC "props" with defaults)
const rawName = "Arushima";
export const tagline = "Making users happy and developers slightly nervous.";
export const contact =
  "Open to work & collaboration — full-time roles, freelance, and interesting conversations about hard design problems.";

export const name = rawName.toUpperCase();
export const firstName = rawName.split(" ")[0];

export const intro =
  "a UI/UX designer in New Delhi who gets excited about making complicated things simple";

// About-section bio, rendered as two stacked lines.
export const bio = [
  "I'm a product designer with way too many Figma tabs open and opinions about button spacing.",
  'I spend my days turning confusing flows into "oh, that was easy" moments.',
];

// Rotating palette applied to the skill chips
const palette: { bg: string; fg: string }[] = [
  { bg: "#8BD450", fg: "#111" },
  { bg: "#3AC7F0", fg: "#111" },
  { bg: "#EC1E79", fg: "#fff" },
  { bg: "#F4C020", fg: "#111" },
  { bg: "#111", fg: "#fff" },
  { bg: "#B98BE8", fg: "#111" },
];

const skillNames = [
  "Interaction Design",
  "Prototyping",
  "User Research",
  "Design Systems",
];

export const skills: Skill[] = skillNames.map((n, i) => ({
  name: n,
  ...palette[i % palette.length],
}));

export const projects: Project[] = [
  {
    num: "01",
    title: "Cafe 651",
    date: "JUL 25, 2026",
    bg: "#26C7A5",
    fg: "#111",
    desc: "Rebranding a family-owned Jodhpur cafe around homegrown hospitality, speciality coffee, and a bold zero-waste identity.",
    top: "84px",
    slot: "proj_1",
    tags: ["BRAND IDENTITY", "BRAND GUIDELINES"],
    href: "https://www.behance.net/gallery/253272169/Branding-Project-Cafe-651",
    image: "/cafe-651-branding.png",
    imageAlt: "Cafe 651 brand guidelines cover featuring its geometric logo and teal accent",
    imageLabel: "CAFE-651.PNG",
  },
  {
    num: "02",
    title: "Hatching App",
    date: "SEP 2, 2025",
    bg: "#5B2C83",
    fg: "#fff",
    desc: "A simple, AI-personalized iOS budget tracker designed for users in the United States and Canada.",
    top: "120px",
    slot: "proj_2",
    tags: ["PRODUCT DESIGN", "MOBILE APP"],
    href: "https://www.behance.net/gallery/233789743/Hatching-App",
    image: "/hatching-app.png",
    imageAlt: "Hatching budget tracking app shown on an iPhone against a purple background",
    imageLabel: "HATCHING.PNG",
  },
  {
    num: "03",
    title: "Urbanic Redesign",
    date: "MAY 27, 2024",
    bg: "#E99AAA",
    fg: "#4E102D",
    desc: "A UI/UX case study reimagining Urbanic's mobile shopping experience through a refreshed interface and app design.",
    top: "156px",
    slot: "proj_3",
    tags: ["UI/UX", "APP REDESIGN"],
    href: "https://www.behance.net/gallery/199613201/Urbanic-Redesign-Case-Study",
    image: "/urbanic-redesign.jpg",
    imageAlt: "Urbanic redesign case study cover with a mobile shopping interface",
    imageLabel: "URBANIC.JPG",
  },
  {
    num: "04",
    title: "Fit Flex",
    date: "MAR 24, 2024",
    bg: "#172942",
    fg: "#fff",
    desc: "A mobile fitness experience that connects users with nearby fitness centres and builds motivation through an engaging reward system.",
    top: "192px",
    slot: "proj_4",
    tags: ["PRODUCT DESIGN", "FITNESS APP"],
    href: "https://www.behance.net/gallery/193703257/Fit-Flex-%28-fitness-app%29-UIUX",
    image: "/fit-flex-app.png",
    imageAlt: "Fit Flex mobile fitness app displayed on two phones",
    imageLabel: "FIT-FLEX.PNG",
  },
];
