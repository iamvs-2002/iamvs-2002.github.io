import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalShell from "./ModalShell";
import {
  portfolio,
  socialIconByPlatform,
} from "../data/portfolio";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900";

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((part, i) => {
        const m = part.match(/^\*\*(.+)\*\*$/);
        if (m) {
          return (
            <strong key={i} className="font-semibold text-gray-900">
              {m[1]}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </p>
  );
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const { about, social } = portfolio;

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={about.modalAriaLabel}
    >
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-gray-50/90 to-white px-6 pb-8 pt-6 sm:px-8 sm:pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {about.eyebrow}
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="shrink-0">
              <img
                className="h-28 w-28 rounded-2xl object-cover shadow-lg ring-4 ring-white sm:h-32 sm:w-32"
                src={about.profileImage}
                alt={about.profileImageAlt}
              />
            </div>
            <div className="min-w-0 flex-1 space-y-2 pr-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {about.name}
              </h3>
              <p className="text-base leading-snug text-gray-600 sm:text-lg">
                {about.titleLine}
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {social.links.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialClass}
                    aria-label={link.ariaLabel}
                  >
                    <FontAwesomeIcon
                      icon={socialIconByPlatform[link.platform]}
                      className="text-lg"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-6 pt-6 text-[15px] leading-relaxed text-gray-700 sm:px-8">
          {about.paragraphs.map((paragraph, index) => (
            <RichParagraph key={index} text={paragraph} />
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default AboutModal;
