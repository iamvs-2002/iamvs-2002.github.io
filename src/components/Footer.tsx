import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  portfolio,
  socialIconByPlatform,
} from "../data/portfolio";

interface FooterProps {
  mode?: "light" | "dark";
}

const Footer = ({ mode = "dark" }: FooterProps) => {
  const linkClasses =
    mode === "light"
      ? "opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
      : "opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg";

  return (
    <footer className="fixed bottom-3 w-full text-center z-50">
      {portfolio.social.links.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
          aria-label={link.ariaLabel}
        >
          <FontAwesomeIcon icon={socialIconByPlatform[link.platform]} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
