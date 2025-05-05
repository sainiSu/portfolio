export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-sky-40 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold font-serif text-slate-800 mb-6">Skill Summary</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "TypeScript",
            "Figma",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        <ul className="text-lg text-slate-700 space-y-4 font-serif">
          <li>&#9733; Front-end web developer specialized in React.js and modern UI frameworks.</li>
          <li>&#9733; Developed projects using APIs and Firebase for real-time functionality.</li>
          <li>&#9733; Focused on writing clean, maintainable code with responsive design principles.</li>
        </ul>
      </div>
    </section>
  );
}