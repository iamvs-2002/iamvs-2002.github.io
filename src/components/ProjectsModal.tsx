import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EmbedVideo from "./EmbedVideo";
import ModalShell from "./ModalShell";
import { portfolio } from "../data/portfolio";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  const p = portfolio.projects;

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={p.modalAriaLabel}
    >
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-slate-50/80 to-white px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {p.eyebrow}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            {p.intro}
          </p>
        </div>

        <div className="space-y-4 px-6 pt-6 sm:px-8">
          {p.entries.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex shrink-0 items-start justify-center sm:pt-0.5">
                  <img
                    src={project.logo}
                    alt=""
                    className={project.logoClass}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-gray-500">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  {project.video && (
                    <div className="mt-4 max-w-2xl">
                      <EmbedVideo
                        video={project.video}
                        label={project.name}
                      />
                    </div>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer dofollow"
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${project.linkClass}`}
                  >
                    Visit {project.visitLabel}
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
