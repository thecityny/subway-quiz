import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { getQuizContent } from "./data/quiz-content";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./styles/app.scss";

export type AnswerKey = {
  questionNumber: number;
  usersGuess: number;
  correctAnswer: number;
};

type Author = {
  name: string;
  url: string;
};

export const App = () => {
  let blankScorecard: AnswerKey[] = getQuizContent().map(
    ({ correctAnswer, ...rest }, i) => ({
      questionNumber: i + 1,
      usersGuess: 0,
      correctAnswer,
    })
  );

  const [scorecard, updateScorecard] = useState<AnswerKey[]>(blankScorecard);
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

  const byline = JSON.parse(process.env.REACT_APP_AUTHOR as string) as Author[];

  const questionsLeftToAnswer = scorecard
    .filter((answerKey) => answerKey.usersGuess === 0)
    .map((answerKey) => answerKey.questionNumber);

  return (
    <div className="App">
      <div className="hero is-fullheight is-relative is-align-items-center">
        <LazyLoadImage
          src={require("./assets/mta-map.jpg")}
          width="100%"
          height="100%"
          effect="blur"
        />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">{process.env.REACT_APP_SITE_NAME}</h1>
            <p className="subtitle">{process.env.REACT_APP_SEO_DESCRIPTION}</p>
            <br />
            <p className="byline">
              By{" "}
              {byline.map((author: Author, i: number) => (
                <span key={i} className="author">
                  <a href={author.url}>{author.name}</a>
                  {i < byline.length - 2
                    ? ", "
                    : i < byline.length - 1
                    ? " and "
                    : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
        <AnchorLink
          href="#quiz"
          className="start-button is-flex is-align-items-center is-justify-content-center"
        >
          Start
          <br />↓
        </AnchorLink>
      </div>

      <div id="quiz">
        {blankScorecard.map(({ questionNumber }) => (
          <Question
            key={questionNumber}
            questionNumber={questionNumber}
            submitGuess={submitGuess}
          />
        ))}
      </div>

      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-spaced">Results</h1>
            {questionsLeftToAnswer.length > 0 ? (
              <p className="subtitle">
                Oops! You're not finished with the quiz yet.
                <br />
                Please go back and answer{" "}
                {questionsLeftToAnswer.length > 1
                  ? `questions ${questionsLeftToAnswer
                      .slice(0, -1)
                      .join(", ")}, and ${questionsLeftToAnswer.slice(-1)}`
                  : `question ${questionsLeftToAnswer}`}
              </p>
            ) : (
              <Results scorecard={scorecard} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
