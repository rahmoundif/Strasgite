type BurgerProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

function Burger({ toggleMenu, isOpen }: BurgerProps) {
  return (
    <section className="absolute top-5 right-5 z-50 bg-[#2c7865]/70 rounded-sm h-9 w-10 cursor-pointer p-1">
      <div onClick={toggleMenu} onKeyDown={toggleMenu}>
        <div className="relative w-11 h-11">
          <span
            className={`absolute left-0 h-1 w-8 bg-[#d9bf77] transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-2.5" : "top-0"
            }`}
          />

          <span
            className={`absolute left-0 h-1 w-8 bg-[#d9bf77] transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-2.5"
            }`}
          />
          <span
            className={`absolute left-0 h-1 w-8 bg-[#d9bf77] transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-2.5" : "top-5"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default Burger;
