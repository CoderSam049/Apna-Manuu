import React, { useState } from "react";
import "../styles/quiz.css";



import Quiz from "./Quiz";

export default function REactPage() {
  const questions = [
    // Your existing questions...

    {
      question: "What is the main function of a router?",
      answers: [
        { text: "To store data", correct: false },
        { text: "To manage and direct traffic between networks", correct: true },
        { text: "To connect peripherals", correct: false },
        { text: "To amplify signals", correct: false },
      ],
    },
    {
      question: "Which protocol is responsible for assigning IP addresses dynamically?",
      answers: [
        { text: "HTTP", correct: false },
        { text: "DNS", correct: false },
        { text: "DHCP", correct: true },
        { text: "FTP", correct: false },
      ],
    },
    {
      question: "Which device is used to connect multiple devices on the same local network?",
      answers: [
        { text: "Modem", correct: false },
        { text: "Router", correct: false },
        { text: "Switch", correct: true },
        { text: "Firewall", correct: false },
      ],
    },
    {
      question: "What is the maximum length of a CAT5 Ethernet cable?",
      answers: [
        { text: "100 meters", correct: true },
        { text: "50 meters", correct: false },
        { text: "200 meters", correct: false },
        { text: "150 meters", correct: false },
      ],
    },
    {
      question: "Which of the following is a network topology?",
      answers: [
        { text: "Ring", correct: true },
        { text: "Bus", correct: true },
        { text: "Star", correct: true },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question: "Which protocol is used for secure web communication?",
      answers: [
        { text: "HTTP", correct: false },
        { text: "HTTPS", correct: true },
        { text: "FTP", correct: false },
        { text: "SMTP", correct: false },
      ],
    },
    {
      question: "What does MAC in MAC address stand for?",
      answers: [
        { text: "Media Access Control", correct: true },
        { text: "Mobile Address Control", correct: false },
        { text: "Machine Access Control", correct: false },
        { text: "Memory Access Code", correct: false },
      ],
    },
    {
      question: "What does a firewall do in a network?",
      answers: [
        { text: "Monitors and controls incoming and outgoing network traffic", correct: true },
        { text: "Boosts network signals", correct: false },
        { text: "Assigns IP addresses", correct: false },
        { text: "Connects different network segments", correct: false },
      ],
    },
    {
      question: "Which of these is NOT an example of a network device?",
      answers: [
        { text: "Switch", correct: false },
        { text: "Printer", correct: true },
        { text: "Router", correct: false },
        { text: "Firewall", correct: false },
      ],
    },
    {
      question: "What type of cable is commonly used in fiber-optic communication?",
      answers: [
        { text: "Coaxial cable", correct: false },
        { text: "Twisted pair cable", correct: false },
        { text: "Optical fiber cable", correct: true },
        { text: "Ethernet cable", correct: false },
      ],
    }
];

  return (
    <Quiz
      title="Computer Hardware Networking"
      description="Test your knowledge about Computer Hardware!"
      questions={questions}
    />
  );
}
