import { useState } from "react";
import { MTA_STATIONS } from "../data/stations";

type QuestionProps = {
  questionNumber: number;
  submitAnswer: (a: number) => void;
};

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitAnswer,
}) => {
  const [stationSelection, setStationSelection] = useState(0);

  return (
    <div>
      <h1>Question {questionNumber}</h1>
      {MTA_STATIONS.map((station, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              value="Female"
              checked={stationSelection === station.stationId}
              onChange={() => setStationSelection(station.stationId)}
            />
            {station.name} {station.lines}
          </label>
        </div>
      ))}
      {stationSelection > 0 && (
        <button onClick={() => submitAnswer(stationSelection)}>
          Next Question
        </button>
      )}
    </div>
  );
};
