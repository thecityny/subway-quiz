import { useState } from "react";
import { Question } from "./components/Question";
import { getStationFromId } from "./data/stations";

import "./styles/styles.scss";

const QUIZ_ANSWERS = [636, 20, 609];

const scoreUserGuesses = (guesses: number[]) => {
  let score = 0;
  guesses.forEach((guess, i) => {
    if (guess === QUIZ_ANSWERS[i]) {
      score++;
    }
  });
  return score;
};

export const App = () => {
  const [questionNumber, updateQuestionNumber] = useState(0);
  const moveToNextQuestion = () => updateQuestionNumber(questionNumber + 1);

  const [guesses, updateGuesses] = useState<number[]>([]);
  const submitGuess = (usersGuess: number) => {
    updateGuesses([...guesses, usersGuess]);
    moveToNextQuestion();
  };

  const numberOfQuestions = QUIZ_ANSWERS.length;

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
        <div>
          <p>
            You scored a {scoreUserGuesses(guesses)} out of {numberOfQuestions}!
          </p>
          <p>{guesses}</p>
          {QUIZ_ANSWERS.map((answer, i) => (
            <p>
              For question {i + 1}, you answered{" "}
              {getStationFromId(guesses[i])?.name}. The correct answer was{" "}
              {getStationFromId(answer)?.name}.
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
