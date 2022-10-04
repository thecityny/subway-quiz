import { useState } from "react";
import {
  Borough,
  getFullBoroughName,
  MTA_BOROUGHS,
  MTA_STATIONS,
} from "../data/stations";

type QuestionProps = {
  questionNumber: number;
  submitAnswer: (a: number) => void;
};

const ColoredLineIcons: React.FC<{ lines: string }> = ({ lines }) => (
  <span>
    {lines.split(" ").map((line) => (
      <span className={`line-icon line-${line}`} key={line}>
        {line}
      </span>
    ))}
  </span>
);

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitAnswer,
}) => {
  const [stationSelection, setStationSelection] = useState(0);
  const [boroughSelection, setBoroughSelection] = useState<Borough | null>(
    null
  );

  return (
    <div>
      <h1>Question {questionNumber}</h1>
      {MTA_BOROUGHS.map((borough, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              value={borough}
              checked={boroughSelection === borough}
              onChange={() => setBoroughSelection(borough)}
            />
            {getFullBoroughName(borough)}
          </label>
        </div>
      ))}
      <br />
      {boroughSelection &&
        MTA_STATIONS.filter(
          (station) => station.borough === boroughSelection
        ).map((station, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                value={station.stationId}
                checked={stationSelection === station.stationId}
                onChange={() => setStationSelection(station.stationId)}
              />
              {station.name} <ColoredLineIcons lines={station.lines} />
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
