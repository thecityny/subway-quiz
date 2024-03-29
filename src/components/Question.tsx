import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classnames from "classnames";
import { getStationFromId, Train } from "../data/stations";
import { getQuizContent } from "../data/quiz-content";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "react-lazy-load-image-component/src/effects/blur.css";
import { AmplitudeEvent, logAmplitudeEventWithData } from "./Amplitude";

type QuestionProps = {
  questionNumber: number;
  submitGuess: (a: number, qn: number) => void;
};

export const ColoredLineIcons: React.FC<{ trains: Train[] }> = ({ trains }) => (
  <span>
    {trains.map((train) => (
      <span className={`line-icon line-${train}`} key={train}>
        {train}
      </span>
    ))}
  </span>
);

const shuffleArray = (array: any[]) => {
  let newArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [array[j], array[i]];
  }
  return newArray;
};

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitGuess,
}) => {
  const { photo, caption, correctAnswer, otherChoices } =
    getQuizContent()[questionNumber - 1];

  const [userGuess, setUserGuess] = useState(0);

  const handleGuess = (stationID: number, setLocalStorage?: boolean) => {
    setUserGuess(stationID);
    submitGuess(stationID, questionNumber);
    if (setLocalStorage) {
      localStorage.setItem(`stationGuess-${questionNumber}`, `${stationID}`);
    }
  };

  const [choicesList, setChoicesList] = useState([
    correctAnswer,
    ...otherChoices,
  ]);

  // Shuffle choices on first render:
  useEffect(() => {
    setChoicesList(shuffleArray([correctAnswer, ...otherChoices]));

    if (!!localStorage.getItem(`stationGuess-${questionNumber}`)) {
      const stationID = parseInt(
        localStorage.getItem(`stationGuess-${questionNumber}`) as string
      );
      handleGuess(stationID);
    }
    // eslint-disable-next-line
  }, []);

  const StationChoices = () => (
    <>
      <p className="mb-2">
        Your guess:{" "}
        {userGuess === correctAnswer ? (
          <span className="has-text-success has-text-weight-bold">
            Correct!
          </span>
        ) : !!userGuess ? (
          <span className="has-text-danger has-text-weight-bold">Wrong.</span>
        ) : (
          <></>
        )}
      </p>
      <div className="station-choices">
        {choicesList.map((stationID) => {
          const station = getStationFromId(stationID);
          return (
            !!station && (
              <button
                className={classnames(
                  "button",
                  "is-fullwidth",
                  "mb-2",
                  !!userGuess && stationID === correctAnswer && "is-success",
                  !!userGuess &&
                    stationID === userGuess &&
                    stationID !== correctAnswer &&
                    "is-failure",
                  !!userGuess && "is-static"
                )}
                key={stationID}
                disabled={!!userGuess && stationID !== userGuess}
                onClick={() => {
                  handleGuess(stationID, true);
                  logAmplitudeEventWithData(
                    `answerQuestion${questionNumber}` as AmplitudeEvent,
                    {
                      gotQuestionRight: stationID === correctAnswer,
                    }
                  );
                }}
              >
                <p className="mr-2">{station.name}</p>{" "}
                <ColoredLineIcons trains={station.trains} />
              </button>
            )
          );
        })}
      </div>
    </>
  );

  return (
    <div id={`q${questionNumber}`}>
      <div className="columns question is-align-items-center is-hidden-mobile">
        {/* DESKTOP AND TABLET COLUMNS: */}
        <div className="column is-7 has-text-centered">
          <LazyLoadImage src={photo} width="100%" effect="blur" />
        </div>
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
        <div className="column is-4">
          <h1 className="mt-6 mb-0">#{questionNumber}</h1>
          <h2 className=" has-text-weight-bold mb-4">{caption}</h2>
          <StationChoices />
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
        </div>
      </div>
      {/* MOBILE COLUMNS: */}
      <div className="columns question is-mobile is-hidden-tablet is-1">
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
        <div className="column is-11">
          <LazyLoadImage src={photo} width="100%" effect="blur" />
          <h1 className="mt-4 mb-0">#{questionNumber}</h1>
          <h2 className="has-text-weight-bold mb-4">{caption}</h2>
          <StationChoices />
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
        </div>
      </div>
    </div>
  );
};
