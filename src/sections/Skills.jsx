const skills = {
  "Languages": ["Java", "JavaScript", "SQL"],
  "Backend": ["Spring Boot", "REST APIs", "Microservices", "JPA / Hibernate"],
  "Frontend": ["React", "HTML", "CSS", "Tailwind CSS"],
  "Cloud & DevOps": ["AWS (EC2, S3, IAM)", "Docker", "CI/CD"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "Tools & Practices": ["Git", "Agile", "Clean Code"]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          Skills
        </h3>
        <span className="h-[2px] w-10 bg-gray-300"></span>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
                key={category}
                className="
                    bg-white border border-gray-200 rounded-xl p-6
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                "
                >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h4>

              <ul className="flex flex-wrap gap-2 text-sm">
                {items.map((skill) => (
                    <li
                    key={skill}
                    className="
                        bg-gray-100 text-gray-700
                        px-3 py-1 rounded-full
                        transition hover:bg-gray-200
                    "
                    >
                    {skill}
                    </li>
                ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
