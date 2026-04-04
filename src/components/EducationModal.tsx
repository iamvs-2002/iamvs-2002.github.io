import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import ModalShell from "./ModalShell";

const LNMIIT_LOGO =
  "https://lnmiit.ac.in/wp-content/uploads/2023/07/cropped-LNMIIT-Logo-Transperant-Background-e1699342125845.png";

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const coursework = [
  "Software engineering",
  "Advanced programming (Java)",
  "Data structures and algorithms",
  "Computer networks",
  "Database management (MySQL)",
  "Operating systems",
  "Computer programming (C)",
  "Computer security",
];

const EducationModal = ({ isOpen, onClose }: EducationModalProps) => {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose} ariaLabel="Education">
      <div className="pb-8 pt-2">
        <div className="border-b border-gray-100 bg-gradient-to-b from-indigo-50/40 to-white px-6 pb-8 pt-6 sm:px-8 sm:pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Education
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex shrink-0 items-center justify-start sm:justify-center">
              <img
                src={LNMIIT_LOGO}
                alt="LNMIIT"
                className="max-h-24 w-auto max-w-[min(100%,220px)] object-contain sm:max-h-28"
              />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center gap-2 text-indigo-600">
                <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
                <span className="text-sm font-medium">Degree</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                The LNM Institute of Information Technology
              </h3>
              <p className="text-base text-gray-700">
                Bachelor of Technology in Computer Science
              </p>
              <p className="text-sm font-medium text-gray-500">Aug 2019 — May 2023</p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 sm:px-8">
          <p className="mb-3 text-sm font-semibold text-gray-900">Coursework & focus</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {coursework.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 text-sm text-gray-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ModalShell>
  );
};

export default EducationModal;
