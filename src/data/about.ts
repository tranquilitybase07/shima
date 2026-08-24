// Content for the About page. Mirrors the persona defined in portfolio.ts
// (Arushima — a UI/UX designer in New Delhi).

// Handwritten lead paragraph (rendered in the script font).
export const bioLead =
  "I'm a product designer who gets a little too excited about making complicated things feel simple. ✦ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier. 🎨";

// Regular body paragraphs.
export const bioBody: string[] = [
  "I spend most days on transit and money apps, the kind people open when they're rushed, distracted, or a little stressed. A confusing screen there isn't just annoying, it makes someone miss a bus or second-guess a payment. So I sit with the parts most people skip: the errors, the empty states, the what-happens-if moments.",
  "The tools change but the way I work doesn't. I get close to the people actually using the thing, sketch fast, and keep cutting until only what matters is left. Good design should feel obvious the moment you see it, even when getting there was anything but.",
];

// Yellow "sticky note" call-outs inside the bio card.
export const bioNotes: string[] = [
  "Right now I'm at Meridian Health, redesigning how therapists spend less time clicking so they have more time for patients. It feels less like solving a puzzle and more like second nature.",
  "When I'm not designing, I'm usually pulling apart some app I love to figure out why one screen feels effortless and the next one makes me want to close the tab. Fueled start to finish by cold brew.",
];

export interface StoryCard {
  title: string;
  body: string;
  note: string; // handwritten annotation to the right
  bg: string;
  fg: string;
}

export const storyCards: StoryCard[] = [
  {
    title: "Start with the why",
    body: "Before I open a design tool, I want to know what we're actually solving and who it's for. Skip that and you ship something polished that nobody needed. Every good project I've done started with a better question.",
    note: "questions before pixels",
    bg: "#B7C4F5",
    fg: "#111",
  },
  {
    title: "Design for a bad day",
    body: "Nobody uses your product rested, on fast wifi, with time to spare. I design for the rushed commuter, the tired parent, the spotty signal on the platform. That's where good design earns its keep.",
    note: "no perfect users here!",
    bg: "#F4D06A",
    fg: "#111",
  },
  {
    title: "Make it with the team",
    body: "The best work I've shipped came from engineers and PMs poking holes in it early, while it was still a rough sketch. I'd rather be wrong on a whiteboard Tuesday than precious about a mockup Friday. We ship better together.",
    note: "us, not me.",
    bg: "#9BDCB4",
    fg: "#111",
  },
];

export interface Job {
  role: string;
  company: string;
  period: string;
}

export const work: Job[] = [
  { role: "Lead Product Designer", company: "Meridian Health", period: "2024 TO NOW" },
  { role: "Product Designer", company: "Freelance", period: "2021 TO 2024" },
  { role: "UI/UX Designer", company: "Northlight Studio", period: "2019 TO 2021" },
];

export const talkSubtitle =
  "Got a project, a hard problem, or just want to say hi? Send it over. I read every message.";
