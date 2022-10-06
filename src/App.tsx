import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { getQuizContent } from "./data/quiz-content";

import "./styles/styles.scss";

export type AnswerKey = {
  questionNumber: number;
  usersGuess: number;
  correctAnswer: number;
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

  const questionsLeftToAnswer = scorecard
    .filter((answerKey) => answerKey.usersGuess === 0)
    .map((answerKey) => answerKey.questionNumber);

  return (
    <div className="App">
      <div className="hero is-fullheight">
        <LazyLoadImage
          src={require("./assets/mta-map.jpg")}
          width="100%"
          height="100%"
          effect="blur"
        />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Name That Subway Station</h1>
            <p className="subtitle">
              A quiz to test your knowledge of NYC transit
            </p>
            <br />
            <p className="byline">By Jose Martinez</p>
          </div>
        </div>
      </div>

      {blankScorecard.map(({ questionNumber }) => (
        <Question
          key={questionNumber}
          questionNumber={questionNumber}
          submitGuess={submitGuess}
        />
      ))}

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
