import image1 from "../assets/image/inpro.png";
import image2 from "../assets/image/project1.png";
import image3 from "../assets/image/Budget.png";

export default function Project() {
  const projects = [
    {
      title: "Inprocode",
      image: image1,
      description: "This project is about the weeekly budget.",
      link: "https://inprocode-kkce.vercel.app/",
    },
   
    {
      title: "Budget Calculator",
      image: image3,
      description: "Budget calculation of different services.",
      link: "https://vercel.com/sainisus-projects/sprint-6-budgets",
    },

    {
      title: "Movie Mood",
      image: image2,
      description: "How's your mood today.",
      link: "http://movie-mood-omega.vercel.app/",
    },

  ];

  return (
    <section className="my-12 px-4">
      <h2 className="text-5xl font-bold text-center mb-8 font-serif">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="text-center space-y-5">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold font-serif">{project.title}</h3>
            <p className="text-lg text-black-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Click Here
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
