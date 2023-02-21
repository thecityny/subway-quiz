import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classnames from "classnames";
import { getQuizContent } from "../data/quiz-content";

type NextButtonProps = {
    userGuess: number;
    questionNumber: number;
  };

const NextButton: React.FC<NextButtonProps> = ({userGuess, questionNumber}) => {
    return(
        <AnchorLink
            href={
            questionNumber > getQuizContent().length - 1
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
            {questionNumber > getQuizContent().length - 1
            ? "See results"
            : "Next ↓"}
        </AnchorLink>
    )
}

export default NextButton