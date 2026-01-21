import { SOCIAL_LINKS, MY_PORTFOLIO_NAME } from "../config/socials";

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {MY_PORTFOLIO_NAME} ·
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
