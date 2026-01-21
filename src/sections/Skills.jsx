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
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">
          Skills
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white border rounded-lg p-6 transition
                    hover:shadow-lg hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h4>

              <ul className="space-y-2 text-gray-700">
                {items.map((skill) => (
                  <li className="inline-block bg-gray-100 px-3 py-1 rounded mr-2 mb-2"
                      key={skill}>• {skill}</li>
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
