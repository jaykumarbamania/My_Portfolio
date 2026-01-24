const Hero = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 py-24 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Software Development Engineer
      </h2>

      <p className="mt-6 text-lg text-gray-700 max-w-2xl">
        Full-stack engineer with 5+ years of experience building scalable
        applications using Java, Spring Boot, React, and AWS.
      </p>

      {/* <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-gray-900 px-6 py-3 rounded hover:bg-gray-100"
        >
          Download Resume
        </a>
      </div> */}

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded transition
                    hover:bg-gray-800 hover:-translate-y-0.5"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-gray-900 px-6 py-3 rounded transition
                    hover:bg-gray-100 hover:-translate-y-0.5"
        >
          Download Resume
        </a>
      </div>

    </section>
  );
};

export default Hero;
