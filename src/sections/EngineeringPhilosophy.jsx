const philosophyPoints = [
  "Prefer simple, maintainable solutions over premature optimization",
  "Design systems with failure in mind (timeouts, retries, graceful degradation)",
  "Focus on API clarity — easy to use, hard to misuse",
  "Balance performance, scalability, and operational complexity",
  "Optimize based on real bottlenecks, not assumptions",
  "Believe strong observability is as important as business logic",
];

const EngineeringPhilosophy = () => {
  return (
    <section
        id="philosophy"
        className="pb-14 pt-20 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                Engineering Philosophy
            </h3>
            <p className="mt-2 text-gray-600 max-w-2xl">
                Principles that guide how I design, build, and evolve software systems.
            </p>
            <div className="mt-4 h-1 w-24 bg-black rounded-full" />
            </div>
        

        {/* Content */}
        
        <div className="max-w-4xl bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">

          <ul className="space-y-4">
            {philosophyPoints.map((point, idx) => (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                    <div className="relative">
        <div className="absolute -left-6 top-0 h-full w-1 bg-black rounded-full" />
        {/* card content */}
        <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                    >
                        <span className="mt-2 h-2 w-2 rounded-full bg-black flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                    </li>
        </div>
                    
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 max-w-6xl mx-auto border-t-2 border-gray-800" />
    </section>
  );
};

export default EngineeringPhilosophy;
