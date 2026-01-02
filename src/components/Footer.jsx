import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCode,
  FaDatabase,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // البيانات المحدثة لتشمل الباك اند
  const techStack = [
    { icon: <SiNodedotjs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB' },
    { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
    { icon: <SiReact className="text-blue-400" />, name: 'React' },
    { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind' },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/hossam6854',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/hossam-sayed-6b90a9243',
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:hosamsayedee@gmail.com',
      label: 'Email',
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/201033239589',
      label: 'WhatsApp',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 pt-20 pb-10 overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-900 to-gray-900 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 1. Call to Action Section (الجزء العلوي التحفيزي) */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700 mb-16 shadow-lg hover:border-blue-500/30 transition-colors duration-300">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to build something scalable?
            </h2>
            <p className="text-gray-400">
              Let's turn your complex ideas into robust full-stack solutions.
            </p>
          </div>
          <a
            href="mailto:hosamsayedee@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <FaEnvelope /> Hire Me
          </a>
        </div>

        {/* 2. Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              Hossam Sayed
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full-Stack Developer bridging the gap between elegant UIs and
              powerful server-side architecture. Specializing in MERN Stack &
              SQL.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <FaCode className="text-blue-500" /> Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Me', path: '/about' },
                { name: 'Projects', path: '/projects' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Ecosystem (الميزة الجديدة) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <FaDatabase className="text-green-500" /> Tech Ecosystem
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-colors"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-gray-300 text-xs font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-red-400 text-lg mt-0.5" />
                  <span>
                    Asyut, Egypt
                    <br />
                    Available for Remote Work
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <FaEnvelope className="text-blue-400 text-lg" />
                  <a
                    href="mailto:hosamsayedee@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    hosamsayedee@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <FaWhatsapp className="text-green-500 text-lg" />
                  <a
                    href="https://wa.me/201033239589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +20 103 323 9589
                  </a>
                </li>
              </>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Hossam Sayed
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors px-4 py-2 border border-gray-800 hover:border-blue-500/30 rounded-lg"
          >
            Back to Top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
