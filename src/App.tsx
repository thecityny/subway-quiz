import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { getQuizContent } from "./data/quiz-content";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./styles/app.scss";
import { Footer, Header } from "components/HeaderFooter";

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
    <article>
      <Header />
      <div className="app">
        <div className="hero is-fullheight is-relative is-align-items-center">
          <LazyLoadImage
            src={require("./assets/mta-map.jpg")}
            width="100%"
            height="100%"
            effect="blur"
          />
          <div className="hero-body">
            <div className="copy-container has-text-centered">
              <h1 className="title">Name that Subway Station</h1>
              <p className="subtitle mb-6">
                Do you know NYC’s transit system as well as THE CITY’s transit
                reporter?
              </p>
              <span className="byline">
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
              </span>
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

        <div className="hero is-fullheight" id="scorecard">
          <div className="hero-body">
            <div className="container scorecard-container">
              <h1 className="title is-spaced has-text-centered">Scorecard</h1>
              {questionsLeftToAnswer.length > 0 ? (
                <div className="has-text-centered">
                  <p className="subtitle mb-2">
                    Oops! You're not finished with the quiz yet...
                  </p>
                  <p className="subtitle">
                    Please go back and answer{" "}
                    {questionsLeftToAnswer.length > 1 ? (
                      <>
                        questions{" "}
                        <b>
                          {questionsLeftToAnswer.slice(0, -1).join(", ")}, and{" "}
                          {questionsLeftToAnswer.slice(-1)}
                        </b>
                      </>
                    ) : (
                      <>
                        question <b>{questionsLeftToAnswer}</b>
                      </>
                    )}
                  </p>
                  <AnchorLink
                    href={`#q${questionsLeftToAnswer[0]}`}
                    className="button is-dark mt-4"
                  >
                    Go Back
                  </AnchorLink>
                </div>
              ) : (
                <Results scorecard={scorecard} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};
