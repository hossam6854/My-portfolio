import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Hossam Sayed. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/projects">Projects</Link>
          <Link className="footer-link" to="/blog">Blog</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/hossam6854" className="social-icon"><FaGithub /></a>
          <a href="https://linkedin.com/in/hossam-sayed-6b90a9243" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:hosamsayedee@gmail.com" className="social-icon"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
