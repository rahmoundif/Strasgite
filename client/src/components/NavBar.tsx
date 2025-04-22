import { useState } from "react";
import { Link } from "react-router";
import Burger from "./burger";

function NavBar() {
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleMenu = () => {
    setisNavOpen((prev) => !prev);
  };

  return (
    <>
      {/* Affichage du bouton Burger uniquement sur mobile */}
      <div className="block md:hidden mr-6">
        <Burger toggleMenu={toggleMenu} isOpen={isNavOpen} />
      </div>

      {/* Navigation principale, visible sur tablette et desktop */}
      <nav className="hidden md:flex h-auto md:z-40 md:fixed md:top-0 md:left-0">
        <ul className="flex space-x-4 m-3">
          <li className="group">
            <Link
              to="/Accueil"
              className="text-[#d9bf77] py-2 relative text-xl"
            />
            Accueil
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link
              to="/Nos_Chambres"
              className="text-[#d9bf77] py-2 relative text-xl"
            />
            Nos chambres
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link
              to="/Services"
              className="text-[#d9bf77] py-2 relative text-xl"
            />
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link
              to="/Notre_Alsace"
              className="text-[#d9bf77] py-2 relative text-xl"
            />
            Notre Alsace
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link
              to="/Reservation"
              className="text-[#d9bf77] py-2 relative text-xl"
            />
            Réservation
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </nav>

      {/* Menu mobile (caché sur tablette et desktop) */}
      <nav
        className={`${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } bg-[#2c7865]/95 w-42 h-screen pt-16 z-40 fixed top-0 right-0 md:hidden transition-transform duration-300`}
      >
        <ul className="flex-col items-start space-y-4 m-4 text-[#d9bf77]">
          <li className="group">
            <Link to="/Accueil" className="py-2 relative" />
            Accueil
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link to="/Nos_Chambres" className="py-2 relative" />
            Nos chambres
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link to="/Services" className="py-2 relative" />
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link to="/Notre_Alsace" className="py-2 relative" />
            Notre Alsace
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group">
            <Link to="/Reservation" className="py-2 relative" />
            Réservation
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d9bf77] transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
