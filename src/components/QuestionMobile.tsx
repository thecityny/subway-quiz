import React, { useEffect, useState } from "react";
import StationChoices from "./StationChoices";
import NextButton from "./NextButton";
import classnames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getQuizContent } from "../data/quiz-content";


type QuestionMobileProps = {
    userGuess: number;
    correctAnswer: number;
    choicesList: number[];
    handleGuess: (stationID: number, setLocalStorage?: boolean) => void;
    questionNumber: number;
    photo: string;
    caption: React.ReactNode;
  };


const QuestionMobile: React.FC<QuestionMobileProps> = ({
    userGuess, 
    correctAnswer, 
    choicesList, 
    handleGuess,
    questionNumber,
    photo,
    caption
}) => {
    const piece = 
    <div className="column is-1">
    <div
      className={classnames(
        "subway-line",
        "is-relative",
        "is-flex",
        "is-align-items-center",
        "is-justify-content-center",
        questionNumber === 1
          ? "is-first-question"
          : questionNumber > getQuizContent().length - 1 &&
              "is-last-question"
      )}
    >
      <div className="subway-station" />
    </div>
    </div> 

    return(
    <div className="columns question is-mobile is-hidden-tablet is-1">
    {piece}
    <div className="column is-11">
      <LazyLoadImage src={photo} width="100%" effect="blur" />
      <h1 className="mt-4 mb-0">#{questionNumber}</h1>
      <h2 className="has-text-weight-bold mb-4">{caption}</h2>
      <StationChoices 
        userGuess={userGuess}
        correctAnswer={correctAnswer}
        choicesList={choicesList}
        handleGuess={handleGuess}
        questionNumber={questionNumber}
      />
      <NextButton
        questionNumber = {questionNumber}
        userGuess={userGuess}
      />
    </div>
  </div>
)}

export default QuestionMobile