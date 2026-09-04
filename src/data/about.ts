// Content for the About page. Mirrors the persona defined in portfolio.ts
// (Arushima — a UI/UX designer in New Delhi).

// Handwritten lead paragraph (rendered in the script font).
export const bioLead =
  "I'm a product designer who likes turning complicated problems into things that feel ridiculously simple. ✨ I care about the little details, the weird edge cases, and those tiny interactions that make a product feel just right.";

// Regular body paragraphs.
export const bioBody: string[] = [
  "My design journey started at NIFT, took me through Samsung, and eventually landed me at Zomato where I've worked across visual and product design. Along the way, I've learned that good design isn't just about making things look nice, it's about understanding people, asking too many questions, and occasionally moving the same button 17 times until it finally feels right.",
  "I'm naturally curious, slightly obsessed with good visuals, and probably guilty of overthinking things that nobody else noticed. I love exploring new ideas, experimenting with brands and products, and figuring out how to make digital experiences feel a little more human.",
];

// Yellow "sticky note" call-outs inside the bio card.
export const bioNotes: string[] = [
  "When I'm not designing, you'll probably find me chasing mountains, planning my next trip, working on some random creative idea, or convincing myself that this is the project where I'll finally stop overthinking.",
  "Basically, I like making things, breaking things, fixing things — and finding the better way somewhere in between.",
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
    title: "Make it simple",
    body: "I like complicated problems. Not because I enjoy making things complicated (I already do enough of that in my head), but because there's something satisfying about taking a messy problem and turning it into something that just makes sense. I care about the details, the edge cases, and the tiny moments that make a product feel effortless.",
    note: "overthinking, but make it useful",
    bg: "#B7C4F5",
    fg: "#111",
  },
  {
    title: "Design for real people",
    body: "I design for humans, not perfect users. People are busy, distracted, impatient, curious, and sometimes just trying to get things done. I like putting myself in those messy, real-life situations and designing experiences that still work when everything isn't going according to plan.",
    note: "because nobody reads the user manual",
    bg: "#F4D06A",
    fg: "#111",
  },
  {
    title: "Find the right path",
    body: "I approach products like I approach mountains. There's usually a lot of figuring things out before you get to the good part. I love exploring different paths, getting a little lost, going back, trying again, and eventually finding the route that feels right. For me, good product design is about making that journey feel clear without taking away the adventure.",
    note: "chasing better flows & higher altitudes",
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
  { role: "Visual & Product Designer", company: "Zomato, Gurugram", period: "Nov 25 - Present" },
  { role: "UX Designer", company: "Samsung R&D Institute, Noida", period: "Feb 25 - Apr 25" },
  { role: "UI/UX Designer", company: "Design Factory India", period: "Jan 25 - Feb 25" },
  { role: "Freelance Project", company: "Centernet", period: "Jan 25 - Feb 25" },
  { role: "UI/UX Designer", company: "Voxomos Systems Private Limited", period: "Jun 24 - Jul 24" },
  { role: "UI/UX Designer", company: "Small Box Office", period: "May 24 - Oct 24" },
];

export const talkSubtitle =
  "Got a project, a hard problem, or just want to say hi? Send it over. I read every message.";
