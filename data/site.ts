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
    description: "Building a life where my time belongs to me.",
    href: "/future",
    themes: ["Freedom", "Ownership of time", "Sales", "Business-building"],
  },
];

export const pillarByKey = (key: PillarKey) =>
  pillars.find((p) => p.key === key)!;

export type Art = "clock" | "portal";

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
    pillar: "things",
    title: "The Message Is Simple. The Packaging Is the Art.",
    description:
      "Why ACU is the invitation, and RYF is the door for anyone who wants to go deeper.",
    href: "/writing/the-message-is-simple",
    art: "portal",
    status: "New essay",
  },
  {
    pillar: "myself",
    title: "The 48HR Shot Clock",
    description:
      "There are things I want to create before I die. The clock is already moving.",
    href: "/writing/the-48hr-shot-clock",
    art: "clock",
    status: "New essay",
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
    slug: "the-message-is-simple",
    pillar: "things",
    title: "The Message Is Simple. The Packaging Is the Art.",
    excerpt:
      "Most meaningful messages are surprisingly simple. The difficult part is getting someone to feel them.",
    featured: true,
    date: "October 2026",
    originalUrl: "https://x.com/DeshawnBuilds/status/2100967235707908332",
    body: [
      "I had a thought this morning that helped me understand what I’m actually trying to build with ACU.",
      "Most meaningful messages are surprisingly simple.",
      "Fear can protect you until it becomes a prison.",
      "You don’t have to believe every thought you have.",
      "Waiting until you feel ready can become another way of never moving.",
      "Who you become is shaped by what you repeatedly obey.",
      "None of these ideas are particularly difficult to understand.",
      "The difficult part is getting someone to feel them.",
      "And I think that’s where art comes in.",
      "## Nobody Asked for the Lesson",
      "Think about the stories that stay with us.",
      "Star Wars has things to say about fear, attachment, power, temptation, fathers and sons, and the choices that shape who we become.",
      "Harry Potter can make us think about death, prejudice, friendship, courage, identity and the way we use power.",
      "But that's not how most of us entered those worlds.",
      "Nobody introduced Star Wars by saying:",
      "Come experience a philosophical exploration of fear and attachment.",
      "They gave us lightsabers.",
      "The Force.",
      "Darth Vader.",
      "Space battles.",
      "Nobody sold a child Harry Potter by promising a meditation on mortality and identity.",
      "They said:",
      "There's a school for wizards.",
      "And we walked through the door.",
      "Only later did we discover everything waiting for us inside.",
      "That distinction has become increasingly important to me.",
      "The message and the invitation are not the same thing.",
      "## ACU Is the Invitation",
      "I've spent a lot of time thinking about what I want ACU to say.",
      "Maybe too much time.",
      "Because I'm realizing that having something meaningful to say is only half of the responsibility.",
      "The other half is making something people actually want to experience.",
      "A lesson about fear is information.",
      "But what if fear had a face?",
      "What if it had a kingdom?",
      "What if it built a gate?",
      "What if it looked you in the eyes and said:",
      "“This is as far as we go.”",
      "Now we have a story.",
      "And perhaps somewhere while watching that story, you recognize something.",
      "You've heard that voice before.",
      "Maybe not from a Warden standing in front of a frozen gate.",
      "Maybe you've heard it inside yourself.",
      "That's the kind of storytelling I'm interested in.",
      "Not creating characters so I can explain psychology.",
      "Creating characters compelling enough that you encounter the psychology yourself.",
      "## Spectacle Isn't the Point",
      "I've been thinking a lot about spectacle lately.",
      "For a while, I worried about the tension between making something meaningful and making something entertaining.",
      "I've started to believe that's the wrong way to frame it.",
      "Spectacle doesn't have to replace meaning.",
      "It can invite you toward it.",
      "The impossible city.",
      "The monster.",
      "The chase.",
      "The beautiful world you've never seen before.",
      "The question you can't immediately answer.",
      "Those things can make someone stop.",
      "Story makes them stay.",
      "Recognition makes them feel.",
      "Meaning gives the experience somewhere to go.",
      "So my job isn't simply to communicate the message.",
      "My job is to dress the message in something worth opening.",
      "## Entertainment Can Be a Trojan Horse for Transformation",
      "I don't mean that manipulatively.",
      "I mean that some truths are better experienced before they're explained.",
      "You can tell someone:",
      "Your mind sometimes mistakes familiarity for safety.",
      "Or you can build a world where a man discovers that the guardian protecting him from uncertainty has quietly become his jailer.",
      "Same idea.",
      "Different experience.",
      "And experience has a strange way of getting past defenses that instruction can't.",
      "That's what I want ACU to become.",
      "A universe you can enjoy without ever studying the philosophy underneath it.",
      "Characters you want to follow.",
      "Kingdoms you want to explore.",
      "Conflicts you want resolved.",
      "Images you remember.",
      "But underneath all of it, something else is happening.",
      "Every kingdom represents something human.",
      "Every antagonist believes something.",
      "Every conflict asks a question.",
      "And every story leaves behind a mirror.",
      "You came for the world.",
      "Somewhere along the way, you saw yourself.",
      "## And Then Comes RYF",
      "This is where I'm beginning to understand the relationship between ACU and Remember Your Future.",
      "ACU isn't the instruction manual.",
      "ACU is the experience that makes you want to ask the question.",
      "Maybe you meet the Warden and recognize your fear.",
      "Maybe you enter the Lull and recognize your procrastination.",
      "Maybe you encounter the Archivist and realize how many thoughts you've mistaken for truth.",
      "ACU can show you the pattern.",
      "RYF can eventually help you work with it.",
      "That creates a progression I've been thinking about:",
      "Spectacle → Story → Identification → Insight → Transformation.",
      "Not every viewer needs to travel the entire path.",
      "That's important.",
      "Somebody should be able to watch ACU simply because they love the worlds.",
      "Someone else may find something inside those worlds that changes the way they understand themselves.",
      "Both experiences are valid.",
      "But for the person who wants to go deeper, there should eventually be another door.",
      "That's where I see RYF.",
      "## So What Am I Building?",
      "I'm still discovering the answer.",
      "But today I understand it more clearly than I did yesterday.",
      "I'm not trying to build motivational content with prettier visuals.",
      "I'm trying to build entertainment with something living underneath it.",
      "A mythology built from the invisible things human beings wrestle with.",
      "Fear.",
      "Doubt.",
      "Avoidance.",
      "Identity.",
      "Hope.",
      "Potential.",
      "The stories we tell ourselves about what is possible.",
      "And instead of explaining those things from a chair in front of a camera, I want to turn them into kingdoms.",
      "Characters.",
      "Civilizations.",
      "Conflicts.",
      "Spectacle.",
      "Stories.",
      "Because maybe the message was never the difficult part.",
      "The message is simple.",
      "The craft is creating something beautiful enough, strange enough, exciting enough, and human enough that someone chooses to open it.",
      "And when they do—",
      "make sure there's something worth finding inside.",
    ],
  },
  {
    slug: "the-48hr-shot-clock",
    pillar: "myself",
    title: "The 48HR Shot Clock",
    excerpt:
      "There are things I want to create before I die. The clock is already moving.",
    featured: true,
    body: [
      "There are things I want to create before I die.",
      "Not things I casually think would be cool.",
      "Things that live inside me.",
      "Worlds. Stories. Ideas. Businesses. Things that could help people. Things I haven't even discovered yet.",
      "And lately I've been thinking about the one resource every one of those dreams requires.",
      "Time.",
      "Not talent.",
      "Not money.",
      "Not connections.",
      "Time.",
      "And the strange thing about time is that most of us spend the majority of our lives trying to earn enough money to survive while giving away the very resource we're actually trying to obtain.",
      "We trade time for money.",
      "Then spend the money trying to enjoy whatever time remains.",
      "Forty hours go to work.",
      "Sleep takes another piece.",
      "Responsibilities take theirs.",
      "And eventually you arrive at the weekend.",
      "Forty-eight hours.",
      "The clock starts immediately.",
      "48:00:00.",
      "And it's counting down.",
      "For somebody living in survival, those 48 hours are precious.",
      "Because somewhere inside those hours exists the possibility of building something that could eventually buy some of your time back.",
      "I've been thinking about Sundays.",
      "I'm a huge 49ers fan.",
      "I love football.",
      "There's a feeling I get watching my team play that very few forms of entertainment can reproduce.",
      "And there's nothing wrong with that.",
      "But I had to ask myself a harder question.",
      "What does Sunday actually cost me?",
      "There are roughly 52 Sundays every year.",
      "If I'm awake for 16 hours each Sunday, that's:",
      "832 waking hours.",
      "More than twenty 40-hour workweeks.",
      "And historically, football hasn't always cost me three hours.",
      "Sometimes watching the game meant drinking.",
      "And drinking meant the game ended, but my productive day ended with it.",
      "Three hours quietly became sixteen.",
      "That's when the question changed.",
      "It wasn't:",
      "\"Should I stop watching football?\"",
      "It became:",
      "\"How much do I value my time?\"",
      "Because maybe the goal isn't to never watch another football game.",
      "Maybe the goal is to build a life where I can watch every damn game.",
      "Maybe one day I have season tickets.",
      "Maybe I'm sitting in the stadium instead of watching from the couch.",
      "Maybe I can travel to away games.",
      "Maybe Sunday belongs completely to me because Monday belongs completely to me too.",
      "That's the part I was missing.",
      "I'm not trying to give up the things I love.",
      "I'm trying to buy enough of my life back to enjoy them without a clock hanging over my head.",
      "And suddenly sacrifice looks different.",
      "If I spend Sunday creating instead of consuming, I'm not necessarily losing Sunday.",
      "I may be investing one Sunday into thousands of future Sundays.",
      "That's a bet.",
      "There is no guarantee.",
      "Nobody can promise me that the things inside my imagination will become successful businesses.",
      "Nobody can promise me that the worlds I want to create will find an audience.",
      "Nobody can promise me financial freedom.",
      "But there is something I can decide.",
      "Whether I believe in myself enough to try.",
      "Because belief isn't something you say.",
      "Belief has a receipt.",
      "And the receipt is what you're willing to invest.",
      "Your attention.",
      "Your discipline.",
      "Your energy.",
      "Your hours.",
      "If I can spend hundreds of hours watching other people pursue their dreams, surely I can spend hundreds pursuing mine.",
      "Think about how strange fandom becomes when you look at it that way.",
      "We'll follow somebody else's journey for twenty years.",
      "Buy their jersey.",
      "Know their statistics.",
      "Defend them when they lose.",
      "Celebrate when they win.",
      "Show up next season when everything falls apart.",
      "We understand loyalty perfectly when it comes to other people.",
      "But what would happen if we became that loyal to ourselves?",
      "What if I became a fan of my own unfinished story?",
      "What if I showed up for myself when nobody was watching?",
      "What if I continued creating when the numbers were terrible?",
      "What if I believed in my vision during the losing seasons?",
      "What if I gave my dreams the same patience I've given teams, artists, companies and people who don't even know my name?",
      "Maybe that's what belief in yourself actually looks like.",
      "Not arrogance.",
      "Not believing you're better than anybody.",
      "Just deciding:",
      "My life deserves my participation.",
      "I don't want to spend this incarnation exclusively consuming things other people had the courage to create.",
      "I want to create too.",
      "I want to build worlds.",
      "I want to tell stories.",
      "I want to create things that help people remember something about themselves.",
      "I want to see The Boy and the Dream exist outside my imagination.",
      "I want to see what ACU becomes if I actually give it years instead of moments.",
      "And I want freedom.",
      "Not because I hate work.",
      "Because I love life.",
      "I want mornings that belong to me.",
      "I want afternoons where creativity doesn't have to fight exhaustion.",
      "I want to spend time with the people I love without mentally watching the weekend disappear.",
      "I want to wake up and decide where my energy goes.",
      "I want the ability to say:",
      "Today I'm creating.",
      "Or:",
      "Today I'm resting.",
      "Or even:",
      "Today I'm going to the 49ers game.",
      "And none of those choices threaten my survival.",
      "That's wealth to me.",
      "Ownership of time.",
      "So maybe this isn't about productivity.",
      "Maybe it isn't about hustle.",
      "Maybe it isn't even about football.",
      "Maybe it's about becoming conscious enough to recognize the value of an hour while you still possess it.",
      "Because every day we're making purchases with our attention.",
      "Some purchases give us pleasure.",
      "Some give us memories.",
      "Some give us relationships.",
      "Some give us knowledge.",
      "And some purchases might eventually give us freedom.",
      "I don't want to eliminate pleasure from my life.",
      "I want to stop accidentally spending the currency required to build the life I'm asking for.",
      "Because there may come a Sunday when I'm sitting inside Levi's Stadium watching the 49ers play.",
      "And maybe I'll think about all those Sundays years earlier when I chose to stay home and build.",
      "And I'll understand something.",
      "I never gave up football.",
      "I bought Sunday.",
      "And maybe that was the point all along.",
    ],
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

// Where the rest of the essays live.
export const xUrl = "https://x.com/DeshawnBuilds";

// Social channels are added here once real URLs exist. Never invent them.
export type SocialLink = NavItem & { logo?: string };

export const socialLinks: SocialLink[] = [
  { label: "X · Articles", href: xUrl, logo: "/worlds/x.jpg" },
];

// ACU films shown on the ACU page. `youtubeId` is the part after "watch?v=".
export type Film = { title: string; youtubeId: string };
export const films: Film[] = [
  {
    title: "The Most Dangerous Voice Says \u201cLater\u201d | The Still Kingdom \u2014 Episode 2",
    youtubeId: "u7e4lXUpynA",
  },
  {
    title: "Why Do We Always Start Strong Then Lose Momentum | The Archivist | Episode 1",
    youtubeId: "wTSlkZWs-44",
  },
  {
    title: "Soul Obedience | Awakened Creator Ep 5: The Flame Era Begins",
    youtubeId: "bHGAqqRZAEE",
  },
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
