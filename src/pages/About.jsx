import { FaCode, FaServer, FaMobileAlt, FaRocket, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-500" },
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-amber-500" },
    { name: "HTML5", level: 98, color: "from-orange-400 to-red-500" },
    { name: "CSS3/Tailwind", level: 92, color: "from-blue-300 to-indigo-400" },
    { name: "Git/GitHub", level: 88, color: "from-gray-400 to-gray-600" },
  ];

  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      description: "Building responsive websites",
      icon: <FaMobileAlt className="text-cyan-400 text-2xl" />,
      CredentialID: "hossam74-rwd"

    },
    {
      title: "Front-End Web Development",
      issuer: "Ministry of Communications and IT",
      description: "HTML, CSS, and JavaScript fundamentals",
      icon: <FaCode className="text-blue-400 text-2xl" />,
      CredentialID: "JTEMNGS3"

    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "Google",
      description: "Google's digital marketing course",
      icon: <FaRocket className="text-purple-400 text-2xl" />,
      CredentialID: "J36 3R2 AXZ"
    }
  ];


  const timeline = [
    {
      year: "2023 - Present",
      title: "Advanced Development",
      description: "Building complex React applications and optimizing front-end performance",
      icon: <FaCode className="text-blue-400" />
    },
    {
      year: "2022",
      title: "Full-Stack Exploration",
      description: "Developed full-stack applications with RESTful API integration",
      icon: <FaServer className="text-cyan-400" />
    },
    {
      year: "2021",
      title: "Coding Journey Begins",
      description: "Started with HTML, CSS, and JavaScript fundamentals",
      icon: <FaGraduationCap className="text-indigo-400" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6"
          >
            Who Am I?
          </motion.h2>
          <motion.p
            variants={slideUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm <span className="font-semibold text-blue-300">Hossam Sayed</span>, a passionate <span className="font-semibold text-cyan-300">Front-End Developer</span> specializing in building <span className="font-semibold text-indigo-300">high-performance</span>, <span className="font-semibold text-purple-300">scalable</span> web applications with modern technologies.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20"
        >
          <motion.h3
            variants={slideUp}
            className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-12"
          >
            <FaCode className="inline mr-3" /> Core Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20"
        >
          <motion.h3
            variants={slideUp}
            className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-12"
          >
            <FaGraduationCap className="inline mr-3" /> Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {cert.icon}
                    <h4 className="text-xl font-semibold text-gray-100 ml-3">{cert.title}</h4>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
                <div className="bg-gray-700 px-6 py-3 text-sm text-gray-400">
                  Credential ID: {cert.CredentialID}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h3
            variants={slideUp}
            className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-12"
          >
            <FaBriefcase className="inline mr-3" /> My Journey
          </motion.h3>
          
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ delay: 0.1 * index }}
                  className={`relative w-full ${index % 2 === 0 ? 'pr-12 pl-0 md:pr-0 md:pl-12' : 'pl-12 pr-0 md:pl-0 md:pr-12'}`}
                >
                  <div className={`bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 relative ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`} style={{ maxWidth: '500px' }}>
                    <div className="absolute -top-4 -left-4 md:left-auto md:-right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-blue-300 mb-2">{item.year}</h4>
                    <h5 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h5>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;