import Section from "../components/Section";

const OMSCaseStudy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Building a Production-Grade Order Management System
        </h1>
        <p className="text-gray-600 mb-12">
          A real-world, event-driven Order Management System designed and
          implemented with reliability, scalability, and operational safety in mind.
        </p>

        {/* Context */}
        <Section title="Context & Problem">
          <p>
            The goal was to design and build an Order Management System (OMS)
            capable of handling order creation, payment processing, inventory
            reservation, and fulfillment in a distributed environment.
          </p>
          <p>
            The system needed to be resilient to failures, support retries
            safely, and avoid data inconsistencies common in microservices-based
            architectures.
          </p>
        </Section>

        {/* Requirements */}
        <Section title="Key Requirements">
          <ul>
            <li>Reliable order lifecycle management across multiple services</li>
            <li>Safe handling of retries and duplicate requests</li>
            <li>Eventual consistency without distributed transactions</li>
            <li>Production-ready deployment and operability</li>
          </ul>
        </Section>

        {/* Architecture */}
        <Section title="High-Level Architecture">
          <p>
            The OMS follows an event-driven architecture where each service owns
            its data and communicates via events.
          </p>
          <ul>
            <li>API Gateway for request routing</li>
            <li>Order Service as the system of record</li>
            <li>Kafka for asynchronous event propagation</li>
            <li>Inventory, Payment, and Fulfillment as independent services</li>
          </ul>
        </Section>

        {/* Design Decisions */}
        <Section title="Key Design Decisions">
          <ul>
            <li>
              Adopted an event-driven workflow to reduce tight coupling between services
            </li>
            <li>
              Avoided distributed transactions in favor of eventual consistency
            </li>
            <li>
              Designed APIs to be idempotent to safely handle retries
            </li>
          </ul>
        </Section>

        {/* Consistency */}
        <Section title="Data Consistency & Reliability">
          <p>
            Ensuring reliable event delivery and data consistency was a primary
            challenge.
          </p>
          <ul>
            <li>
              Implemented the <strong>Outbox Pattern</strong> to guarantee that
              domain events are published only after successful database commits
            </li>
            <li>
              Enforced <strong>idempotency</strong> at the API layer using
              idempotency keys to prevent duplicate order creation
            </li>
            <li>
              Used <strong>Flyway</strong> for controlled and versioned database
              schema migrations
            </li>
          </ul>
        </Section>

        {/* Deployment */}
        <Section title="Deployment & Operations">
          <ul>
            <li>Containerized services using Docker</li>
            <li>Deployed microservices on AWS EC2 instances</li>
            <li>Enabled repeatable and predictable deployments</li>
            <li>Prepared the system for future scaling and observability</li>
          </ul>
        </Section>

        {/* Tradeoffs */}
        <Section title="Tradeoffs & Lessons Learned">
          <ul>
            <li>
              Event-driven systems improve resilience but increase debugging complexity
            </li>
            <li>
              Idempotency simplifies retries but requires careful API and data design
            </li>
            <li>
              Operational concerns must be considered early, not after feature delivery
            </li>
          </ul>
        </Section>

        {/* Next */}
        <Section title="What’s Next">
          <ul>
            <li>Add observability (metrics, tracing, alerts)</li>
            <li>Introduce autoscaling and load testing</li>
            <li>Expand saga workflows and failure simulations</li>
          </ul>
        </Section>

      
      </div>
    </section>
  );
};

export default OMSCaseStudy;
