// Content for the Wayline case-study / project-detail page.

export const caseStudy = {
  date: "MAR 19, 2026",
  title: "WAYLINE",
  subtitle:
    "Making a whole city's transit app feel less like decoding a puzzle.",
  tags: ["MOBILITY", "CONSUMER APP"],
};

export interface MetaItem {
  label: string;
  value: string;
  bg: string;
}

export const meta: MetaItem[] = [
  { label: "ROLE", value: "Lead Product Designer", bg: "#B7C4F5" },
  { label: "TIMELINE", value: "4 months", bg: "#F4E27A" },
  { label: "TEAM", value: "3 engineers, 1 PM, me", bg: "#9BDCB4" },
  { label: "YEAR", value: "2026", bg: "#F5B8D0" },
];

export interface Section {
  heading: string;
  body: string;
  slots: { id: string; placeholder: string }[];
  layout: "duo" | "solo";
}

export const sections: Section[] = [
  {
    heading: "the challenge",
    body: "Riders opened the app already stressed and left more confused. Live arrivals were buried, routes were written in transit-speak, and the map fought you the moment your bus ran late.",
    layout: "duo",
    slots: [
      { id: "cs_challenge_1", placeholder: "rider at a stop" },
      { id: "cs_challenge_2", placeholder: "crowded platform" },
    ],
  },
  {
    heading: "my approach",
    body: "Rode the lines for two weeks, watched where people gave up, then rebuilt the trip flow around one question: when's my ride and where do I stand. Fewer screens, plain language, live times up front.",
    layout: "solo",
    slots: [{ id: "cs_approach_1", placeholder: "station in use" }],
  },
];

export const results = {
  heading: "the results",
  body: "The win showed up on the platform: people glancing once and putting their phone away, instead of squinting and pacing. Trips got planned about 47% faster now, but the number I care about more is the one nobody logs, the riders who stopped feeling lost. It launched on two lines and it's how the whole network runs today.",
  slots: [
    { id: "cs_results_1", placeholder: "commuter with phone" },
    { id: "cs_results_2", placeholder: "riders chatting" },
  ],
};

export interface Stat {
  big: string;
  small: string;
  label: string;
  bg: string;
  text?: boolean;
}

export const stats: Stat[] = [
  { big: "47%", small: "less time to a trip", label: "FASTER TRIP PLANNING", bg: "#B7C4F5" },
  { big: "−55%", small: "of the wrong turns", label: "TAPS DROPPED", bg: "#F4E27A" },
  { big: "Live across the full network", small: "", label: "ONLINE", bg: "#9BDCB4", text: true },
];

export interface MoreProject {
  date: string;
  title: string;
  desc: string;
  slot: string;
}

export const moreProjects: MoreProject[] = [
  {
    date: "MAR 2, 2026",
    title: "Tandem",
    desc: "From \"who owns what\" to money that finally feels shared.",
    slot: "more_tandem",
  },
  {
    date: "JAN 2, 2026",
    title: "Forge",
    desc: "Getting a new engineer from day one to shipping without the panic.",
    slot: "more_forge",
  },
];
