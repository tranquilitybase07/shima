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
    title: "Meridian Health",
    date: "MAY 19, 2024",
    bg: "#3AC7F0",
    fg: "#111",
    desc: "When therapists spend less time clicking, they have more time for patients.",
    top: "84px",
    slot: "proj_1",
    tags: ["HEALTHCARE", "WORKFLOW DESIGN"],
  },
  {
    num: "02",
    title: "StyleBook",
    date: "MAR 2, 2020",
    bg: "#111",
    fg: "#fff",
    desc: 'From "I hate this creator" to "Can we show other colors?"',
    top: "120px",
    slot: "proj_2",
    tags: ["E-COMMERCE", "MOBILE APP"],
  },
  {
    num: "03",
    title: "Homestead",
    date: "JAN 3, 2023",
    bg: "#F4C020",
    fg: "#111",
    desc: "Helping first-time homebuyers actually understand what they're looking at.",
    top: "156px",
    slot: "proj_3",
    tags: ["REAL ESTATE", "WEB APP"],
  },
  {
    num: "04",
    title: "North Light",
    date: "MAR 30, 2022",
    bg: "#EC1E79",
    fg: "#fff",
    desc: "Getting seven stakeholders to agree on what they're actually building.",
    top: "192px",
    slot: "proj_4",
    tags: ["B2B SAAS", "STRATEGY"],
  },
];
