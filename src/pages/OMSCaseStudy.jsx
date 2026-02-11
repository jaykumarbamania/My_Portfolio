import Section from "../components/Section";
import CaseStudyNav from "../sections/CaseStudyNav";
import { omsCaseStudy } from "../data/omsCaseStudy";
import { Link } from "react-router-dom";

// const OMSCaseStudy = () => {
//   return (
//     <section className="py-24 bg-white">
      

//       <div className="max-w-4xl mx-auto px-4">
//         <Link
//           to="/"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
//         >
//           ← Back to portfolio
//         </Link>
                      
//          <CaseStudyNav sections={omsCaseStudy.sections} />
      
 

//          {/* Main Content */}
//         <div className="flex-1 max-w-4xl">
//         {/* Title */}
//         {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Building a Production-Grade Order Management System
//         </h1>
//         <p className="text-gray-600 mb-12">
//           A real-world, event-driven Order Management System designed and
//           implemented with reliability, scalability, and operational safety in mind.
//         </p> */}

//         <h1 className="text-4xl font-bold mb-4">
//             {omsCaseStudy.title}
//           </h1>
//           <p className="text-gray-600 mb-12">
//             {omsCaseStudy.subtitle}
//           </p>

//           {omsCaseStudy.sections.map((section) => (
//             <Section key={section.id} id={section.id} title={section.title}>
//               {section.content &&
//                 section.content.map((p, i) => <p key={i}>{p}</p>)}

//               {section.list && (
//                 <ul>
//                   {section.list.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               )}

//               {section.diagram && (
//                 <div className="my-10 border rounded-xl p-6 bg-gray-50">
//                   <img
//                     src={section.diagram}
//                     alt={`${section.title} diagram`}
//                     className="w-full rounded-lg"
//                   />
//                   <ul className="mt-4 space-y-2 text-gray-700">
//                     {section.bullets.map((b, i) => (
//                       <li key={i}>• {b}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </Section>
//           ))}

//       </div>
      
//       </div>
//     </section>
//   );
// };

const OMSCaseStudy = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-20 flex gap-12">

        {/* Sidebar */}
        <CaseStudyNav sections={omsCaseStudy.sections} />

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block mb-8 text-sm text-gray-600 hover:text-black transition"
          >
            ← Back to portfolio
          </Link>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {omsCaseStudy.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              {omsCaseStudy.subtitle}
            </p>


          {omsCaseStudy.sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              {section.content &&
                section.content.map((p, i) => <p key={i}>{p}</p>)}

              {section.list && (
                <ul className="space-y-2 mt-4">
                  {section.list.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              )}

              {section.diagram && (
                <div className="my-10 rounded-2xl border border-gray-300 bg-gray-100 p-6 shadow-sm hover:shadow-lg transition">
                  <img
                    src={section.diagram}
                    alt={`${section.title} diagram`}
                    className="w-full rounded-lg transition hover:scale-[1.01]"
                  />
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Figure 1 — High-level system architecture of the OMS.
                  </p>
                </div>
                
              )}
              <div className="h-px bg-gray-200 my-16" />
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OMSCaseStudy;