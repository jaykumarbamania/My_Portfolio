const experiences = [
  {
    company: "Barclays",
    location: "Pune, India",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "Nov 2025 – Present",
        points: [
          "Working on enterprise-scale distributed systems and platform modernization.",
          "Contributing to backend system design and technical decision-making.",
        ],
        currentRole: true,
      },
      {
        title: "BA3 Developer",
        duration: "Mar 2022 – Nov 2025",
        points: [
          "Designed and built high-performance backend services using Java and Spring Boot.",
          "Worked on microservices-based enterprise applications across multiple environments.",
          "Performed OpenShift and Kubernetes upgrades to improve stability and performance.",
          "Integrated security and compliance tools to strengthen application security.",
          "Delivered partner commitments ahead of schedule, contributing to business growth.",
        ],
        currentRole: false,
      },
    ],
  },
  {
    company: "NeoSoft Technologies",
    location: "Ahmedabad, India",
    roles: [
      {
        title: "Junior Software Engineer",
        duration: "Aug 2021 – Aug 2022",
        points: [
          "Developed Java-based enterprise applications with secure authentication.",
          "Optimized backend performance using Java Streams and efficient database queries.",
          "Supported QA, integration testing, and production issue resolution.",
        ],
        currentRole: false,
      },
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

        {/* Timeline */}
        <div className="relative border-l border-gray-300 ml-4">
          {experiences.map((company, companyIndex) => (
            <div key={companyIndex} className="mb-16">
              {/* Company Header */}
              <div className="relative pl-10 mb-10">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 bg-black rounded-full"></span>
                <h4 className="text-xl font-semibold text-gray-900">
                  {company.company}
                </h4>
                <p className="text-sm text-gray-500">
                  {company.location}
                </p>
              </div>

              {/* Roles */}
              <div className="space-y-8">
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative pl-10">
                    {/* Role Dot */}
                    <span
                      className={`absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full
                        ${
                          role.currentRole
                            ? "bg-black scale-125"
                            : "bg-gray-400"
                        }
                      `}
                    ></span>

                    {/* Role Card */}
                    <div
                      className={`max-w-5xl border rounded-lg p-6 transition hover:shadow-md
                        ${
                          role.currentRole
                            ? "bg-black text-white"
                            : "bg-white text-gray-900"
                        }
                      `}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                        <h5
                          className={`text-lg font-semibold ${
                            role.currentRole
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {role.title}
                        </h5>
                        <span
                          className={`text-sm ${
                            role.currentRole
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                        >
                          {role.duration}
                        </span>
                      </div>

                      <ul
                        className={`list-disc list-inside space-y-2 ${
                          role.currentRole
                            ? "text-gray-200"
                            : "text-gray-700"
                        }`}
                      >
                        {role.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
