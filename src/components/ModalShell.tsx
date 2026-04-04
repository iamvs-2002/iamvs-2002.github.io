import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Accessible label for the dialog */
  ariaLabel: string;
}

const ModalShell = ({ isOpen, onClose, children, ariaLabel }: ModalShellProps) => {
  return (
    <div
      className={`fixed inset-0 z-[990] flex items-center justify-center p-4 sm:p-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        aria-hidden
        className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`relative flex max-h-[min(90vh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl shadow-gray-900/15 ring-1 ring-gray-200/90 transition duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-[0.98] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-10 rounded-full p-2.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>
  );
};

export default ModalShell;
