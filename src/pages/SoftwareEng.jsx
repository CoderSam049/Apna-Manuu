import React from "react";
import Quiz from "./Quiz";

export default function SoftwareEng() {
  const questions = [
    {
      question: "What is the primary goal of software engineering?",
      answers: [
        { text: "To produce hardware components", correct: false },
        { text: "To manage databases", correct: false },
        { text: "To design, develop, and maintain software", correct: true },
        { text: "To test hardware devices", correct: false },
      ],
    },
    {
      question:
        "Which of the following is a software development life cycle (SDLC) model?",
      answers: [
        { text: "Waterfall", correct: true },
        { text: "Agile", correct: true },
        { text: "Spiral", correct: true },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question:
        "What is the first phase of the software development life cycle (SDLC)?",
      answers: [
        { text: "Testing", correct: false },
        { text: "Deployment", correct: false },
        { text: "Requirements Gathering", correct: true },
        { text: "Design", correct: false },
      ],
    },
    {
      question:
        "Which model is often referred to as the 'traditional' software development model?",
      answers: [
        { text: "Waterfall Model", correct: true },
        { text: "Agile Model", correct: false },
        { text: "Spiral Model", correct: false },
        { text: "RAD Model", correct: false },
      ],
    },
    {
      question: "Which phase in SDLC involves actual coding?",
      answers: [
        { text: "Design", correct: false },
        { text: "Implementation", correct: true },
        { text: "Testing", correct: false },
        { text: "Maintenance", correct: false },
      ],
    },
    {
      question: "Which of the following is not a software process model?",
      answers: [
        { text: "Waterfall", correct: false },
        { text: "V-Model", correct: false },
        { text: "Prototyping", correct: false },
        { text: "Computer Science Model", correct: true },
      ],
    },
    {
      question: "What does 'Agile' emphasize in software development?",
      answers: [
        { text: "Strict Phases", correct: false },
        { text: "Continuous Iteration and Flexibility", correct: true },
        { text: "No customer collaboration", correct: false },
        { text: "Heavy Documentation", correct: false },
      ],
    },
    {
      question:
        "Which of the following is an example of functional requirements?",
      answers: [
        { text: "User login functionality", correct: true },
        { text: "System response time", correct: false },
        { text: "Security level", correct: false },
        { text: "Scalability", correct: false },
      ],
    },
    {
      question: "What is software testing?",
      answers: [
        { text: "The process of writing code", correct: false },
        { text: "The process of executing code to find bugs", correct: true },
        { text: "The process of designing software", correct: false },
        { text: "The process of deploying software", correct: false },
      ],
    },
    {
      question: "Which of the following is a software quality attribute?",
      answers: [
        { text: "Efficiency", correct: true },
        { text: "Portability", correct: true },
        { text: "Maintainability", correct: true },
        { text: "All of the above", correct: true },
      ],
    },
  ];

  return (
    <Quiz
      title="SoftWare Engineering"
      description="Test your knowledge about SoftWare Engineering!"
      questions={questions}
    />
  );
}
