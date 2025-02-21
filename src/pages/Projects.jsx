import { useState } from "react";
import Image from "../assets/1.png";
import Image1 from "../assets/2.png";
import Image2 from "../assets/3.png";

const projectsData = [
  {
    id: 1,
    title: "Habit Tracker Website",
    category: "Frontend",
    image: Image1,
    description:
      "Habit Tracker is a modern web application that helps users track their daily habits, analyze their progress, and stay motivated to achieve their personal goals. The site features a simple and user-friendly design with a smooth user experience and an attractive interface.",
    github: "https://github.com/hossam6854/Habit_Tracker_Website",
    liveDemo: "https://hossam6854.github.io/Habit_Tracker_Website/",
  },
  {
    id: 2,
    title: "Ramadan Worship",
    category: "Frontend",
    image: Image2,
    description:
      "It is an innovative online platform designed to enhance the spiritual experience during the holy month of Ramadan. The site allows users to track their daily worship activities, such as prayers, Quran reading, supplications, and charity, with the ability to set and achieve personal goals throughout the month.",
    github: "https://github.com/hossam6854/Ramadan-Worship-App",
    liveDemo: "https://hossam6854.github.io/Ramadan-Worship-App/",
  },
  {
    id: 3,
    title: "4Matic Motors",
    category: "Full Stack",
    image: "/assets/admin-dashboard.jpg",
    description:
      "4Matic Motors is a specialized platform for buying and selling new and used cars, where users can browse available cars, view detailed information about each vehicle, and easily connect with sellers. The website also allows users to post car ads, upload images, and provide comprehensive details about the car's condition.",
    github: "https://github.com/hossam6854/cars",
  },
  {
    id: 4,
    title: "HR Botix",
    category: "Full Stack",
    image: Image,
    description:
      "AI-EHRMS is an innovative solution poised to revolutionize the landscape of Human Resource Management through the integration of Artificial Intelligence (AI).",
    github: "https://github.com/hossam6854/HR_Botix",
  },
];

const categories = ["All", "Frontend", "Full Stack"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 py-12 text-center bg-gray-50">
      {/* Header */}
      <h2 className="text-5xl font-bold text-blue-900">My Projects</h2>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        A showcase of my projects, ranging from full-stack applications to UI/UX designs.
      </p>

      {/* Categories */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all cursor-pointer duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Live Demo
                  </a>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
