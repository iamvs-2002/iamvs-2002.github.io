import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ModalShell from "./ModalShell";
import { workExperienceEntries } from "../data/workExperience";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RoleLogo({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
        <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className="h-12 w-12 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

const WorkExperienceModal = ({ isOpen, onClose }: WorkExperienceModalProps) => {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose} ariaLabel="Work experience">
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-emerald-50/50 to-white px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Work experience
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Selected roles—summaries only; happy to go deeper in conversation.
          </p>
        </div>

        <div className="divide-y divide-gray-100 px-2 sm:px-4">
          {workExperienceEntries.map((job) => (
            <article
              key={`${job.company}-${job.role}-${job.date}`}
              className="flex gap-4 py-5 first:pt-6 sm:gap-5 sm:px-2"
            >
              <RoleLogo src={job.logoSrc} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {job.date}
                </p>
                <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                  {job.role}
                </h3>
                <p className="text-sm font-semibold text-gray-700">{job.company}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                  {job.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default WorkExperienceModal;
