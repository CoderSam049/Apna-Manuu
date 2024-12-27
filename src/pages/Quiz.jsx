import React, { useState } from "react";
import "../styles/quiz.css";

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
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {showScore ? (
        <div className="quiz-result">
          <h2>You scored {score} out of {questions.length}!</h2>
          <button className="btn restart-btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-content">
          <h2 className="question">{questions[currentQuestionIndex].question}</h2>
          <div className="answer-options">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === index
                    ? answer.correct
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswerClick(answer.correct, index)}
                disabled={selectedAnswer !== null}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <button
            className="btn next-btn"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
