import { useState } from "react";
import {
  Borough,
  getFullBoroughName,
  getTrainsForBorough,
  MTA_BOROUGHS,
  MTA_STATIONS,
  MTA_TRAINS,
  Train,
} from "../data/stations";

type QuestionProps = {
  questionNumber: number;
  submitAnswer: (a: number) => void;
};

const ColoredLineIcons: React.FC<{ trains: Train[] }> = ({ trains }) => (
  <span>
    {trains.map((train) => (
      <span className={`line-icon line-${train}`} key={train}>
        {train}
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
  const [trainSelection, setTrainSelection] = useState<Train | null>(null);

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
        getTrainsForBorough(boroughSelection).map((train, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                value={train}
                checked={trainSelection === train}
                onChange={() => setTrainSelection(train)}
              />
              <ColoredLineIcons trains={[train]} />
            </label>
          </div>
        ))}
      <br />
      {boroughSelection &&
        trainSelection &&
        MTA_STATIONS.filter(
          (station) =>
            station.borough === boroughSelection &&
            station.trains.includes(trainSelection)
        ).map((station, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                value={station.stationId}
                checked={stationSelection === station.stationId}
                onChange={() => setStationSelection(station.stationId)}
              />
              {station.name} <ColoredLineIcons trains={station.trains} />
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
