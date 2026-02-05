const Section = ({ title, children }) => {
   return (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
)
};

export default Section;