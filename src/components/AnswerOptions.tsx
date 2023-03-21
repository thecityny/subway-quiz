import React from "react";
import { AmplitudeEvent, logAmplitudeEventWithData } from "../utils/Amplitude";
import classnames from "classnames";
import YourGuess from "./YourGuess";
import { useContext } from "react";
import { MyContext, MyContextType } from "App";

  type AnswerOptionsProps = {
    userGuess: number;
    correctAnswer: number;
    answerOptions: number[];
    handleGuess: (stationID: number, setLocalStorage?: boolean) => void;
    questionNumber: number;
  };
  

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
    userGuess, 
    correctAnswer, 
    answerOptions, 
    handleGuess,
    questionNumber
}) => {
    const { matchIdToName } = useContext(MyContext) as MyContextType
    const { createIcons } = useContext(MyContext) as MyContextType

    return(
    <>
      <YourGuess
        userGuess = {userGuess}
        correctAnswer = {correctAnswer}
      />
      <div className="station-choices">
        {/* for the subway quiz 'option' refers to a subway station ID and 'answerOptions' is a list of subway id's */}
        {answerOptions.map((option) => {
          // Station is an obj and option is an id of a specific station
          // need to make this not subway specific
          const station = matchIdToName(option);
          return (
            station && (
              <button
                className={classnames(
                  "button",
                  "is-fullwidth",
                  "mb-2",
                  userGuess && option === correctAnswer && "is-success",
                  userGuess &&
                  option === userGuess &&
                  option !== correctAnswer &&
                  "is-failure",
                  userGuess && "is-static"
                )}
                key={option}
                disabled={!!userGuess && option !== userGuess}
                onClick={() => {
                  handleGuess(option, true);
                  logAmplitudeEventWithData(
                    `answerQuestion${questionNumber}` as AmplitudeEvent,
                    {
                      gotQuestionRight: option === correctAnswer,
                    }
                  );
                }}
              >
                {/* need to change this as well */}
                <p className="mr-2">{station.name}</p>{" "}
                {createIcons(station.trains)}
              </button>
            )
          );
        })}
      </div>
    </>)
};

export default AnswerOptions