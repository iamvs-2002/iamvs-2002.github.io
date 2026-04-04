/**
 * Add company logos under `public/work/`:
 *   blogvault.png, acm.png, atomei.jpeg, gpcssip.jpeg, engineerHub.png
 * LNMIIT TA uses the hosted LNMIIT logo URL below (no local file required).
 */

export type WorkExperienceEntry = {
  role: string;
  company: string;
  date: string;
  summary: string;
  /** `/work/...` in public, or absolute URL */
  logoSrc?: string;
};

export const workExperienceEntries: WorkExperienceEntry[] = [
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
