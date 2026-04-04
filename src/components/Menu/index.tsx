import Footer from "../Footer";
import {
  portfolio,
  type MenuEntry,
  type ModalSectionId,
} from "../../data/portfolio";
import "./style.css";

interface MenuProps {
  menuActive: boolean;
  toggleMenu: () => void;
  onOpenModal: (id: ModalSectionId) => void;
  logo: string;
}

function MenuLink({
  entry,
  onOpenModal,
  toggleMenu,
}: {
  entry: MenuEntry;
  onOpenModal: (id: ModalSectionId) => void;
  toggleMenu: () => void;
}) {
  if (entry.type === "modal") {
    return (
      <a
        className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onOpenModal(entry.id);
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
          {entry.label}
        </h1>
      </a>
    );
  }

  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
      onClick={toggleMenu}
    >
      <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
        {entry.label}
      </h1>
    </a>
  );
}

const Menu = ({
  menuActive,
  toggleMenu,
  onOpenModal,
  logo,
}: MenuProps) => {
  const { meta, navigation } = portfolio;

  const openModal = (id: ModalSectionId) => {
    onOpenModal(id);
    toggleMenu();
  };

  return (
    <div className={`menuButton ${menuActive ? "active" : ""}`}>
      <button className="menuTgl" type="button" onClick={toggleMenu}>
        <span></span>
      </button>
      <div className="menu z-[199] relative w-screen h-screen bg-black/90 transition-all duration-500 ease-in-out [clip-path:circle(30px_at_calc(100%_-_65px)_65px)] invisible">
        <div className="fixed z-[9] p-[30px] table w-full pointer-events-none">
          <div className="text-left">
            <a
              href={meta.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[20vh] h-auto opacity-70 hover:opacity-100"
            >
              <img className="w-full h-auto" src={logo} alt={meta.logoAlt} />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center">
          {navigation.menu.map((entry) => (
            <MenuLink
              key={
                entry.type === "modal"
                  ? `modal-${entry.id}`
                  : `link-${entry.href}`
              }
              entry={entry}
              onOpenModal={openModal}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
        <Footer mode="light" />
      </div>
    </div>
  );
};

export default Menu;
