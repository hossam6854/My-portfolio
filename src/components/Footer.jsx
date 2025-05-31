import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaCode } from "react-icons/fa";
import { SiTypescript, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const techStack = [
    { icon: <SiReact className="text-blue-400" />, name: "React" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <FaCode className="text-purple-400" />, name: "Tailwind" }
  ];

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/blog", name: "Blog" }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/hossam6854",
      color: "hover:text-gray-300"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://linkedin.com/in/hossam-sayed-6b90a9243",
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaEnvelope />, 
      url: "mailto:hosamsayedee@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700 pt-12 pb-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <FaTerminal className="text-cyan-400 text-xl group-hover:text-blue-400 transition-colors" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Hossam Sayed
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 text-xl transition-colors ${social.color}`}
                  whileHover={{ y: -3 }}
                  aria-label={social.icon.type.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.path}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tech Stack
            </h3>
            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                hosamsayedee@gmail.com
              </p>
              <a 
                href="https://github.com/hossam6854" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="mr-2" />
                github.com/hossam6854
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hossam Sayed. All code rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-gray-500 text-sm flex items-center">
              <FaCode className="mr-1" /> Crafted with passion
            </p>
            <p className="text-gray-500 text-sm">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;