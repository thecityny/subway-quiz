import React, { ReactElement, useState } from "react";
import { Question } from "./Question";
import { Footer, Header } from "components/HeaderFooter";
import { getDateUpdated } from "utils/getDateUpdated";
import Byline from "./Byline";
import Title from "components/Title";
import StartResumeResultsButton from "./StartResumeResultsButton"
import { QuestionContent } from "../data/quiz-content";
import { Train } from "../data/stations";

import "../styles/app.scss";
import Scorecard from "components/Scorecard";

// in reference to the subway quiz, usersGuess refers to the station ID number 
export type AnswerKey = {
  questionNumber: number;
  usersGuess: number;
  correctAnswer: number;
};

// can actually just use the same props as TitleProps for this, DRY
type QuizProps = {
  title: string;
  subtitle: string;
  getQuizData: () => QuestionContent[];
  animation?: any;
  stationIcons?: ReactElement;
}
// using the scorecard variables/ state hook assumes the data format is the same as the subway quiz's data format (in the quiz-content.tsx file) so if it's not the same will need to change this

export const Quiz: React.FC<QuizProps> = ({title, subtitle, getQuizData, animation}) => {
  let blankScorecard: AnswerKey[] = getQuizData().map(
    ({ correctAnswer }, i) => ({
      questionNumber: i + 1,
      usersGuess: 0,
      correctAnswer,
    })
  );
  
  // blankScoreCard is an array of objects (code above) need to adjust the object format depending on how the data is structured (if not the same as the subway quiz data format)
  const [scorecard, updateScorecard] = useState<AnswerKey[]>(blankScorecard);
  
  // currentGuesses is an array of objects
  const submitGuess = (usersGuess: number, questionNumber: number) => {
    updateScorecard((currentGuesses) =>
      currentGuesses.map((answerKey) => {
        if (answerKey.questionNumber === questionNumber) {
          return { ...answerKey, usersGuess };
        }
        return answerKey;
      })
    );
  };

  const questionsLeftToAnswer = scorecard
    .filter((answerKey) => answerKey.usersGuess === 0)
    .map((answerKey) => answerKey.questionNumber);

  const firstEmptyQuestion = scorecard.find(
    (answerKey) => answerKey.usersGuess === 0
  );


  return (
    <article>
      <Header />
      <div className="app">
        <div className="hero is-fullheight is-relative is-align-items-center">
          {/* need to pass this down from App */}
          { animation }
          <div className="hero-body">
            <div className="copy-container has-text-centered">
              <Title
                title = {title}
                subtitle = {subtitle}
              />
              {/* change byline authors in the .env file REACT_APP_AUTHOR */}
              <Byline/>
            </div>
          </div>
          <StartResumeResultsButton
            firstEmptyQuestion = {firstEmptyQuestion}
            questionsLeftToAnswer = {questionsLeftToAnswer}
            blankScorecard = {blankScorecard}
          />
        </div>

        <div id="quiz">
          {blankScorecard.map(({ questionNumber }) => (
            <Question
              key={questionNumber}
              questionNumber={questionNumber}
              submitGuess={submitGuess}
              getQuizData={getQuizData}
            />
          ))}
        </div>
        
        <Scorecard 
          questionsLeftToAnswer = {questionsLeftToAnswer}
          scorecard = {scorecard}
          title = {title}
        />

        <div className="copy-container has-text-centered">
          {/* change date in .env file */}
          <p className="copy credit-box">
            Originally published {getDateUpdated()}. The project code is open
            source and available to the public{" "}
            <a
              href="https://github.com/thecityny/subway-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              via Github
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </article>
  );
};

