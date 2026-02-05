import { MY_RESUME_NAME } from "../config/socials";
const Hero = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 pt-24 pb-16 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Software Development Engineer
      </h2>

      <p className="mt-6 text-lg text-gray-700 max-w-2xl">
        Full-stack engineer with 5+ years of experience building scalable
        applications using Java, Spring Boot, React, and AWS.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-xl
              border border-gray-300
              bg-white text-gray-900 font-medium
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg
              hover:bg-gray-50
            "
        >
          View Projects
        </a>

        <a
          href={`/${MY_RESUME_NAME}`}
          download
          className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-xl
              bg-black text-white font-medium
              shadow-md
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-black/30
            "
          >
          Download Resume
          </a>
      </div>
    </section>
    
  );
};

export default Hero;
