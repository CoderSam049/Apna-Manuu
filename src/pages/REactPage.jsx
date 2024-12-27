import React from "react";
import Quiz from "./Quiz";

export default function REactPage() {
  const questions = [
    {
      question: "What is React?",
      answers: [
        { text: "A library for building user interfaces", correct: true },
        { text: "A backend framework", correct: false },
        { text: "A database management system", correct: false },
        { text: "A design tool", correct: false },
      ],
    },
    // Add more questions
  ];

  return (
    <Quiz
      title="React Basics Test"
      description="Test your knowledge about React!"
      questions={questions}
    />
  );
}
