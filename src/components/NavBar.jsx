import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLinks = ({ onClick }) => {
  const baseStyle =
    "relative font-medium text-gray-500 hover:text-red-900 transition duration-300";

  const activeStyle = "text-red-900";

  return (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services-items", label: "Services" },
      ].map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Logo />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-10 items-center">
          <NavLinks />
          <NavLink
            to="/contact"
            className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition duration-75 shadow-md"
          >
            Get in Touch
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-gray-500 transition"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray shadow-md border-t px-6 py-6 flex flex-col space-y-6 text-center rounded-b-lg">
          <NavLinks onClick={() => setIsOpen(false)} />
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-red-900 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;