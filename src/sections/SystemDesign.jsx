import { Link } from "react-router-dom";

const systemDesigns = [
  {
    title: "Order Management System",
    description:
      "Design of a scalable order management system handling order creation, payment processing, inventory reservation, and fulfillment.",
    highlights: [
      "Event-driven architecture for order lifecycle management",
      "Idempotent APIs and saga-based workflows",
      "Horizontal scaling and fault tolerance",
    ],
    tech: "Spring Boot, Kafka, PostgreSQL, Redis, AWS",
  },
  {
    title: "Currency Exchange Platform",
    description:
      "Scalable system for real-time currency exchange rates with low-latency reads and reliable updates.",
    highlights: [
      "Read-heavy optimization using caching",
      "Asynchronous rate updates via messaging",
      "Consistency vs availability tradeoffs",
    ],
    tech: "Spring Boot, Kafka, Redis, MySQL",
  },
  {
    title: "Notification System",
    description:
      "Multi-channel notification system supporting email, SMS, and push notifications at scale.",
    highlights: [
      "Asynchronous processing with message queues",
      "Retry, dead-letter queues, and backoff strategies",
      "Provider failover and observability",
    ],
    tech: "Spring Boot, Kafka, AWS SNS/SQS",
  },
];

const SystemDesign = () => {
  return (
    <section
      id="system-design"
      className="py-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            System Design
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Selected system designs that demonstrate how I approach scalability,
            reliability, and tradeoffs in real-world distributed systems.
          </p>
          <div className="mt-4 h-1 w-14 bg-black rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemDesigns.map((design) => (
            <div
              key={design.title}
              className="
                group bg-gray-50 border border-gray-200 rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:border-gray-400
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {design.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {design.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                {design.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 bg-black rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="text-xs text-gray-500 font-medium">
                Tech: {design.tech}
              </div>

              <div className="mt-4 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition">
                <div className="mt-4 text-sm font-medium text-black">
                    <Link
                      to="/oms-case-study"
                      className="inline-block mt-4 text-sm font-medium text-black hover:underline"
                    >
                      View case study →
                    </Link>

                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
