/**
 * Single source of truth for site copy and structured content.
 *
 * Assets: add files under `public/` as referenced (e.g. `public/work/…`, `public/highlights/…`).
 * Optional video: set `video` on a project or highlight (`PortfolioVideo` — YouTube / Vimeo id, or `file` + `/media/...` under `public/`).
 * Profile photo is bundled from `src/assets/img/`.
 */

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import {
  faHandshake,
  faLaptopCode,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import profilePhoto from "../assets/img/vaibhav.jpeg";

// --- Shared types ----------------------------------------------------------

export type ModalSectionId =
  | "about"
  | "work"
  | "education"
  | "projects"
  | "highlights";

export type MenuEntry =
  | { type: "modal"; id: ModalSectionId; label: string }
  | { type: "link"; label: string; href: string };

export type SocialPlatform =
  | "x"
  | "instagram"
  | "github"
  | "linkedin"
  | "hashnode"
  | "email";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  ariaLabel: string;
};

/** Font Awesome icon per platform (for About footer strip + site footer). */
export const socialIconByPlatform: Record<SocialPlatform, IconDefinition> = {
  x: faXTwitter,
  instagram: faInstagram,
  github: faGithub,
  linkedin: faLinkedin,
  hashnode: faHashnode,
  email: faEnvelopeOpen,
};

export type HighlightLink = { label: string; href: string };

/**
 * Optional embed for projects / highlights. Use stable provider IDs only (no raw HTML).
 *
 * - `youtube`: video id from the URL (`watch?v=` or `youtu.be/`)
 * - `vimeo`: numeric id from `vimeo.com/123456789`
 * - `file`: path under `public/` e.g. `/media/demo.mp4` plus optional poster image
 */
export type PortfolioVideo =
  | { kind: "youtube"; id: string }
  | { kind: "vimeo"; id: string }
  | { kind: "file"; src: string; poster?: string };

export type HighlightEntry = {
  title: string;
  context: string;
  date: string;
  summary: string;
  icon: IconDefinition;
  /** Logo under `public/highlights/` → `/highlights/...`, or any URL */
  logoSrc?: string;
  links?: HighlightLink[];
  video?: PortfolioVideo;
};

export type WorkExperienceEntry = {
  role: string;
  company: string;
  date: string;
  summary: string;
  /** `/work/...` in `public`, or absolute URL */
  logoSrc?: string;
};

export type ProjectEntry = {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoClass: string;
  href: string;
  visitLabel: string;
  linkClass: string;
  /** Product demo, walkthrough, or pitch (shown between description and visit link). */
  video?: PortfolioVideo;
};

// --- Content ---------------------------------------------------------------

const socialLinks: SocialLink[] = [
  {
    platform: "x",
    href: "https://x.com/iamvs2002",
    ariaLabel: "X",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/iamvs2002",
    ariaLabel: "Instagram",
  },
  {
    platform: "github",
    href: "https://github.com/iamvs-2002",
    ariaLabel: "GitHub",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/iamvs2002/",
    ariaLabel: "LinkedIn",
  },
  {
    platform: "hashnode",
    href: "https://iamvs2002.hashnode.dev/",
    ariaLabel: "Blog on Hashnode",
  },
  {
    platform: "email",
    href: "mailto:work.iamvs2002@gmail.com",
    ariaLabel: "Email",
  },
];

const menu: MenuEntry[] = [
  { type: "modal", id: "about", label: "About" },
  { type: "modal", id: "work", label: "Work experience" },
  { type: "modal", id: "education", label: "Education" },
  { type: "modal", id: "projects", label: "Startups/projects" },
  { type: "modal", id: "highlights", label: "Highlights" },
  { type: "link", label: "Blog", href: "https://iamvs2002.hashnode.dev/" },
  {
    type: "link",
    label: "Let's Connect!",
    href: "mailto:work.iamvs2002@gmail.com",
  },
];

/**
 * Work experience — add company logos under `public/work/`:
 * blogvault.png, acm.png, atomei.jpeg, gpcssip.jpeg, engineerHub.png
 * (LNMIIT TA uses hosted LNMIIT logo URL below.)
 */
const workExperienceEntries: WorkExperienceEntry[] = [
  {
    role: "Software Development Engineer",
    company: "BlogVault",
    date: "Jun 2023 — Jun 2025",
    summary:
      "Firewall and platform security for 300K+ WordPress sites at 1B+ daily requests—shipping rules against XSS/SQLi/privilege abuse, TOTP 2FA, multi-tier ClickHouse storage, automated vulnerability management and bot defense, plus production support and incident response on Rails, PHP, and MySQL.",
    logoSrc: "/work/blogvault.png",
  },
  {
    role: "SDE Intern",
    company: "BlogVault",
    date: "Jan 2023 — Apr 2023",
    summary:
      "Built FormWatch: one-click testing for WordPress form plugins on local and live sites, cutting QA time using Ruby on Rails, React, and PHP.",
    logoSrc: "/work/blogvault.png",
  },
  {
    role: "Technical Head — Open Source",
    company: "ACM, LNMIIT",
    date: "Jul 2021 — May 2023",
    summary:
      "Ran workshops and mentorship for open-source contribution; helped orchestrate large chapter events including International Research Consortium ’22.",
    logoSrc: "/work/acm.png",
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "LNMIIT",
    date: "Oct 2021 — Apr 2022",
    summary:
      "TA for introductory programming (C, Linux) under Prof. Philip L. Miller—labs, grading, and feedback for 150+ students.",
    logoSrc:
      "https://lnmiit.ac.in/wp-content/uploads/2023/07/cropped-LNMIIT-Logo-Transperant-Background-e1699342125845.png",
  },
  {
    role: "Software Development Engineer in Test (Intern)",
    company: "Atom EI",
    date: "Mar 2022 — Apr 2022",
    summary:
      "Full-stack testing on the Atom product; tightened test coverage and left reusable test patterns with the QA team.",
    logoSrc: "/work/atomei.jpeg",
  },
  {
    role: "Cyber Security Intern",
    company: "Gurugram Police Cyber Cell",
    date: "Jun 2021 — Jul 2021",
    summary:
      "Structured training in digital forensics, dark-web awareness, social/email crime investigation, threat intelligence, ransomware, and Indian cyber law.",
    logoSrc: "/work/gpcssip.jpeg",
  },
  {
    role: "Mentor",
    company: "engineerHUB",
    date: "Jan 2021 — Jul 2021",
    summary:
      "Mentored students from 275+ colleges on Android, Java, and Git—office hours, reviews, and hands-on build sessions.",
    logoSrc: "/work/engineerHub.png",
  },
];

/** Highlights — logos under `public/highlights/` → `/highlights/...` */
const highlightEntries: HighlightEntry[] = [
  {
    title: "HackZurich 2023",
    context: "Europe’s largest hackathon · Zurich",
    date: "Sep 2023",
    summary:
      "Selected to build in a 40-hour sprint with global teams. Shipped SikaMa: a GenAI-powered knowledge hub to cut through silos and surface accurate, trustworthy information for decision-makers at Sika.",
    icon: faLaptopCode,
    logoSrc: "/highlights/hackzurich.jpeg",
    links: [
      {
        label: "SikaMa on GitHub",
        href: "https://github.com/sRam1404/SikaMa",
      },
    ],
  },
  {
    title: "Meta Hacker Cup 2021",
    context: "Facebook Hacker Cup (algorithmic contest)",
    date: "2021",
    summary:
      "Ranked in the top ~30% of participants worldwide in Round 2—competitive programming under time pressure across multiple algorithmic rounds.",
    icon: faTrophy,
    logoSrc: "/highlights/hackercup.jpg",
  },
  {
    title: "Checked It — Event organizer",
    context: "Volunteering · ACM, LNMIIT",
    date: "Jan — Feb 2022",
    summary:
      "Helped organize the International Research Consortium: outreach to students, coordination with ACM LNMIIT, and on-the-ground support so the event could host 500+ participants smoothly.",
    icon: faHandshake,
    logoSrc: "/highlights/checkedit.jpg",
  },
];

const projectEntries: ProjectEntry[] = [
  {
    name: "Needle",
    tagline: "Find customers where they're already talking.",
    description:
      "Conversation intelligence for founders and marketers: search a dozen communities at once—Reddit, Hacker News, GitHub, X, Quora, and more—then filter by intent, track competitors, and turn noisy threads into leads and product insight.",
    logo: "https://useneedle.net/logo-light-56w.webp",
    logoClass: "h-14 w-14 object-contain",
    href: "https://useneedle.net/",
    visitLabel: "useneedle.net",
    linkClass: "text-slate-800 transition-colors hover:text-slate-600"
  },
  {
    name: "moveonfromyourex",
    tagline: "AI-powered breakup recovery—structure when emotions run high.",
    description:
      "A healing companion for messy moments: no-contact tracking, journaling with insights, message guidance, and daily support so you can process feelings, avoid impulsive decisions, and rebuild at your own pace.",
    logo: "https://moveonfromyourex.com/logo-light.png",
    logoClass: "h-12 w-12 object-contain",
    href: "https://moveonfromyourex.com/",
    visitLabel: "moveonfromyourex.com",
    linkClass: "text-rose-900/90 transition-colors hover:text-rose-700",
  },
  {
    name: "URL2Mockup",
    tagline: "Beautiful device mockups from any URL—in seconds.",
    description:
      "Paste a link, pick laptop, phone, or tablet, and get presentation-ready mockups—no Figma sprint required. Built for pitch decks, portfolios, demos, and marketing when you need polished visuals fast.",
    logo: "https://url2mockup.com/logo.png",
    logoClass: "h-12 w-auto max-w-[120px] object-contain sm:h-14",
    href: "https://url2mockup.com/",
    visitLabel: "url2mockup.com",
    linkClass: "text-violet-900/90 transition-colors hover:text-violet-700",
  },
  {
    name: "Remixly",
    tagline: "Ship a month of brand-aligned remixes from one website URL.",
    description:
      "Remixly turns your site into swipe-ready short-form content—hooks, captions, and auto-rendered 9:16 video, so a single URL becomes a month of on-brand reels. Early access opening soon.",
    logo: "https://useremixly.com/logo.png",
    logoClass: "h-12 w-12 object-contain",
    href: "https://useremixly.com/",
    visitLabel: "useremixly.com",
    linkClass: "text-blue-900/90 transition-colors hover:text-blue-700",
  },
];

const educationCoursework = [
  "Software engineering",
  "Advanced programming (Java)",
  "Data structures and algorithms",
  "Computer networks",
  "Database management (MySQL)",
  "Operating systems",
  "Computer programming (C)",
  "Computer security",
];

/**
 * Paragraphs may use `**like this**` for bold segments and `[label](url)` for
 * links (rendered in AboutModal). Product mentions link out do-follow.
 */
const aboutParagraphs: [string, string] = [
  [
    "I build products where the problem is messy and the outcome matters. ",
    "[**Needle**](https://useneedle.net/) helps founders surface the customer conversations hiding in communities—so growth starts from signal, not guesswork. ",
    "[**moveonfromyourex**](https://moveonfromyourex.com/) is an AI-supported space for people navigating a breakup with structure and care, and [**URL2Mockup**](https://url2mockup.com/) turns any URL into presentation-ready device mockups in seconds. CS from LNMIIT (2023); before going full-time on these companies, I worked on firewall and platform security for 300K+ WordPress sites handling on the order of a billion requests a day.",
  ].join(""),
  "Day to day that means product judgment, security architecture, vulnerability management, and backend systems that stay calm under load—whether we are turning noisy social data into something a founder can ship against, or earning trust in a sensitive user journey. If you are working on something ambitious, practical, or slightly impossible, I am easy to reach.",
];

export const portfolio = {
  meta: {
    /** Canonical deploy URL (GitHub Pages user site). */
    siteUrl: "https://iamvs-2002.github.io",
    siteName: "iamvs2002",
    /** Header logo and menu */
    logoAlt: "iamvs2002",
  },

  hero: {
    title: "Hi, I'm Vaibhav!",
    subtitle: "Founder & CEO - Needle",
  },

  navigation: {
    menu,
  },

  social: {
    links: socialLinks,
  },

  about: {
    modalAriaLabel: "About Vaibhav Singhal",
    eyebrow: "About",
    name: "Vaibhav Singhal",
    titleLine: "Founder & CEO — Needle",
    profileImage: profilePhoto,
    profileImageAlt: "Vaibhav Singhal",
    paragraphs: aboutParagraphs,
  },

  education: {
    eyebrow: "Education",
    institutionLogoUrl:
      "https://lnmiit.ac.in/wp-content/uploads/2023/07/cropped-LNMIIT-Logo-Transperant-Background-e1699342125845.png",
    institutionLogoAlt: "LNMIIT",
    schoolName: "The LNM Institute of Information Technology",
    degree: "Bachelor of Technology in Computer Science",
    dates: "Aug 2019 — May 2023",
    coursework: educationCoursework,
  },

  projects: {
    modalAriaLabel: "Startups and projects",
    eyebrow: "Startups/projects",
    intro:
      "Things I ship and own end-to-end—conversation intelligence, AI short-form content, a mental health–adjacent consumer product, and a free tool for instant mockups.",
    entries: projectEntries,
  },

  work: {
    modalAriaLabel: "Work experience",
    eyebrow: "Work experience",
    intro:
      "Selected roles—summaries only; happy to go deeper in conversation.",
    entries: workExperienceEntries,
  },

  highlights: {
    modalAriaLabel: "Highlights",
    eyebrow: "Highlights",
    intro: "Hackathons, competitions, and community—short list, high signal.",
    entries: highlightEntries,
  },
} as const;

export const SITE_URL = portfolio.meta.siteUrl;
