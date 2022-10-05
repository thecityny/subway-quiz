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

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  submitGuess,
}) => {
  const content = getQuizContent()[questionNumber - 1];

  const [searchText, setSearchText] = useState("");

  const formatResult = (item: Station) => {
    return (
      <p>
        {item.name} <ColoredLineIcons trains={item.trains} />
        <br />
        <span className="light-text">{getFullBoroughName(item.borough)}</span>
      </p>
    );
  };

  return (
    <div className="columns question py-6">
      <div className="column is-2 has-text-centered">
        <span className="title">#{questionNumber}</span>
      </div>
      <div className="column is-8">
        <LazyLoadImage src={content.photo} width="100%" effect="blur" />
        <div className="container my-5 is-size-4">{content.caption}</div>
        <p className="mb-2">Your guess:</p>
        <div className="station-search-bar">
          <ReactSearchAutocomplete
            items={MTA_STATIONS}
            onSelect={(result) => submitGuess(result.id, questionNumber)}
            onSearch={(input) => setSearchText(input)}
            onClear={() => submitGuess(0, questionNumber)}
            inputSearchString={searchText}
            placeholder="Search stations"
            maxResults={6}
            autoFocus
            showIcon={false}
            formatResult={formatResult}
          />
        </div>
        <p></p>
      </div>
    </div>
  );
};
