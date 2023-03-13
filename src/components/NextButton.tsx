import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classnames from "classnames";
import { QuestionContent } from "data/quiz-content";

type NextButtonProps = {
    userGuess: number;
    questionNumber: number;
    getQuizData: () => QuestionContent[];
  };

const NextButton: React.FC<NextButtonProps> = ({userGuess, questionNumber, getQuizData}) => {
    return(
        <AnchorLink
            href={
            questionNumber > getQuizData().length - 1
                ? "#scorecard"
                : `#q${questionNumber + 1}`
            }
            className={classnames(
            "button",
            "is-black",
            "mt-4",
            !userGuess && "is-invisible"
            )}
        >
            {questionNumber > getQuizData().length - 1
            ? "See results"
            : "Next ↓"}
        </AnchorLink>
    )
}

export default NextButton