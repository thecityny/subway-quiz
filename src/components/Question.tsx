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
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      <p className="has-text-black">
        {item.name} <ColoredLineIcons trains={item.trains} />{" "}
        <span className="light-text">{getFullBoroughName(item.borough)}</span>
      </p>
    );
  };

  return (
    <div id={`q${questionNumber}`}>
      <div className="columns question is-align-items-center is-hidden-mobile">
        {/* DESKTOP AND TABLET COLUMNS: */}
        <div className="column is-7 has-text-centered">
          <LazyLoadImage src={content.photo} width="100%" effect="blur" />
        </div>
        <div className="column is-1">
          <div className="subway-line is-relative is-flex is-align-items-center is-justify-content-center">
            <div className="subway-station" />
          </div>
        </div>
        <div className="column is-4">
          <div className="title">
            #{questionNumber}{" "}
            <span className="ml-2 has-text-black has-text-weight-normal">
              {content.caption}
            </span>
          </div>
          <p className="mb-2">Your guess:</p>
          <div className="station-search-bar">
            <ReactSearchAutocomplete
              items={MTA_STATIONS}
              onSelect={(result) => submitGuess(result.id, questionNumber)}
              onSearch={(input) => setSearchText(input)}
              onClear={() => submitGuess(0, questionNumber)}
              inputSearchString={searchText}
              placeholder="Search stations"
              maxResults={5}
              showIcon={false}
              formatResult={formatResult}
            />
          </div>
          {!!searchText && (
            <AnchorLink
              href={
                questionNumber > getQuizContent().length - 1
                  ? "#scorecard"
                  : `#q${questionNumber + 1}`
              }
              className="button is-dark mt-4"
            >
              {questionNumber > getQuizContent().length - 1
                ? "See Results"
                : "Next ↓"}
            </AnchorLink>
          )}
        </div>
      </div>
      {/* MOBILE COLUMNS: */}
      <div className="columns question is-mobile is-hidden-tablet">
        <div className="column is-1">
          <div className="subway-line is-relative is-flex is-align-items-center is-justify-content-center">
            <div className="subway-station" />
          </div>
        </div>
        <div className="column is-11">
          <LazyLoadImage src={content.photo} width="100%" effect="blur" />
          <br />
          <div className="title">
            #{questionNumber}{" "}
            <span className="ml-2 has-text-black has-text-weight-normal">
              {content.caption}
            </span>
          </div>
          <p className="mb-2">Your guess:</p>
          <div className="station-search-bar">
            <ReactSearchAutocomplete
              items={MTA_STATIONS}
              onSelect={(result) => submitGuess(result.id, questionNumber)}
              onSearch={(input) => setSearchText(input)}
              onClear={() => submitGuess(0, questionNumber)}
              inputSearchString={searchText}
              placeholder="Search stations"
              maxResults={5}
              showIcon={false}
              formatResult={formatResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
