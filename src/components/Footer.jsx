import { SOCIAL_LINKS } from "../config/socials";

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jaykumar Bamania ·
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="ml-2 underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
