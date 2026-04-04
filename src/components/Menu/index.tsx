import Footer from "../Footer";
import { SITE_URL } from "../../site";
interface MenuProps {
  menuActive: boolean;
  toggleMenu: () => void;
  onOpenAbout: () => void;
  onOpenWork: () => void;
  onOpenEducation: () => void;
  onOpenProjects: () => void;
  onOpenHighlights: () => void;
  logo: string;
}
import "./style.css";

const Menu = ({
  menuActive,
  toggleMenu,
  onOpenAbout,
  onOpenWork,
  onOpenEducation,
  onOpenProjects,
  onOpenHighlights,
  logo,
}: MenuProps) => {
  return (
    <div className={`menuButton ${menuActive ? "active" : ""}`}>
      <button className="menuTgl" type="button" onClick={toggleMenu}>
        <span></span>
      </button>
      <div className="menu z-[199] relative w-screen h-screen bg-black/90 transition-all duration-500 ease-in-out [clip-path:circle(30px_at_calc(100%_-_65px)_65px)] invisible">
        <div className="fixed z-[9] p-[30px] table w-full pointer-events-none">
          <div className="text-left">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[20vh] h-auto opacity-70 hover:opacity-100"
            >
              <img className="w-full h-auto" src={logo} alt="iamvs2002" />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center">
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              onOpenAbout();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              About
            </h1>
          </a>
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              onOpenWork();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Work experience
            </h1>
          </a>
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              onOpenEducation();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Education
            </h1>
          </a>
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              onOpenProjects();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Startups/projects
            </h1>
          </a>
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              onOpenHighlights();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Highlights
            </h1>
          </a>
          <a
            href="https://iamvs2002.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={toggleMenu}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Blog
            </h1>
          </a>
          <a
            href="mailto:work.iamvs2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={toggleMenu}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Let&apos;s Connect!
            </h1>
          </a>
        </div>
        <Footer mode="light" />
      </div>
    </div>
  );
};

export default Menu;
