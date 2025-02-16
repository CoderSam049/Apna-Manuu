import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const subjects = [
  { title: "Software Engineering", link: "/test/softwareEng" },
  { title: "Microprocessor & Interface", link: "/test/microprocessor" },
  { title: "Data Structures", link: "/test/dsa" },
  { title: "React Js", link: "/test/react" },
  { title: "Coming Soon...", link: "/test/chn" },
  { title: "Coming Soon...", link: "/test/chn" },
  { title: "Coming Soon...", link: "/test/chn" },
];

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Marquee Heading with Animation */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <marquee behavior="scroll" scrollamount="10" direction="left">
          🚀 Welcome to Test Page 🚀
        </marquee>
      </motion.h1>

      {/* Subject Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-3">{subject.title}</h2>
            <NavLink
              to={subject.link}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Start Test ➜
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
