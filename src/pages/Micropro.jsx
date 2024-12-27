import React from "react";
import Quiz from "./Quiz";

const Micropro = () => {
  const questions = [
    {
      question: "What is the basic unit of a microprocessor?",
      answers: [
        { text: "ALU (Arithmetic Logic Unit)", correct: true },
        { text: "Register", correct: false },
        { text: "Control Unit", correct: false },
        { text: "Memory", correct: false },
      ],
    },
    {
      question:
        "Which of the following is a commonly used 8-bit microprocessor?",
      answers: [
        { text: "Intel 8086", correct: false },
        { text: "Intel 8085", correct: true },
        { text: "Intel Pentium", correct: false },
        { text: "Motorola 68000", correct: false },
      ],
    },
    {
      question: "What is the clock speed of a microprocessor measured in?",
      answers: [
        { text: "Bytes", correct: false },
        { text: "Cycles per second (Hz)", correct: true },
        { text: "Milliseconds", correct: false },
        { text: "Bits per second", correct: false },
      ],
    },
    {
      question:
        "Which register in a microprocessor holds the address of the next instruction to be executed?",
      answers: [
        { text: "Accumulator", correct: false },
        { text: "Program Counter", correct: true },
        { text: "Stack Pointer", correct: false },
        { text: "Instruction Register", correct: false },
      ],
    },
    {
      question:
        "Which part of the microprocessor performs arithmetic and logical operations?",
      answers: [
        { text: "Control Unit", correct: false },
        { text: "ALU (Arithmetic Logic Unit)", correct: true },
        { text: "Memory Unit", correct: false },
        { text: "Program Counter", correct: false },
      ],
    },
    {
      question:
        "What is the size of the address bus in an Intel 8086 microprocessor?",
      answers: [
        { text: "8 bits", correct: false },
        { text: "16 bits", correct: true },
        { text: "32 bits", correct: false },
        { text: "64 bits", correct: false },
      ],
    },
    {
      question: "Which microprocessor is widely used in embedded systems?",
      answers: [
        { text: "Intel Pentium", correct: false },
        { text: "ARM", correct: true },
        { text: "Intel 8085", correct: false },
        { text: "Motorola 68000", correct: false },
      ],
    },
    {
      question:
        "Which signal is used to request the microprocessor to stop its current operation and attend to another task?",
      answers: [
        { text: "Interrupt", correct: true },
        { text: "Clock", correct: false },
        { text: "Reset", correct: false },
        { text: "Data Bus", correct: false },
      ],
    },
    {
      question:
        "Which memory is used to store instructions in a microprocessor?",
      answers: [
        { text: "RAM", correct: false },
        { text: "ROM", correct: true },
        { text: "Cache", correct: false },
        { text: "Register", correct: false },
      ],
    },
    {
      question:
        "What is the maximum memory size that can be addressed by a 16-bit address bus?",
      answers: [
        { text: "64 KB", correct: true },
        { text: "32 KB", correct: false },
        { text: "128 KB", correct: false },
        { text: "16 KB", correct: false },
      ],
    },
  ];
  return (
    <div>
      <Quiz
        title={"Microprocessor"}
        description={"Test Your Knowledge about Microprocessor"}
        questions={questions}
      ></Quiz>
    </div>
  );
};

export default Micropro;
