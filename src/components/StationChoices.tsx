import React from "react";
import { AmplitudeEvent, logAmplitudeEventWithData } from "./Amplitude";
import { getStationFromId, Train } from "../data/stations";
import classnames from "classnames";

export const ColoredLineIcons: React.FC<{ trains: Train[] }> = ({ trains }) => (
    <span>
      {trains.map((train) => (
        <span className={`line-icon line-${train}`} key={train}>
          {train}
        </span>
      ))}
    </span>
  );

  type StationChoicesProps = {
    userGuess: number;
    correctAnswer: number;
    choicesList: number[];
    handleGuess: (stationID: number, setLocalStorage?: boolean) => void;
    questionNumber: number;
  };
  

const StationChoices: React.FC<StationChoicesProps> = ({
    userGuess, 
    correctAnswer, 
    choicesList, 
    handleGuess,
    questionNumber
}) => {
    return(
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
    </>)
};

export default StationChoices