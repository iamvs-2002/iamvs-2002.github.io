import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EmbedVideo from "./EmbedVideo";
import ModalShell from "./ModalShell";
import { portfolio } from "../data/portfolio";

interface HighlightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function HighlightVisual({
  icon,
  logoSrc,
}: {
  icon: IconDefinition;
  logoSrc?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!logoSrc || failed) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100/90 text-amber-900">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt=""
      className="h-12 w-12 shrink-0 rounded-xl object-contain"
      onError={() => setFailed(true)}
    />
  );
}

const HighlightsModal = ({ isOpen, onClose }: HighlightsModalProps) => {
  const h = portfolio.highlights;

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={h.modalAriaLabel}
    >
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-amber-50/60 to-white px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {h.eyebrow}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            {h.intro}
          </p>
        </div>

        <div className="divide-y divide-gray-100 px-2 sm:px-4">
          {h.entries.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 py-5 first:pt-6 sm:gap-5 sm:px-2"
            >
              <HighlightVisual icon={item.icon} logoSrc={item.logoSrc} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {item.date} · {item.context}
                </p>
                <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                  {item.summary}
                </p>
                {item.video && (
                  <div className="mt-4 max-w-xl">
                    <EmbedVideo video={item.video} label={item.title} />
                  </div>
                )}
                {item.links && item.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-900/90 underline-offset-2 hover:text-amber-800 hover:underline"
                      >
                        {link.label}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-xs opacity-75"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default HighlightsModal;
