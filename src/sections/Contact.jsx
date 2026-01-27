import { SOCIAL_LINKS, MY_RESUME_NAME } from "../config/socials";

const Contact = () => {
  return (
    <section id="contact" className="py-14 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Contact
        </h3>

        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          I’m open to full-time roles, freelance work, and technical discussions.
          Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href={`/${MY_RESUME_NAME}`}
            download
            className="border border-gray-300 px-5 py-2 rounded
                        hover:border-gray-500 transition"
            >
            Download Resume
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="bg-black text-white px-6 py-3 rounded transition
           hover:bg-gray-800 hover:scale-105"
          >
            Email Me
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-900 px-6 py-3 rounded transition
           hover:bg-gray-100 hover:scale-105"
          >
            LinkedIn
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-900 px-6 py-3 rounded transition
           hover:bg-gray-100 hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
