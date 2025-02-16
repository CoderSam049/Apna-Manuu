import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "Frontend Development",
    description:
      "Frontend development focuses on building the visual and interactive parts of a website or web app.",
    projects: ["Portfolio Website", "Weather App", "E-commerce UI", "Blog Platform"],
    resources: ["HTML & CSS", "JavaScript", "React.js", "Tailwind CSS"],
    roadmapLink: "https://roadmap.sh/frontend",
  },
  {
    title: "Backend Development",
    description:
      "Backend development deals with databases, server logic, and APIs to power web applications.",
    projects: ["REST API", "Authentication System", "Chat App Backend", "E-commerce Backend"],
    resources: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    roadmapLink: "https://roadmap.sh/backend",
  },
];

const Development = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Development Resources 🚀
      </motion.h1>

      {/* Sections for Frontend & Backend */}
      <div className="space-y-10 max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-300">{section.description}</p>

            {/* Projects */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">🔥 Projects:</h3>
              <ul className="list-disc pl-5 text-gray-400">
                {section.projects.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">📚 Resources:</h3>
              <ul className="list-disc pl-5 text-gray-400">
                {section.resources.map((resource, i) => (
                  <li key={i}>{resource}</li>
                ))}
              </ul>
            </div>

            {/* Roadmap Link */}
            <div className="mt-4">
              <NavLink
                to={section.roadmapLink}
                target="_blank"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                📌 View Roadmap
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Development;
