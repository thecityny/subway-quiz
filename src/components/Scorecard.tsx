import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Results } from "./Results";
import { AnswerKey } from "./Quiz";

type ScorecardProps = {
    scorecard: AnswerKey[];
    questionsLeftToAnswer: number[];
    title: string;
  };

const Scorecard: React.FC<ScorecardProps> = ({questionsLeftToAnswer, scorecard, title}) => {
    return(
        <div className="hero is-fullheight" id="scorecard">
          <div className="hero-body">
            <div className="container scorecard-container" id="scorecard">
              <h1 className="title is-spaced has-text-centered">Scorecard</h1>
              {questionsLeftToAnswer.length > 0 ? (
                <div className="has-text-centered">
                  <p className="subtitle mb-2">
                    Oops! You're not finished with the quiz yet!
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
                    .
                  </p>
                  <AnchorLink
                    href={`#q${questionsLeftToAnswer[0]}`}
                    className="button is-dark mt-4"
                  >
                    Go back
                  </AnchorLink>
                </div>
              ) : (
                <Results scorecard={scorecard} title = {title} />
              )}
            </div>
          </div>
        </div>        
    )
}

export default Scorecard