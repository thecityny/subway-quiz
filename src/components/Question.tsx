import React, { useEffect, useState } from "react";
import QuestionNotMobile from "./QuestionNotMobileView";
import QuestionMobile from "./QuestionMobileView";
import { shuffleArray } from "utils/shuffleArray";
import { QuestionContent } from "data/quiz-content";

import "react-lazy-load-image-component/src/effects/blur.css";


type QuestionProps = {
  questionNumber: number;
  submitGuess: (a: number, qn: number) => void;
  getFunction: () => QuestionContent[];
};

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitGuess,
  getFunction
}) => {
  const { photo, caption, correctAnswer, otherChoices } =
    getFunction()[questionNumber - 1];

  const [userGuess, setUserGuess] = useState(0);

  const handleGuess = (stationID: number, setLocalStorage?: boolean) => {
    setUserGuess(stationID);
    submitGuess(stationID, questionNumber);
    if (setLocalStorage) {
      localStorage.setItem(`stationGuess-${questionNumber}`, `${stationID}`);
    }
  };

  const [answerOptions, setAnswerOptions] = useState([
    correctAnswer,
    ...otherChoices,
  ]);

  // Shuffle choices on first render:
  useEffect(() => {
    setAnswerOptions(shuffleArray([correctAnswer, ...otherChoices]));

    if (!!localStorage.getItem(`stationGuess-${questionNumber}`)) {
      const stationID = parseInt(
        localStorage.getItem(`stationGuess-${questionNumber}`) as string
      );
      handleGuess(stationID);
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <div id={`q${questionNumber}`}>
    <QuestionNotMobile
      userGuess={userGuess}
      correctAnswer={correctAnswer}
      answerOptions={answerOptions}
      handleGuess={handleGuess}
      questionNumber={questionNumber}
      photo={photo}
      caption={caption}
      getFunction={getFunction}   
    />
    <QuestionMobile
      userGuess={userGuess}
      correctAnswer={correctAnswer}
      answerOptions={answerOptions}
      handleGuess={handleGuess}
      questionNumber={questionNumber}
      photo={photo}
      caption={caption}
      getFunction={getFunction}         
    />
    </div>
  );
};
