
import githubIcon from "../assets/image/github.png";
import linkedinIcon from "../assets/image/linked.png";
import emailIcon from "../assets/image/mail.png";
import phoneIcon from "../assets/image/phone-call.png";
import { FaEye, FaDownload } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-12 px-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/su.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg border-4 border-white"
        />

        <h1 className="text-5xl font-bold text-slate-800 mb-2">Suman Saini</h1>
        <h3 className="text-3xl font-mono py-4 mb-3 text-slate-600">
          Front-end Web Developer
        </h3>

        <p className="text-slate-700 leading-relaxed font-serif max-w-3xl mx-auto py-4">
          I am a passionate front-end web developer specializing in React.js. I
          enjoy building responsive and dynamic web applications. My expertise
          lies in JavaScript, Tailwind CSS, and creating engaging user
          experiences.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="/Suman Frontend Developer..pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-md 
                         flex items-center space-x-2 
                         transition duration-300 ease-in-out transform 
                         hover:bg-blue-700 hover:scale-105 active:bg-blue-800"
            >
              <FaEye className="inline-block mr-2" />
              <span>View Resume</span>
            </button>
          </a>

          <a href="/Suman Frontend Developer..pdf" download>
            <button
              className="bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-md 
                         flex items-center space-x-2 
                         transition duration-300 ease-in-out transform 
                         hover:bg-blue-700 hover:scale-105 active:bg-blue-800"
            >
              <FaDownload className="inline-block mr-2" />
              
              <span>Download Resume</span>
            </button>
          </a>
        </div>
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
            className="w-10 h-10 rounded-full shadow hover:scale-110 transition-transform"
          />
          <span className="text-sm text-slate-700">GitHub</span>
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
            className="w-10 h-10 rounded-full shadow hover:scale-110 transition-transform"
          />
          <span className="text-sm text-slate-700">LinkedIn</span>
        </a>

        <a
          href="mailto:gunisu3@gmail.com"
          className="flex flex-col items-center space-y-2"
        >
          <img
            src={emailIcon}
            alt="Email"
            className="w-10 h-10 rounded-full shadow hover:scale-110 transition-transform"
          />
          <span className="text-sm text-slate-700">Email</span>
        </a>

        <div className="flex flex-col items-center space-y-2">
          <img
            src={phoneIcon}
            alt="Phone"
            className="w-10 h-10 rounded-full shadow hover:scale-110 transition-transform"
          />
          <span className="text-sm text-slate-700">631963686</span>
        </div>
      </div>
    </section>
  );
}