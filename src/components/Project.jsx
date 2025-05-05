import image1 from "../assets/image/inpro.png";
import image2 from "../assets/image/music.png";
import image3 from "../assets/image/Budget.png";

export default function Project() {
  const projects = [
    {
      title: "Inprocode",
      image: image1,
      description: "A simple weekly budget planner made with React.",
      link: "https://inprocode-kkce.vercel.app/",
    },
    {
      title: "Budget Calculator",
      image: image3,
      description: "Tool to calculate and manage budgets efficiently.",
      link: "https://sprint-6-budgets.vercel.app/",
    },
    {
      title: "Music School Website",
      image: image2,
      description: "A beautiful UI project for a fictional music school.",
      link: "https://music-school-website-five.vercel.app/",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-12 px-4">
      <h2 className="text-5xl font-bold text-center mb-12 font-serif text-slate-800">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-56 overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold font-serif text-slate-700 mb-2">{project.title}</h3>
            <p className="text-black font-light text-md mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
