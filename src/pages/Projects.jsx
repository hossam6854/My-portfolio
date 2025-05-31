import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";

// استيراد الصور
import HabitTrackerImg from "../assets/2.png";
import RamadanWorshipImg from "../assets/3.png";
import CarDealerImg from "../assets/car.png";
import HRBotixImg from "../assets/1.png";
import B7ayemkoImg from "../assets/b7ayemko.png";
import ImproveSkillsImg from "../assets/skills.png";
import EduConnect from "../assets/educonnect.png";
import Products from "../assets/products.png";

const projectsData = [
  {
    id: 1,
    title: "Habit Tracker",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Context API"],
    image: HabitTrackerImg,
    description: "An app to track daily habits, analyze achievements, and motivate users to reach their personal goals.",
    github: "https://github.com/hossam6854/Habit_Tracker_Website",
    demo: "https://hossam6854.github.io/Habit_Tracker_Website/",
    accentColor: "bg-gradient-to-r from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    title: "Ramadan Worship",
    category: "frontend",
    tech: ["React", "CSS Modules", "LocalStorage"],
    image: RamadanWorshipImg,
    description: "A platform to enhance the spiritual experience during Ramadan by tracking daily worship activities such as prayer and Quran reading.",
    github: "https://github.com/hossam6854/Ramadan-Worship-App",
    demo: "https://hossam6854.github.io/Ramadan-Worship-App/",
    accentColor: "bg-gradient-to-r from-purple-500 to-indigo-600"
  },
  {
    id: 3,
    title: "4Matic Motors",
    category: "fullstack",
    tech: ["MERN Stack", "Redux", "JWT Auth"],
    image: CarDealerImg,
    description: "A comprehensive platform for buying and selling cars with an ad and user management system.",
    github: "https://github.com/hossam6854/cars",
    demo: null,
    accentColor: "bg-gradient-to-r from-amber-500 to-red-500"
  },
  {
    id: 4,
    title: "HR Botix",
    category: "fullstack",
    tech: ["AI Integration", "Node.js", "MongoDB"],
    image: HRBotixImg,
    description: "An integrated HR management system using AI to analyze employee data.",
    github: "https://github.com/hossam6854/HR_Botix",
    demo: null,
    accentColor: "bg-gradient-to-r from-green-500 to-teal-600"
  },
  {
    id: 5,
    title: "B7ayemko",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Context API"],
    image: B7ayemkoImg,
    description: "online marketplace for buying and selling livestock and pets, offering delivery, support, and advice for farmers.",
    github: "https://github.com/hossam6854/B7ayemko",
    demo: "https://b7ayemko.vercel.app/",
    accentColor: "bg-gradient-to-r from-yellow-400 to-lime-500"
  },
  {
    id: 6,
    title: "Improve Skills",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Context API"],
    image: ImproveSkillsImg,
    description: "platform that helps users discover their strengths and recommends real courses to grow skills and career potential.",
    github: "https://github.com/hossam6854/skill-explorer",
    demo: "https://skill-explorer.vercel.app/",
    accentColor: "bg-gradient-to-r from-pink-500 to-rose-500"
  },
  {
    id: 7,
    title: "Edu Connect",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Context API"],
    image: EduConnect,
    description: "platform that helps users discover their strengths and recommends real courses to grow skills and career potential.",
    github: "https://github.com/hossam6854/EduConnect",
    demo: "https://edu-connect-kohl.vercel.app/",
    accentColor: "bg-gradient-to-r from-blue-700 to-indigo-700"
  },
  {
    id: 8,
    title: "Products",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Context API"],
    image: Products,
    description: "An e-commerce platform that displays products and their details, allowing users to search, filter, and sort products.",
    github: "https://github.com/hossam6854/products-app",
    demo: "https://products-app-beryl.vercel.app/",
    accentColor: "bg-gradient-to-r from-gray-700 to-gray-900"
  }
];


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            My <span className="text-white">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A curated selection of my projects showcasing my skills and experience in web development
          </p>
        </motion.div>

        {/* فلاتر التصنيف */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["all", "frontend", "fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
              }`}
            >
              {filter === "frontend" && <FiCode className="mr-2" />}
              {filter === "fullstack" && <FiLayers className="mr-2" />}
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* الصورة مع تأثير Hover */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay معلومات المشروع */}
                <div className={`absolute inset-0 ${project.accentColor} bg-opacity-90 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-100 line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-white bg-black bg-opacity-40 px-3 py-1 rounded-full">
                      {project.category === "frontend" ? "Frontend" : "Full Stack"}
                    </span>
                    <button className="text-white hover:text-gray-200 transition cursor-pointer">
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal عرض تفاصيل المشروع */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
            >
              <motion.div 
                className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* زر الإغلاق */}
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-2 cursor-pointer"
                >
                  ✕
                </button>

                {/* محتوى المشروع */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* قسم الصورة */}
                  <div className="h-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                    />
                  </div>

                  {/* قسم التفاصيل */}
                  <div className="p-8">
                    <div className={`h-2 w-24 rounded-full mb-6 ${selectedProject.accentColor}`}></div>
                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-3">Category:</span>
                        <span className="text-white font-medium">
                          {selectedProject.category === "frontend" ? (
                            <span className="flex items-center">
                              <FaReact className="text-blue-400 mr-2" /> Frontend Development
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <FaNodeJs className="text-green-500 mr-2" /> Full Stack Development
                            </span>
                          )}
                        </span>
                      </div>

                      {selectedProject.demo && (
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-3">Live Demo:</span>
                          <a 
                            href={selectedProject.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline flex items-center"
                          >
                            <FiExternalLink className="mr-2" /> Visit Website
                          </a>
                        </div>
                      )}

                      <div className="flex items-center">
                        <span className="text-gray-400 mr-3">Source Code:</span>
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:underline flex items-center"
                        >
                          <FiGithub className="mr-2" /> View on GitHub
                        </a>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-800">
                      <button 
                        onClick={closeProjectModal}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:opacity-90 transition border border-gray-700 cursor-pointer"
                      >
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;