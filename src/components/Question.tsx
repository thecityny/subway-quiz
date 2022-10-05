import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  getFullBoroughName,
  MTA_STATIONS,
  Station,
  Train,
} from "../data/stations";
import { getQuizContent } from "../data/quiz-content";

type QuestionProps = {
  questionNumber: number;
  submitGuess: (a: number) => void;
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
  submitGuess,
}) => {
  const content = getQuizContent()[questionNumber - 1];

  const [stationSelection, setStationSelection] = useState(0);

  const handleOnSelect = (item: Station) => {
    setStationSelection(item.id);
  };

  const formatResult = (item: Station) => {
    return (
      <p>
        {item.name} {getFullBoroughName(item.borough)}{" "}
        <ColoredLineIcons trains={item.trains} />
      </p>
    );
  };

  return (
    <div>
      <h1>Question {questionNumber}</h1>
      <LazyLoadImage
        src={content.photo}
        width={600}
        height={400}
        effect="blur"
      />
      <br />
      {content.caption}
      <br />
      <ReactSearchAutocomplete
        items={MTA_STATIONS}
        onSelect={handleOnSelect}
        placeholder="Search stations"
        maxResults={6}
        autoFocus
        formatResult={formatResult}
      />
      {stationSelection > 0 && (
        <button
          onClick={() => {
            submitGuess(stationSelection);
            setStationSelection(0);
          }}
        >
          Next Question
        </button>
      )}
    </div>
  );
};
