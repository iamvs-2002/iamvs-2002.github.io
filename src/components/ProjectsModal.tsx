import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ModalShell from "./ModalShell";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Project = {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoClass: string;
  href: string;
  visitLabel: string;
  linkClass: string;
};

const projects: Project[] = [
  {
    name: "Needle",
    tagline: "Find customers where they're already talking.",
    description:
      "Conversation intelligence for founders and marketers: search a dozen communities at once—Reddit, Hacker News, GitHub, X, Quora, and more—then filter by intent, track competitors, and turn noisy threads into leads and product insight.",
    logo: "https://useneedle.net/logo-light-56w.webp",
    logoClass: "h-14 w-14 object-contain",
    href: "https://useneedle.net/",
    visitLabel: "useneedle.net",
    linkClass:
      "text-slate-800 transition-colors hover:text-slate-600",
  },
  {
    name: "MoveOnFromYourEx",
    tagline: "AI-powered breakup recovery—structure when emotions run high.",
    description:
      "A healing companion for messy moments: no-contact tracking, journaling with insights, message guidance, and daily support so you can process feelings, avoid impulsive decisions, and rebuild at your own pace.",
    logo: "https://moveonfromyourex.com/logo48.webp",
    logoClass: "h-12 w-12 object-contain",
    href: "https://moveonfromyourex.com/",
    visitLabel: "moveonfromyourex.com",
    linkClass:
      "text-rose-900/90 transition-colors hover:text-rose-700",
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
    linkClass:
      "text-violet-900/90 transition-colors hover:text-violet-700",
  },
];

const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose} ariaLabel="Startups and projects">
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-slate-50/80 to-white px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Startups/projects
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Things I ship and own end-to-end—conversation intelligence, mental
            health–adjacent consumer product, and a free tool for instant
            mockups.
          </p>
        </div>

        <div className="space-y-4 px-6 pt-6 sm:px-8">
          {projects.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex shrink-0 items-start justify-center sm:pt-0.5">
                  <img src={p.logo} alt="" className={p.logoClass} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-gray-500">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                    {p.description}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${p.linkClass}`}
                  >
                    Visit {p.visitLabel}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xs opacity-80"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default ProjectsModal;
