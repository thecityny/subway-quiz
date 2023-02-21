import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classnames from "classnames";
import { getQuizContent } from "../data/quiz-content";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StationChoices from "./StationChoices";
import NextButton from "./NextButton";
import QuestionNotMobile from "./QuestionNotMobile";
import QuestionMobile from "./QuestionMobile";

import "react-lazy-load-image-component/src/effects/blur.css";


type QuestionProps = {
  questionNumber: number;
  submitGuess: (a: number, qn: number) => void;
};

// make this into a utility function
const shuffleArray = (array: any[]) => {
  let newArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [array[j], array[i]];
  }
  return newArray;
};

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitGuess,
}) => {
  const { photo, caption, correctAnswer, otherChoices } =
    getQuizContent()[questionNumber - 1];

  const [userGuess, setUserGuess] = useState(0);

  const handleGuess = (stationID: number, setLocalStorage?: boolean) => {
    setUserGuess(stationID);
    submitGuess(stationID, questionNumber);
    if (setLocalStorage) {
      localStorage.setItem(`stationGuess-${questionNumber}`, `${stationID}`);
    }
  };

  const [choicesList, setChoicesList] = useState([
    correctAnswer,
    ...otherChoices,
  ]);

  // Shuffle choices on first render:
  useEffect(() => {
    setChoicesList(shuffleArray([correctAnswer, ...otherChoices]));

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
      choicesList={choicesList}
      handleGuess={handleGuess}
      questionNumber={questionNumber}
      photo={photo}
      caption={caption}   
    />
    <QuestionMobile
      userGuess={userGuess}
      correctAnswer={correctAnswer}
      choicesList={choicesList}
      handleGuess={handleGuess}
      questionNumber={questionNumber}
      photo={photo}
      caption={caption}         
    />
    </div>
  );
};
