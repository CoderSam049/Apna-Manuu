import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Quiz({ title, description, questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect, index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen shadow-3xl flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-2 text-purple-400">{title}</h1>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <motion.div
            className="bg-purple-500 h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>

        {showScore ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            <h2 className="mb-4">You scored {score} out of {questions.length}!</h2>
            <button 
              className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-300"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestionIndex].question}</h2>
            <div className="grid grid-cols-1 gap-3">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className={`py-3 px-6 text-lg rounded-lg font-semibold shadow-md transition duration-300 ${
                    selectedAnswer === index
                      ? answer.correct
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  }`}
                  onClick={() => handleAnswerClick(answer.correct, index)}
                  disabled={selectedAnswer !== null}
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>
            <button
              className="mt-4 bg-purple-500 hover:bg-purple-400 text-white py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
