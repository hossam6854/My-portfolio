import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "../assets/hossam.jpg";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 px-6">
      {/* Profile Image */}
      <img
        src={Image}
        alt="Hossam Sayed"
        className="w-44 h-44 rounded-full shadow-lg border-4 border-blue-600"
      />

      {/* Name & Title */}
      <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
        Hossam Sayed
      </h1>
      <p className="mt-2 text-lg text-gray-700 font-medium">
  Front-end developer with hands-on experience in crafting responsive, user-centric web applications using
  React, JavaScript, and TypeScript.
</p>

{/* Short Welcome Message */}
<p className="mt-4 text-gray-600 max-w-lg">
  Proficient in delivering scalable, high-performance solutions through clean code and innovative UI designs. Adept at integrating RESTful APIs and collaborating with teams to build seamless user experiences. Actively seeking to expand expertise in cutting-edge front-end technologies and UX best practices.
</p>


      {/* Social Media Links */}
      <div className="flex mt-5 space-x-6">
        <a
          href="https://github.com/hossam6854"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-800 hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hossam-sayed-6b90a9243"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-blue-700 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hosamsayedee@gmail.com"
          className="text-3xl text-gray-700 hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="mt-6 flex space-x-4">
        <a
          href="/cv/Hossam_Sayed_Saber_CV.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;
