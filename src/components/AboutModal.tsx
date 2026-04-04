import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHashnode,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import profilePhoto from "../assets/img/vaibhav.jpeg";
import ModalShell from "./ModalShell";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900";

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose} ariaLabel="About Vaibhav Singhal">
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-gray-50/90 to-white px-6 pb-8 pt-6 sm:px-8 sm:pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            About
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="shrink-0">
              <img
                className="h-28 w-28 rounded-2xl object-cover shadow-lg ring-4 ring-white sm:h-32 sm:w-32"
                src={profilePhoto}
                alt="Vaibhav Singhal"
              />
            </div>
            <div className="min-w-0 flex-1 space-y-2 pr-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Vaibhav Singhal
              </h3>
              <p className="text-base leading-snug text-gray-600 sm:text-lg">
                Founder & CEO — Needle
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                <a
                  href="https://x.com/iamvs2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="X"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/iamvs2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
                <a
                  href="https://github.com/iamvs-2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/iamvs2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                </a>
                <a
                  href="https://iamvs2002.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Blog on Hashnode"
                >
                  <FontAwesomeIcon icon={faHashnode} className="text-lg" />
                </a>
                <a
                  href="mailto:work.iamvs2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-6 pt-6 text-[15px] leading-relaxed text-gray-700 sm:px-8">
          <p>
            I build products where the problem is messy and the outcome matters.{" "}
            <strong className="font-semibold text-gray-900">Needle</strong> helps
            founders surface the customer conversations hiding in communities—so
            growth starts from signal, not guesswork.{" "}
            <strong className="font-semibold text-gray-900">
              MoveOnFromYourEx
            </strong>{" "}
            is an AI-supported space for people navigating a breakup with
            structure and care. CS from LNMIIT (2023); before going full-time on
            these companies, I worked on firewall and platform security for 300K+
            WordPress sites handling on the order of a billion requests a day.
          </p>
          <p>
            Day to day that means product judgment, security architecture,
            vulnerability management, and backend systems that stay calm under
            load—whether we are turning noisy social data into something a
            founder can ship against, or earning trust in a sensitive user
            journey. If you are working on something ambitious, practical, or
            slightly impossible, I am easy to reach.
          </p>
        </div>
      </div>
    </ModalShell>
  );
};

export default AboutModal;
