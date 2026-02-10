const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-20">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default Section;
