import { useState } from "react";
import { Question } from "./components/Question";

export const App = () => {
  const [questionNumber, updateQuestionNumber] = useState(0);
  const moveToNextQuestion = () => updateQuestionNumber(questionNumber + 1);

  return (
    <div className="App">
      {questionNumber === 0 && (
        <div>
          <p>Welcome to THE CITY's subway quiz!</p>
          <button onClick={moveToNextQuestion}>Let's Start</button>
        </div>
      )}
      {questionNumber > 0 && <Question number={questionNumber} />}
    </div>
  );
};
