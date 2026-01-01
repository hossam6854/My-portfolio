import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGithub, 
  FiExternalLink, 
  FiLayers, 
  FiMonitor, 
  FiDatabase,
  FiLock 
} from "react-icons/fi";
import { FaTools } from "react-icons/fa";

// --- استيراد الصور (تأكد من تحديث المسارات للصور الجديدة) ---
import HabitTrackerImg from "../assets/2.png";
import RamadanWorshipImg from "../assets/3.png";
import HRBotixImg from "../assets/1.png";
import B7ayemkoImg from "../assets/b7ayemko.png";
import ImproveSkillsImg from "../assets/skills.png";
import EduConnect from "../assets/educonnect.png";
import Products from "../assets/products.png";
// صور المشاريع الجديدة (استخدمت صور مؤقتة من الموجود، يرجى استبدالها بصور حقيقية)
import CollectingImg from "../assets/4.png"; // استبدلها بصورة مركز التحصيل
import PharmacyImg from "../assets/5.png";   // استبدلها بصورة الباشا للأدوية

// --- بيانات المشاريع ---
const projectsData = [
  // المشاريع الجديدة (Full Stack)
  {
    id: 101,
    title: "El-Pasha Drugs Store", // الباشا للأدوية
    category: "fullstack",
    tech: ["Next.js", "TailwindCSS", "Auth.js"],
    image: PharmacyImg, 
    description: "A comprehensive B2B warehouse management system for selling medicines to pharmacies. Includes inventory tracking, order management, and supplier dashboards.",
    github: null, // خاص حالياً
    demo: "https://pharmacy-next-nine.vercel.app",
    accentColor: "bg-blue-600"
  },
  {
    id: 102,
    title: "Collecting Center", // مركز التحصيل
    category: "fullstack",
    tech: ["Next.js", "TailwindCSS"],
    image: CollectingImg,
    description: "A financial collection system designed to manage client payments, track debts, and generate financial reports for the collecting center.",
    github: null, // خاص حالياً
    demo: "https://collecting-system-three.vercel.app",
    accentColor: "bg-emerald-600"
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
    accentColor: "bg-teal-600"
  },
  {
    id: 8,
    title: "E-Commerce Products",
    category: "frontend",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: Products,
    description: "An e-commerce platform that displays products and their details, allowing users to search, filter, and sort products effectively.",
    github: "https://github.com/hossam6854/products-app",
    demo: "https://products-app-beryl.vercel.app/",
    accentColor: "bg-gray-700"
  },
  {
    id: 5,
    title: "B7ayemko Marketplace",
    category: "frontend",
    tech: ["React", "Redux", "TailwindCSS"],
    image: B7ayemkoImg,
    description: "Online marketplace for buying and selling livestock and pets, offering delivery, support, and advice for farmers.",
    github: "https://github.com/hossam6854/B7ayemko",
    demo: "https://b7ayemko.vercel.app/",
    accentColor: "bg-yellow-500"
  },
  {
    id: 1,
    title: "Habit Tracker",
    category: "frontend",
    tech: ["React", "Zustand", "TailwindCSS"],
    image: HabitTrackerImg,
    description: "An app to track daily habits, analyze achievements, and motivate users to reach their personal goals.",
    github: "https://github.com/hossam6854/Habit_Tracker_Website",
    demo: "https://habit-tracker-mu-lime.vercel.app/",
    accentColor: "bg-cyan-500"
  },
  {
    id: 6,
    title: "Skill Explorer",
    category: "frontend",
    tech: ["React", "Redux Persist", "API"],
    image: ImproveSkillsImg,
    description: "Platform that helps users discover their strengths and recommends real courses to grow skills and career potential.",
    github: "https://github.com/hossam6854/skill-explorer",
    demo: "https://skill-explorer.vercel.app/",
    accentColor: "bg-pink-500"
  },
  {
    id: 2,
    title: "Ramadan Worship",
    category: "frontend",
    tech: ["React", "Context API", "Islamic API"],
    image: RamadanWorshipImg,
    description: "A platform to enhance the spiritual experience during Ramadan by tracking daily worship activities.",
    github: "https://github.com/hossam6854/Ramadan-Worship-App",
    demo: "https://hossam6854.github.io/Ramadan-Worship-App/",
    accentColor: "bg-purple-600"
  },
  {
    id: 7,
    title: "Edu Connect",
    category: "frontend",
    tech: ["React", "TailwindCSS", "Redux"],
    image: EduConnect,
    description: "An educational platform connecting students with teachers and courses for effective digital learning.",
    demo: "https://edu-connect-kohl.vercel.app/",
    accentColor: "bg-indigo-600"
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

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical journey, from interactive user interfaces to scalable full-stack architectures.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 p-1.5 rounded-full backdrop-blur-md border border-gray-700/50 inline-flex">
            {["all", "fullstack", "frontend"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {filter === "all" && <FiLayers />}
                {filter === "frontend" && <FiMonitor />}
                {filter === "fullstack" && <FiDatabase />}
                <span className="capitalize">{filter === "fullstack" ? "Full Stack" : filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${project.category === 'fullstack' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Mini Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded border border-gray-600">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 px-1 py-1">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details <FiExternalLink className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* --- Coming Soon Projects (Placeholder for pending work) --- */}
            {activeFilter !== "frontend" && (
                <>
                {[1, 2, 3].map((item) => (
                    <motion.div
                    key={`coming-soon-${item}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative bg-gray-800/30 rounded-2xl border border-dashed border-gray-700 p-6 flex flex-col items-center justify-center text-center group"
                    >
                        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-0"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FiLock className="text-2xl text-gray-500" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-400 mb-1">Coming Soon</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">In Development</p>
                        </div>
                    </motion.div>
                ))}
                </>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* --- Project Details Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-gray-900 w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-3/5 h-64 md:h-auto bg-black relative">
                 <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              {/* Right Side: Info */}
              <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto">
                <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white mb-3 ${selectedProject.accentColor}`}>
                        {selectedProject.category} Project
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {selectedProject.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FaTools /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-800 text-blue-300 border border-blue-500/20 rounded-lg text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                    {selectedProject.demo && (
                        <a 
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    )}
                    
                    {selectedProject.github ? (
                        <a 
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                        >
                            <FiGithub /> Source Code
                        </a>
                    ) : (
                        <div className="w-full py-3 bg-gray-800/50 text-gray-500 border border-gray-700 rounded-xl font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                            <FiLock /> Private Repository
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;