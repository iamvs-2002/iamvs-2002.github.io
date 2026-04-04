import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedin, faHashnode, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

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
      <a href="https://x.com/iamvs2002" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://www.instagram.com/iamvs2002" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://github.com/iamvs-2002" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/iamvs2002/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://iamvs2002.hashnode.dev/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faHashnode} />
      </a>
      <a href="mailto:work.iamvs2002@gmail.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
      </a>
    </footer>
  );
};

export default Footer;