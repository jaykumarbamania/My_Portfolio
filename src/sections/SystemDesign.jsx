const systemDesigns = [
  {
    title: "Order Management System",
    description:
      "Designed a scalable OMS handling order creation, payments, inventory reservation, and fulfillment with high reliability.",
    highlights: [
      "Event-driven architecture using Kafka",
      "Idempotent APIs and saga-based workflows",
      "Horizontal scaling and fault tolerance",
    ],
    tech: "Spring Boot, Kafka, PostgreSQL, Redis, AWS",
  },
  {
    title: "Scalable URL Shortener",
    description:
      "Designed a low-latency URL shortening service with high read throughput and strong consistency guarantees.",
    highlights: [
      "Base62 ID generation",
      "Read-heavy optimization using Redis",
      "Rate limiting and abuse prevention",
    ],
    tech: "Java, Redis, MySQL, Load Balancers",
  },
  {
    title: "Notification System",
    description:
      "Designed a multi-channel notification system supporting email, SMS, and push notifications at scale.",
    highlights: [
      "Async processing using message queues",
      "Retry, DLQ, and exponential backoff",
      "Provider failover and observability",
    ],
    tech: "Spring Boot, Kafka, AWS SNS/SQS",
  },
];

const SystemDesign = () => {
  return (
    <section id="system-design" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          System Design
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Selected system designs demonstrating how I approach scalability,
          reliability, and tradeoffs in real-world distributed systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemDesigns.map((design) => (
            <div
              key={design.title}
              className="group bg-gray-50 border rounded-xl p-6
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {design.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {design.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                {design.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 bg-black rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="text-xs text-gray-500 font-medium">
                Tech: {design.tech}
              </div>

              <div className="mt-4 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition">
                View design →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
