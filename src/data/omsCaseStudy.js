export const omsCaseStudy = {
  title: "Production-Grade Order Management System",
  subtitle:
    "A real-world, event-driven OMS designed with reliability, scalability, and operational safety in mind.",

  sections: [
    {
      id: "context",
      title: "Context & Problem",
      content: [
        "Design and build an Order Management System capable of handling order creation, payment processing, inventory reservation, and fulfillment in a distributed environment.",
        "The system must be resilient to failures, support safe retries, and prevent data inconsistencies common in microservices."
      ]
    },
    {
      id: "requirements",
      title: "Key Requirements",
      list: [
        "Reliable order lifecycle management across services",
        "Safe handling of retries and duplicate requests",
        "Eventual consistency without distributed transactions",
        "Production-ready deployment and operability"
      ]
    },
    {
      id: "architecture",
      title: "High-Level Architecture",
      description:
        "The OMS follows an event-driven architecture where services communicate asynchronously.",
      diagram: "/diagrams/oms-architecture.png",
      bullets: [
        "Order Service owns order state and publishes events via the Outbox pattern",
        "Asynchronous events decouple downstream services",
        "Eventual consistency with strong correctness guarantees"
      ]
    },
    {
      id: "decisions",
      title: "Key Design Decisions",
      list: [
        "Event-driven workflow to reduce service coupling",
        "Avoided distributed transactions",
        "Idempotent APIs for safe retries"
      ]
    },
    {
      id: "consistency",
      title: "Data Consistency & Reliability",
      list: [
        "Outbox Pattern ensures events are published after DB commit",
        "Idempotency keys prevent duplicate order creation",
        "Flyway manages versioned schema migrations"
      ]
    },
    {
      id: "deployment",
      title: "Deployment & Operations",
      list: [
        "Dockerized services",
        "Deployed on AWS EC2",
        "Prepared for scaling and observability"
      ]
    },
    {
      id: "lessons",
      title: "Tradeoffs & Lessons Learned",
      list: [
        "Event-driven systems improve resilience but increase debugging complexity",
        "Idempotency simplifies retries but complicates API design",
        "Operational concerns must be addressed early"
      ]
    }
  ]
};
