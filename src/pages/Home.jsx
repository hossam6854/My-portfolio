import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "../assets/hossam.jpg";
import { useState } from "react";

const Home = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <img
              src={Image}
              alt="Hossam Sayed"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl cursor-pointer "
              loading="lazy"
              onClick={() => setIsImageOpen(true)}
            />
            <div className="absolute -inset-2 rounded-full border-2 border-blue-300 opacity-75 animate-pulse pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"
        >
          Hossam Sayed
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center mb-6"
        >
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-medium text-blue-100 mb-6"
        >
          Front-end Developer & UI Enthusiast
        </motion.p>

        {/* Skills Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <div className="flex flex-col items-center">
            <FaCode className="text-3xl text-blue-400 mb-2" />
            <span className="text-sm text-blue-200">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaServer className="text-3xl text-cyan-400 mb-2" />
            <span className="text-sm text-cyan-200">APIs</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPalette className="text-3xl text-indigo-400 mb-2" />
            <span className="text-sm text-indigo-200">UI/UX</span>
          </div>
        </motion.div>

        {/* Short Welcome Message */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          I specialize in crafting{" "}
          <span className="text-blue-300 font-medium">high-performance</span>{" "}
          web applications with{" "}
          <span className="text-cyan-300 font-medium">clean code</span> and{" "}
          <span className="text-indigo-300 font-medium">
            intuitive interfaces
          </span>
          . Passionate about modern JavaScript ecosystems and creating seamless
          user experiences.
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6 mb-10"
        >
          <a
            href="https://github.com/hossam6854"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hossam-sayed-6b90a9243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:hosamsayedee@gmail.com"
            className="text-3xl text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="cvs/Hossam_Sayed_Saber_CV.pdf"
            download
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-blue-400 text-blue-300 rounded-lg hover:bg-blue-900/30 transition-all duration-300 font-medium flex items-center justify-center"
          >
            View Projects
          </a>
        </motion.div>
        {isImageOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageOpen(false)}
          >
            <motion.img
              src={Image}
              alt="Enlarged Hossam"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[300px] h-[400px] object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Home;
