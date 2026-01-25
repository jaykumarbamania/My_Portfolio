const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div
      className="
        group relative bg-white border border-gray-200 rounded-xl p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300
      "
    >
      {/* Accent bar */}
      <span
        className="
          absolute left-0 top-0 h-full w-1 bg-gray-900
          scale-y-0 group-hover:scale-y-100
          transition-transform origin-top duration-300
        "
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-xs font-medium text-gray-500">
        {tech}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          className="
            inline-block mt-4 text-sm font-medium
            text-gray-900 underline-offset-4
            hover:underline
          "
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

