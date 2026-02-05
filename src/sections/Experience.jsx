import { experiences } from "../config/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="pb-14 pt-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h3 className="text-3xl font-bold text-gray-900">
          Experience
        </h3>
        <div className="mt-2 h-1 w-12 bg-black rounded-full mb-14" />

        {/* Timeline */}
        <div className="relative border-l border-gray-300 ml-4">
          {experiences.map((company, companyIndex) => (
            <div key={companyIndex} className="mb-20">
              {/* Company Header */}
              <div className="relative pl-10 mb-10">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 bg-black rounded-full" />
                <h4 className="text-xl font-semibold text-gray-900">
                  {company.company}
                </h4>
                <p className="text-sm text-gray-500">
                  {company.location}
                </p>
              </div>

              {/* Roles */}
              <div className="space-y-10">
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="relative pl-10 group"
                  >
                    {/* Role Dot */}
                    <span
                      className={`absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300
                        ${
                          role.currentRole
                            ? "bg-black scale-125"
                            : "bg-gray-400 group-hover:bg-black group-hover:scale-110"
                        }
                      `}
                    />

                    {/* Role Card */}
                    <div
                      className={`max-w-5xl rounded-xl p-6 transition-all duration-300
                        ${
                          role.currentRole
                            ? "bg-black text-white shadow-xl hover:shadow-2xl hover:scale-[1.01]"
                            : "bg-white border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-gray-400"
                        }
                      `}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
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
                        className={`space-y-2 pl-5 ${
                          role.currentRole
                            ? "text-gray-200"
                            : "text-gray-700"
                        }`}
                      >
                        {role.points.map((point, idx) => (
                          <li   className="relative pl-4"
                                key={idx}>  
                            <span className= {`absolute left-0 top-2 h-1.5 w-1.5 rounded-full ${
                          role.currentRole
                            ? "bg-gray-200"
                            : "bg-gray-900"
                        }`}></span>
                                {point}
                         </li>
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
