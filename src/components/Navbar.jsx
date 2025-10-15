import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Works", link: "/works" },
    { label: "Tours", link: "/tours" },
  ];

  return (
    <nav className="flex bg-transparent items-center justify-between text-white h-[90px] px-4 md:px-12 md:gap-8 uppercase relative">
      {/* Left: Search */}
      <div className="order-1">
        <input
          className="border px-4 py-2 rounded-md bg-transparent border-white/30 focus:outline-none placeholder:text-white/60 w-[140px] sm:w-[200px] md:w-[250px]"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Center: Logo / Title */}
      <div className="text-center hidden md:block md:text-2xl lg:text-3xl xl:text-4xl font-bold order-2">
        <span>ludovico einaudi</span>
      </div>

      {/* Right: Desktop Nav Links */}
      <div className={`hidden md:flex gap-6 order-3`}>
        {navLinks.map((nav) => (
          <Link
            to={nav.link}
            key={nav.label}
            className={`${
              pathname === nav.link
                ? "text-white/80 after:content=[''] after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-white"
                : ""
            }
    relative
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-1/2
    after:h-[2px]
    after:w-0 
    after:bg-white
    after:transition-all
    after:duration-300
    after:-translate-x-1/2
    hover:after:w-full
    hover:text-white/80
    transition
  `}
          >
            {nav.label}
          </Link>
        ))}
      </div>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          toggleMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setToggleMenu(false)}
      ></div>

      {/* Mobile Menu Button */}
      <button
        className="z-100 md:hidden order-3 text-3xl"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`${
              toggleMenu ? "rotate-45 translate-y-[8px]" : ""
            } block bg-white w-6 h-[2px] transition-transform duration-200`}
          ></span>
          <span
            className={`${
              toggleMenu ? "opacity-0" : ""
            } block bg-white w-6 h-[2px] transition-opacity duration-200`}
          ></span>
          <span
            className={`${
              toggleMenu ? "-rotate-45 -translate-y-[8px]" : ""
            } block bg-white w-6 h-[2px] transition-transform duration-200`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[90px] right-0 w-2/5 sm:w-1/3 h-[100vh] bg-black/50 flex flex-col items-end gap-12 py-6 md:hidden z-50 
  transition-all duration-500 ease-in-out transform
  ${
    toggleMenu
      ? "translate-x-0 opacity-100"
      : "translate-x-full opacity-0 pointer-events-none"
  }`}
      >
        {navLinks.map((nav) => (
          <Link
            to={nav.link}
            key={nav.label}
            onClick={() => setToggleMenu(false)}
            className={`${
              pathname === nav.link ? "underline" : ""
            } text-lg pr-10 hover:text-white/80 hover:underline transition duration-200`}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
