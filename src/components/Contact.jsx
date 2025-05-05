import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 font-serif text-slate-800">Contact</h2>
      
      <div className="max-w-md mx-auto text-center space-y-6 text-slate-700 font-sans">
        
        <div className="flex items-center justify-center space-x-3">
          <FaEnvelope className="text-blue-500 text-xl" />
          <a href="mailto:gunisu3@gmail.com" className="hover:underline text-lg font-semibold">
            gunisu3@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <FaPhoneAlt className="text-green-600 text-lg" />
          <span className="text-lg font-semibold">631963686</span>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <FaLinkedin className="text-blue-700 text-xl" />
          <a
            href="https://www.linkedin.com/in/suman-saini-6726a8105/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg font-semibold"
          >
            LinkedIn Profile
          </a>
        </div>

      </div>
    </section>
  );
}