import githubIcon from "../assets/image/github.png";
import linkedinIcon from "../assets/image/linked.png";
import emailIcon from "../assets/image/mail.png";
import phoneIcon from "../assets/image/phone-call.png";

export default function AboutMe() {
  return (
    <section className="flex-grid items-center justify-center text-center my-8 px-4">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/su.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg border-4 border-white"
        />

        <h1 className="text-5xl font-bold mb-2">Suman Saini</h1>
        <h3 className="text-3xl font-mono py-4 mb-3">
          Front-end Web Developer
        </h3>

        <p className="text-black-600 leading-relaxed font-serif max-w-3xl mx-auto py-4">
          I am a passionate front-end web developer specializing in React.js. I
          enjoy building responsive and dynamic web applications. My expertise
          lies in JavaScript, Tailwind CSS, and creating engaging user
          experiences.
        </p>

        
      </div>

      <div className="flex justify-center space-x-10 mt-6">
        <a
          href="https://github.com/sainiSu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
          <span className="text-sm">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/suman-saini-6726a8105/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
          <span className="text-sm">LinkedIn</span>
        </a>

        <a
          href="mailto:gunisu3@gmail.com"
          className="flex flex-col items-center space-y-2"
        >
          <img
            src={emailIcon}
            alt="Email"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
          <span className="text-sm">Email</span>
        </a>

        <div className="flex flex-col items-center space-y-2">
          <img
            src={phoneIcon}
            alt="Phone"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
          <span className="text-sm">631963686</span>
        </div>
      </div>
    </section>
  );
}
