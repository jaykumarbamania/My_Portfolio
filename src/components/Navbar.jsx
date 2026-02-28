import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MY_PORTFOLIO_NAME } from "../data/socials";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isCaseStudy = location.pathname === "/oms-case-study";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          {MY_PORTFOLIO_NAME}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) =>
            isCaseStudy ? (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="relative group text-gray-700 font-medium hover:text-black transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-gray-700 font-medium hover:text-black transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all group-hover:w-full" />
              </a>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-[2px] bg-black transition ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`h-[2px] bg-black transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] bg-black transition ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all ${isOpen ? "max-h-96 border-t" : "max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col px-4 py-4 space-y-4 bg-white">
          {navLinks.map((link) =>
            isCaseStudy ? (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
