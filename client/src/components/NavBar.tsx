import { useState } from "react";
import { Link } from "react-router";
import { useLogin } from "../../src/context/LoginContext";
import { useTranslation } from "../context/TranslationContext";
import TranslationButtons from "./TranslationButtons";
import Burger from "./burger";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavBar: React.FC<NavBarProps> = () => {
  const { isConnected, userRole } = useLogin();
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleMenu = () => {
    setisNavOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setisNavOpen(false);
  };

  const { text_translation } = useTranslation();

  return (
    <section>
      {/* Haut de page mobile : avatar + burger */}
      <div className="flex justify-end items-center p-4 md:hidden">
        {/* Avatar qui change en fonction du state */}
        <Link to="/LogIn">
          <img
            src={
              isConnected
                ? userRole === "Admin"
                  ? "/avatar_h_noir.png"
                  : userRole === "User"
                    ? "/avatar_f_asiatique.png"
                    : userRole === "Europe"
                      ? "/avatar_h_blanc.png"
                      : "/account.svg"
                : "/account.svg"
            }
            alt="Connexion"
            className={`w-9 h-9 mr-15 mt-1 rounded-sm ${isConnected ? "bg-none" : "bg-[#2c7865]"}`}
          />
        </Link>

        <Burger toggleMenu={toggleMenu} isOpen={isNavOpen} />
      </div>

      <div className="z-51 absolute top-0 md:hidden">
        <TranslationButtons />
      </div>

      {/* Navigation principale pour desktop */}

      <nav className="hidden md:flex md:justify-center md:items-center md:z-40 px-4 md:px-8 lg:px-12 ">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 m-4">
          <li className="group relative md:pb-2">
            <Link
              to="/"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_home")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Nos_Chambres"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_rooms")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Services"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_services")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Notre_Alsace"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_alsace")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Reservation"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_reservation")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Contact"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_contact")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/LogIn"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_login")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/EspaceVisiteur"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
            >
              {text_translation("nav_my_space")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu mobile */}
      <nav
        className={`${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } bg-[#2c7865]/95 w-full h-screen pt-16 z-40 fixed top-0 right-0 md:hidden transition-transform duration-300`}
        style={{
          color: "var(--color-accent)",
          backgroundColor: "var(--color-primary-90)",
        }}
      >
        <ul className="flex flex-col items-start space-y-4 m-4 mt-25">
          <li className="group relative">
            <Link
              to="/"
              className="text-[#d9bf77] py-2 relative text-xl"
              onClick={closeMenu}
            >
              {text_translation("nav_home")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Nos_Chambres"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_rooms")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Services"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_services")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Notre_Alsace"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_alsace")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/Reservation"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_reservation")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/contact"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_contact")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/LogIn"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_login")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="group relative">
            <Link
              to="/EspaceVisiteur"
              className="text-[#d9bf77] py-2 relative text-xl lg:text-3xl"
              onClick={closeMenu}
            >
              {text_translation("nav_my_space")}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
