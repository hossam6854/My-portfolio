import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Hossam Sayed</h1>
        <div className="hidden md:flex gap-6 text-lg">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-800 flex flex-col items-center py-4 md:hidden">
            <Link className="mobile-nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="mobile-nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link className="mobile-nav-link" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link className="mobile-nav-link" to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
