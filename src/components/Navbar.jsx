import { SOCIAL_LINKS } from "../config/socials";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">
          Jaykumar Bamania
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Skills</li>
          <li className="hover:text-black cursor-pointer">Projects</li>
          <li className="hover:text-black cursor-pointer">Experience</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
