const CaseStudyNav = ({ sections }) => {
  return (
    <aside className="hidden lg:block w-64 sticky top-24 self-start">
      <ul className="space-y-3 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-gray-600 hover:text-black transition"
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
