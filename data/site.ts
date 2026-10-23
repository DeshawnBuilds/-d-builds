// Central content for D BUILDS V1.
// Everything here documents what is real. Anything not yet real is marked
// as in development rather than invented.

export type PillarKey = "myself" | "things" | "future";

export const site = {
  name: "D BUILDS",
  title: "D BUILDS — Deshawn Builds",
  description: "Building myself. Building things. Building my future.",
  location: "Las Vegas, NV",
  roles: ["Creator", "Builder", "Student"],
  headline: ["I'M BUILDING A LIFE", "I ONCE THOUGHT", "I WAS LATE FOR."],
  supporting:
    "I'm documenting what happens when you stop waiting to become the person you imagine—and start building him.",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "RYF", href: "/ryf" },
  { label: "Films", href: "/things/awakened-creators" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

// The build log: the life underneath the worlds.
export const buildNav: NavItem[] = [
  { label: "Building Myself", href: "/myself" },
  { label: "Building Things", href: "/things" },
  { label: "Building My Future", href: "/future" },
];

export const followNav: NavItem = { label: "Follow the Build", href: "/follow" };

export type Pillar = {
  key: PillarKey;
  number: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  href: string;
  themes: string[];
};

export const pillars: Pillar[] = [
  {
    key: "myself",
    number: "01",
    title: "Building Myself",
    short: "Myself",
    tagline: "The person.",
    description: "The internal work behind becoming who I'm trying to become.",
    href: "/myself",
    themes: [
      "Becoming",
      "Identity",
      "Discipline",
      "Creativity",
      "Personal philosophy",
      "Remember Your Future",
      "Feeling behind",
      "Survival → creation",
    ],
  },
  {
    key: "things",
    number: "02",
    title: "Building Things",
    short: "Things",
    tagline: "The creations.",
    description:
      "Films, worlds, software and experiments that didn't exist until I decided to make them.",
    href: "/things",
    themes: [
      "Awakened Creators",
      "AI filmmaking",
      "Impossible worlds",
      "Software",
      "Mirror",
      "Creative workflows",
      "Prototypes",
      "Failures & breakthroughs",
    ],
  },
  {
    key: "future",
    number: "03",
    title: "Building My Future",
    short: "Future",
    tagline: "The direction.",
    description:
      "Learning the skills and building the career that takes me where I'm going.",
    href: "/future",
    themes: [
      "Learning technology",
      "A+",
      "Networking",
      "Cloud",
      "Engineering",
      "Sales",
      "Business-building",
      "Learning from zero",
    ],
  },
];

export const pillarByKey = (key: PillarKey) =>
  pillars.find((p) => p.key === key)!;

export type Art = "clock" | "portal" | "network";

export type LatestBuild = {
  pillar: PillarKey;
  title: string;
  description: string;
  href: string;
  art: Art;
  status: string;
};

export const latestBuilds: LatestBuild[] = [
  {
    pillar: "myself",
    title: "The 48HR Shot Clock",
    description:
      "There are things I want to create before I die. The clock is already moving.",
    href: "/writing/the-48hr-shot-clock",
    art: "clock",
    status: "Essay in development",
  },
  {
    pillar: "things",
    title: "Awakened Creators",
    description:
      "Building impossible worlds as a language for remembering what we can become.",
    href: "/things/awakened-creators",
    art: "portal",
    status: "Active universe",
  },
  {
    pillar: "future",
    title: "Learning Networking From Zero",
    description: "Documenting the climb from fundamentals toward engineering.",
    href: "/future",
    art: "network",
    status: "Field notes in progress",
  },
];

export type Project = {
  title: string;
  category: string;
  status: "Active" | "Building" | "Developing";
  description: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Awakened Creators",
    category: "Cinematic Universe",
    status: "Active",
    description:
      "An evolving cinematic universe about remembering the future you're capable of creating.",
    href: "/things/awakened-creators",
  },
  {
    title: "Mirror",
    category: "Software",
    status: "Building",
    description: "Software in progress. Details will be documented as it's built.",
  },
  {
    title: "AI Cinema Lab",
    category: "Experiments",
    status: "Active",
    description:
      "Cinematic experiments, motion tests and workflows—documented, including what fails.",
  },
  {
    title: "Remember Your Future",
    category: "Podcast",
    status: "Building",
    description:
      "Honest episodes, built from my journal, about loving who you are while you become who you're going to be.",
    href: "/ryf",
  },
];

export const learningPath = ["Tech+", "A+", "Networking", "Engineering"];

export type Article = {
  slug: string;
  pillar: PillarKey;
  title: string;
  excerpt: string;
  featured?: boolean;
  // Published text, one string per paragraph. Lines starting with "## " become headings.
  body?: string[];
  date?: string;
  // Where it was first posted, e.g. the X article.
  originalUrl?: string;
};

// Article pages render from this list. Bodies are added when essays exist.
export const articles: Article[] = [
  {
    slug: "the-48hr-shot-clock",
    pillar: "myself",
    title: "The 48HR Shot Clock",
    excerpt:
      "There are things I want to create before I die. The clock is already moving.",
    featured: true,
  },
  {
    slug: "awakened-creators-field-notes",
    pillar: "things",
    title: "Awakened Creators: Field Notes",
    excerpt:
      "Building impossible worlds as a language for remembering what we can become.",
  },
  {
    slug: "learning-networking-from-zero",
    pillar: "future",
    title: "Learning Networking From Zero",
    excerpt: "Documenting the climb from fundamentals toward engineering.",
  },
];

// The three worlds. Same person, same brand, three ways in.
// `url` is the outside channel; add it only once a real URL exists.
export type World = {
  key: "ryf" | "acu" | "wcw";
  name: string;
  short: string;
  where: string;
  logo: string;
  logoAlt: string;
  line: string;
  description: string;
  // Page on this site, if the world has one.
  href?: string;
  cta?: string;
  // Outside channel. Leave url empty until a real one exists.
  url?: string;
  urlLabel: string;
};

export const worlds: World[] = [
  {
    key: "ryf",
    name: "Remember Your Future",
    short: "RYF",
    where: "Podcast · YouTube",
    logo: "/worlds/ryf.svg",
    logoAlt: "RYF — Remember Your Future logo: a gold triangle inside an open spiral",
    line: "For anyone who can see the life they want but keeps getting pulled back.",
    description:
      "Me, talking honestly about recovery, change and learning to love the person who is still becoming.",
    href: "/ryf",
    cta: "About the podcast",
    urlLabel: "YouTube channel",
  },
  {
    key: "acu",
    name: "Awakened Creators Universe",
    short: "ACU",
    where: "Films · YouTube",
    logo: "/worlds/acu.svg",
    logoAlt: "ACU — Awakened Creators Universe logo: a gold outline triangle above the letters ACU",
    line: "Cinematic worlds about remembering what we can become.",
    description:
      "The Still Kingdom, The Dream Series and the mythology behind them, made with AI and built to last.",
    href: "/things/awakened-creators",
    cta: "Enter the universe",
    url: "https://www.youtube.com/@ACU-STS",
    urlLabel: "Watch on YouTube",
  },
  {
    key: "wcw",
    name: "The World Can Wait",
    short: "The World Can Wait",
    where: "Instagram",
    logo: "/worlds/wcw.svg",
    logoAlt: "The World Can Wait logo: a gold peak rising out of waves",
    line: "Short films of calm in the middle of the noise.",
    description:
      "Quiet moments of people creating or resting while the world rushes past.",
    url: "https://www.instagram.com/awakened_creator88/",
    urlLabel: "Follow on Instagram",
  },
];

// Social channels are added here once real URLs exist. Never invent them.
export type SocialLink = NavItem & { logo?: string };

export const socialLinks: SocialLink[] = [
  { label: "X · Articles", href: "https://x.com/DeshawnBuilds", logo: "/worlds/x.jpg" },
];

export const acuSections = [
  {
    title: "Latest Films",
    note: "Films from the universe will screen here.",
  },
  {
    title: "Worlds",
    note: "The places of the universe, mapped as they're built.",
  },
  {
    title: "Characters",
    note: "Who lives in these worlds, and what they're remembering.",
  },
  {
    title: "Fragments / Lore",
    note: "Pieces of the mythology, released as they're written.",
  },
  {
    title: "Behind the Creation",
    note: "Process, prompts, failures and the decisions behind each frame.",
  },
];
