import { useState } from "react";
import { MY_PORTFOLIO_NAME } from "../config/socials";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="font-bold text-lg">
          {MY_PORTFOLIO_NAME}
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-gray-700 font-medium transition-colors duration-300 hover:text-black"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-700 font-medium hover:text-black transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
