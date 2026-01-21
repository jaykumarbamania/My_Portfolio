const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="border rounded-lg p-6 bg-white transition
                hover:shadow-xl hover:-translate-y-1">
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      <p className="text-gray-700 mb-4">
        {description}
      </p>

      <p className="text-sm text-gray-600 mb-4">
        <strong>Tech:</strong> {tech}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium transition hover:text-blue-800"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
