import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLaptopCode, faTrophy, faHandshake } from "@fortawesome/free-solid-svg-icons";

export type HighlightLink = { label: string; href: string };

export type HighlightEntry = {
  title: string;
  context: string;
  date: string;
  summary: string;
  icon: IconDefinition;
  /**
   * Logo image under `public/highlights/` (served as `/highlights/...`).
   * Add the file locally; if missing or broken, the icon above is shown.
   */
  logoSrc?: string;
  links?: HighlightLink[];
};

export const highlightEntries: HighlightEntry[] = [
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
        label: "Certificate",
        href: "https://drive.google.com/file/d/1RJ7NvGxNWFg113jHf9u9T7KDuEH9_MPn/view?usp=sharing",
      },
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
