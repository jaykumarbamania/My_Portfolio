const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="border rounded-lg p-6 bg-white hover:shadow-md transition">
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
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
