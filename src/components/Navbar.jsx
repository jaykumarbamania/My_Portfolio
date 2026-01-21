import { MY_PORTFOLIO_NAME } from "../config/socials";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
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
      </nav>
    </header>
  );
};

export default Navbar;
