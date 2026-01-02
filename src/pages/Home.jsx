import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaArrowRight,
} from "react-icons/fa";
// استيراد أيقونات التقنيات المحددة للباك اند والفرونت
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import Image from "../assets/hossam.jpg";

const Home = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // تتابع ظهور العناصر
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // قائمة المهارات الجديدة
  const skills = [
    { name: "React.js", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center py-12 px-4">
      
      {/* 1. Dynamic Background Effect (Grid & Glows) */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image Area */}
          <motion.div variants={itemVariants} className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <img
              src={Image}
              alt="Hossam Sayed"
              onClick={() => setIsImageOpen(true)}
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-900 cursor-pointer shadow-2xl transition-transform transform group-hover:scale-105"
            />
            {/* Status Badge */}
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-300">Available</span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Hossam Sayed
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-lg md:text-xl">
              Full-Stack Developer (MERN)
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Building scalable web applications bridging the gap between{" "}
            <span className="text-gray-100 font-semibold">User Interface</span>{" "}
            and{" "}
            <span className="text-gray-100 font-semibold">Server Logic</span>. 
            Passionate about crafting clean code using the modern JavaScript ecosystem.
          </motion.p>

          {/* Tech Stack Chips (New Feature) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Buttons / CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="cvs/Hossam_Sayed_Saber_CV.pdf"
              download
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
            >
              <FaFileDownload /> Download CV
            </a>
            
            <a
              href="#projects"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 group"
            >
              View Projects{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-12 flex gap-6">
            {[
              { icon: FaGithub, href: "https://github.com/hossam6854" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/hossam-sayed-6b90a9243" },
              { icon: FaEnvelope, href: "mailto:hosamsayedee@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors transform hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
             <button
                onClick={() => setIsImageOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-xl"
              >
                Close
              </button>
            <img
              src={Image}
              alt="Hossam Full Size"
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl border border-gray-700"
            />
           
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;