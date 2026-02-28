const CaseStudyNav = ({ sections }) => {
  return (
    <aside className="hidden lg:block w-64 sticky top-28 self-start">
      <div className="text-xs font-semibold text-gray-400 mb-4 tracking-widest">
        ON THIS PAGE
      </div>

      <ul className="space-y-4 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="block text-gray-500 hover:text-black transition-colors duration-200 scroll-mt-28"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};



export default CaseStudyNav;
