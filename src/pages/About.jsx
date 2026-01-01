import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaRocket,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiPostman,
} from "react-icons/si";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Stats Data
  const stats = [
    { label: "Full-Stack Projects", value: "6+", icon: <FaLayerGroup /> },
    { label: "Years Experience", value: "3+", icon: <FaCode /> }, // Adjusted based on 2021 start
    { label: "Tech Stack", value: "MERN", icon: <FaServer /> },
  ];

  // Skills Categorized
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-blue-400" />, level: "Advanced" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "Intermediate" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Expert" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-green-400" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: "Advanced" },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: "Advanced" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: "Intermediate" },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: "Intermediate" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <FaRocket className="text-purple-400" />,
      skills: [
        { name: "Git & GitHub", icon: <SiGit className="text-orange-500" />, level: "Advanced" },
        { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: "Intermediate" },
        { name: "RESTful APIs", icon: <FaDatabase className="text-indigo-400" />, level: "Expert" },
      ],
    },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "Full-Stack Architect",
      role: "Freelance & Independent Developer",
      description: "Designed, developed, and deployed 6 scalable full-stack web applications. Managing the entire lifecycle from database schema design (SQL/NoSQL) to responsive frontend implementation.",
      tech: "Node.js, MongoDB, MySQL, React",
      highlight: true,
    },
    {
      year: "2023 - 2024",
      title: "Advanced Frontend Developer",
      role: "Specialist",
      description: "Focused on complex UI state management, performance optimization, and integrating third-party APIs.",
      tech: "React, Redux, Tailwind",
      highlight: false,
    },
    {
      year: "2021 - 2022",
      title: "The Beginning",
      role: "Junior Developer",
      description: "Mastered the fundamentals of the web: HTML, CSS, and JavaScript. Built first responsive layouts.",
      tech: "HTML, CSS, JS",
      highlight: false,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 text-gray-100 py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">
            About Me
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            From <span className="text-blue-400">Concept</span> to <span className="text-green-400">Deployment</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am Hossam Sayed, a <span className="text-white font-semibold">Full-Stack Developer</span> passionate about building complete web solutions. 
            Since 2025, I have successfully delivered <span className="text-white font-semibold">6 production-ready applications</span>, handling everything from server logic to pixel-perfect UIs.
          </motion.p>
        </motion.div>

        {/* 2. Stats Grid (Highlighting Achievements) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl flex items-center justify-between hover:border-blue-500/50 transition-colors group"
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</h3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
              <div className="text-3xl text-gray-600 group-hover:text-blue-500 transition-colors bg-gray-900 p-3 rounded-lg">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Tech Ecosystem (Split Front/Back) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
           <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
            <p className="text-gray-400 mt-2">The tools I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                  <div className="text-2xl">{category.icon}</div>
                  <h4 className="text-xl font-bold text-gray-200">{category.title}</h4>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-gray-500 group-hover:text-white transition-colors">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      {/* Optional: Indicator dot */}
                      <div className={`w-2 h-2 rounded-full ${skill.level === 'Expert' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. The Journey (Timeline) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Professional Journey</h3>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.highlight ? 'is-active' : ''}`}
              >
                {/* Icon Marker */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 
                  ${item.highlight ? 'bg-blue-500 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-gray-900 border-gray-700'}`}>
                  {item.highlight ? <FaCheckCircle className="text-white text-sm" /> : <div className="w-2 h-2 bg-gray-500 rounded-full" />}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold ${item.highlight ? 'text-blue-400' : 'text-gray-300'}`}>{item.year}</span>
                    <span className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-900 rounded">{item.tech}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400 mb-3">{item.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;