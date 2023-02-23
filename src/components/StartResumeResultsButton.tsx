import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnswerKey } from "./Quiz";

type StartResumeResultsButtonProps = {
  firstEmptyQuestion: AnswerKey | undefined;
  blankScorecard: AnswerKey[];
  questionsLeftToAnswer: number[]
};

const StartResumeResultsButton: React.FC<StartResumeResultsButtonProps> = ({firstEmptyQuestion, questionsLeftToAnswer, blankScorecard}) => {
  return (
    <AnchorLink
    href={
      firstEmptyQuestion ? `#q${firstEmptyQuestion.questionNumber}` : "#scorecard"
    }
    className="start-button is-flex is-align-items-center is-justify-content-center"
  >
    {questionsLeftToAnswer.length === blankScorecard.length
      ? "Start" : !!firstEmptyQuestion
      ? "Resume": "Results"
      }
    <br />↓
  </AnchorLink>
)}

export default StartResumeResultsButton