import React, { useState } from "react";
import "../styles/dsa.css";


import questions from "./dsaQn";


export default function DSASection() {
  const [filteredType, setFilteredType] = useState("All");

  // Filter questions based on type
  const filteredQuestions =
    filteredType === "All"
      ? questions
      : questions.filter((question) => question.type === filteredType);

  return (
    <div className="dsa-section">
      <h2 className="dsa-heading">DSA Practice Questions</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", ...new Set(questions.map((q) => q.type))].map((type) => (
          <button
            key={type}
            className={`filter-button ${filteredType === type ? "active" : ""}`}
            onClick={() => setFilteredType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Questions Table */}
      <div className="dsa-table-wrapper">
        <table className="dsa-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Type</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((question, index) => (
              <tr key={index}>
                <td>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {question.name}
                  </a>
                </td>
                <td>{question.type}</td>
                <td
                  className={`difficulty-${question.difficulty.toLowerCase()}`}
                >
                  {question.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

