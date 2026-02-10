import Section from "../components/Section";
import CaseStudyNav from "../sections/CaseStudyNav";
import { omsCaseStudy } from "../data/omsCaseStudy";

const OMSCaseStudy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">

         <CaseStudyNav sections={omsCaseStudy.sections} />

         {/* Main Content */}
        <div className="flex-1 max-w-4xl">
        {/* Title */}
        {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Building a Production-Grade Order Management System
        </h1>
        <p className="text-gray-600 mb-12">
          A real-world, event-driven Order Management System designed and
          implemented with reliability, scalability, and operational safety in mind.
        </p> */}

        <h1 className="text-4xl font-bold mb-4">
            {omsCaseStudy.title}
          </h1>
          <p className="text-gray-600 mb-12">
            {omsCaseStudy.subtitle}
          </p>

          {omsCaseStudy.sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              {section.content &&
                section.content.map((p, i) => <p key={i}>{p}</p>)}

              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.diagram && (
                <div className="my-10 border rounded-xl p-6 bg-gray-50">
                  <img
                    src={section.diagram}
                    alt={`${section.title} diagram`}
                    className="w-full rounded-lg"
                  />
                  <ul className="mt-4 space-y-2 text-gray-700">
                    {section.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
          ))}

      </div>
      
      </div>
    </section>
  );
};

export default OMSCaseStudy;



        // {/* Context */}
        // <Section title="Context & Problem">
        //   <p>
        //     The goal was to design and build an Order Management System (OMS)
        //     capable of handling order creation, payment processing, inventory
        //     reservation, and fulfillment in a distributed environment.
        //   </p>
        //   <p>
        //     The system needed to be resilient to failures, support retries
        //     safely, and avoid data inconsistencies common in microservices-based
        //     architectures.
        //   </p>
        // </Section>

        // {/* Requirements */}
        // <Section title="Key Requirements">
        //   <ul>
        //     <li>Reliable order lifecycle management across multiple services</li>
        //     <li>Safe handling of retries and duplicate requests</li>
        //     <li>Eventual consistency without distributed transactions</li>
        //     <li>Production-ready deployment and operability</li>
        //   </ul>
        // </Section>

        // {/* Architecture */}
        // <Section title="High-Level Architecture">
        //   <p>
        //     The OMS follows an event-driven architecture where services communicate
        //     asynchronously to ensure scalability and fault tolerance.
        //   </p>

        //   <div className="my-10 border rounded-xl p-6 bg-gray-50">
        //     <img
        //       // src="/diagrams/oms-architecture.png"
        //       src="/diagrams/oms-architecture.png"
        //       alt="Order Management System Architecture Diagram"
        //       className="w-full rounded-lg"
        //     />
        //     <p className="mt-3 text-sm text-gray-500 text-center">
        //       Order Management System architecture showing idempotency handling,
        //       Outbox pattern, and event-driven communication.
        //     </p>

        //     <ul className="mt-4 space-y-2 text-gray-700">
        //       <li>• Order Service owns the order state and publishes events via the Outbox pattern</li>
        //       <li>• Kafka ensures reliable, asynchronous communication between services</li>
        //       <li>• Inventory and Payment services react to events and emit compensating actions on failure</li>
        //       <li>• The system favors eventual consistency with strong correctness guarantees</li>
        //     </ul>
        //   </div>
        // </Section>

        // {/* Design Decisions */}
        // <Section title="Key Design Decisions">
        //   <ul>
        //     <li>
        //       Adopted an event-driven workflow to reduce tight coupling between services
        //     </li>
        //     <li>
        //       Avoided distributed transactions in favor of eventual consistency
        //     </li>
        //     <li>
        //       Designed APIs to be idempotent to safely handle retries
        //     </li>
        //   </ul>
        // </Section>

        // {/* Consistency */}
        // <Section title="Data Consistency & Reliability">
        //   <p>
        //     Ensuring reliable event delivery and data consistency was a primary
        //     challenge.
        //   </p>
        //   <ul>
        //     <li>
        //       Implemented the <strong>Outbox Pattern</strong> to guarantee that
        //       domain events are published only after successful database commits
        //     </li>
        //     <li>
        //       Enforced <strong>idempotency</strong> at the API layer using
        //       idempotency keys to prevent duplicate order creation
        //     </li>
        //     <li>
        //       Used <strong>Flyway</strong> for controlled and versioned database
        //       schema migrations
        //     </li>
        //   </ul>
        // </Section>

        // {/* Deployment */}
        // <Section title="Deployment & Operations">
        //   <ul>
        //     <li>Containerized services using Docker</li>
        //     <li>Deployed microservices on AWS EC2 instances</li>
        //     <li>Enabled repeatable and predictable deployments</li>
        //     <li>Prepared the system for future scaling and observability</li>
        //   </ul>
        // </Section>

        // {/* Tradeoffs */}
        // <Section title="Tradeoffs & Lessons Learned">
        //   <ul>
        //     <li>
        //       Event-driven systems improve resilience but increase debugging complexity
        //     </li>
        //     <li>
        //       Idempotency simplifies retries but requires careful API and data design
        //     </li>
        //     <li>
        //       Operational concerns must be considered early, not after feature delivery
        //     </li>
        //   </ul>
        // </Section>

        // {/* Next */}
        // <Section title="What’s Next">
        //   <ul>
        //     <li>Add observability (metrics, tracing, alerts)</li>
        //     <li>Introduce autoscaling and load testing</li>
        //     <li>Expand saga workflows and failure simulations</li>
        //   </ul>
        // </Section>