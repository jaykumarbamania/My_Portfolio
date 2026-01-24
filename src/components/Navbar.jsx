import { useEffect, useState } from "react";
import { MY_PORTFOLIO_NAME } from "../config/socials";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {

  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">
          {MY_PORTFOLIO_NAME}
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-black transition">
              Home
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-black transition">
              Skills
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-black transition">
              Projects
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-black transition">
              Experience
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-black transition">
              Contact
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </li>
        </ul>
        {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
      </nav> */}

      <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">
          {MY_PORTFOLIO_NAME}
        </span>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-gray-700 font-medium transition-colors duration-300 hover:text-black"
            >
              {link.name}

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="border rounded px-3 py-1 text-sm dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button> */}
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
