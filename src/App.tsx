import { useState } from "react";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { getQuizContent } from "./data/quiz-content";

import "./styles/styles.scss";

export const App = () => {
  const [questionNumber, updateQuestionNumber] = useState(0);
  const moveToNextQuestion = () => updateQuestionNumber(questionNumber + 1);

  const [guesses, updateGuesses] = useState<number[]>([]);
  const submitGuess = (usersGuess: number) => {
    updateGuesses([...guesses, usersGuess]);
    moveToNextQuestion();
  };

  const numberOfQuestions = getQuizContent().length;

  return (
    <div className="App">
      {questionNumber === 0 && (
        <div>
          <p>Welcome to THE CITY's subway quiz!</p>
          <button onClick={moveToNextQuestion}>Let's Start</button>
        </div>
      )}
      {questionNumber > 0 && questionNumber <= numberOfQuestions && (
        <Question questionNumber={questionNumber} submitGuess={submitGuess} />
      )}
      {questionNumber === numberOfQuestions + 1 && (
        <Results userGuesses={guesses} />
      )}
    </div>
  );
};
