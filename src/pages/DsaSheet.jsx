import React, { useState } from "react";
import { motion } from "framer-motion";
import questions from "./dsaQn"; 

export default function DSASection() {
  const [filteredType, setFilteredType] = useState("All");

  // Filter questions based on type
  const filteredQuestions =
    filteredType === "All"
      ? questions
      : questions.filter((question) => question.type === filteredType);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Heading with Animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 DSA Practice Questions 🚀
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["All", ...new Set(questions.map((q) => q.type))].map((type) => (
          <motion.button
            key={type}
            className={`px-5 py-2 rounded-lg transition duration-300 ${
              filteredType === type
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 hover:bg-yellow-400 hover:text-black"
            }`}
            onClick={() => setFilteredType(type)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Questions Table */}
      <div className="overflow-x-auto">
        <motion.table
          className="w-full max-w-5xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <thead className="bg-yellow-500 text-black">
            <tr>
              <th className="py-3 px-5 text-left">Question</th>
              <th className="py-3 px-5 text-left">Type</th>
              <th className="py-3 px-5 text-left">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((question, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <td className="py-3 px-5">
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {question.name}
                  </a>
                </td>
                <td className="py-3 px-5">{question.type}</td>
                <td
                  className={`py-3 px-5 font-bold ${
                    question.difficulty === "Easy"
                      ? "text-green-400"
                      : question.difficulty === "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {question.difficulty}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
