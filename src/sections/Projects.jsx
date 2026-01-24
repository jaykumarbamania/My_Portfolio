import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Car Rental Web Application",
    description:
      "Full-stack web application enabling users to search, book, and manage car rentals with admin controls.",
    tech: "Java, Spring Boot, React, MySQL, AWS",
    link: ""
  },
  {
    title: "Currency Exchange Microservices",
    description:
      "Microservices-based system for real-time currency conversion using event-driven architecture.",
    tech: "Spring Boot, Kafka, Docker, MySQL",
    link: ""
  },
  {
    title: "MERN Stack Application",
    description:
      "Web application with user authentication, CRUD operations, and responsive UI.",
    tech: "MongoDB, Express, React, Node.js",
    link: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
