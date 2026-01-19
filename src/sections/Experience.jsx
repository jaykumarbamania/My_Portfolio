const experiences = [
  {
    company: "Barclays Global Service",
    role: "Software Engineer",
    duration: "Mar 2022 – Present",
    highlights: [
      "Designed and developed scalable backend and full-stack features using Java, Spring Boot, and React.",
      "Built and maintained REST APIs and microservices supporting enterprise-scale banking applications.",
      "Worked on cloud deployments using AWS (EC2, S3, IAM) and containerized services using Docker.",
      "Collaborated with cross-functional teams in Agile environment to deliver high-quality releases.",
    ],
  },
  {
    company: "NeoSoft Technologies",
    role: "Software Engineer",
    duration: "Aug 2021 – Aug 2022",
    highlights: [
      "Developed Java-based enterprise applications with secure authentication and transaction processing.",
      "Optimized backend performance using Java Streams and efficient database queries.",
      "Supported QA, integration testing, and production issue resolution.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">
          Experience
        </h3>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white border rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h4>
                  <p className="text-gray-700">{exp.company}</p>
                </div>

                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
