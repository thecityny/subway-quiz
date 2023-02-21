import React, { useEffect, useState } from "react";
import StationChoices from "./StationChoices";
import NextButton from "./NextButton";
import classnames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component"; 
import { getQuizContent } from "../data/quiz-content";

type QuestionNotMobileProps = {
    userGuess: number;
    correctAnswer: number;
    choicesList: number[];
    handleGuess: (stationID: number, setLocalStorage?: boolean) => void;
    questionNumber: number;
    photo: string;
    caption: React.ReactNode;
  };


const QuestionNotMobile: React.FC<QuestionNotMobileProps> = ({
    userGuess, 
    correctAnswer, 
    choicesList, 
    handleGuess,
    questionNumber,
    photo,
    caption}) => {

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
    return (
        <div className="columns question is-align-items-center is-hidden-mobile">
            <div className="column is-7 has-text-centered">
                <LazyLoadImage src={photo} width="100%" effect="blur" />
            </div>
            {piece}
            <div className="column is-4">
            <h1 className="mt-6 mb-0">#{questionNumber}</h1>
            <h2 className=" has-text-weight-bold mb-4">{caption}</h2>
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
)
}

export default QuestionNotMobile