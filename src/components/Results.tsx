import { AnswerKey } from "../App";
import { getStationFromId } from "../data/stations";
import { ColoredLineIcons } from "./Question";
import classnames from "classnames";

// @ts-ignorets-ignore
import { ReactComponent as TwitterIcon } from "../assets/social-icons/twitter-white.svg";

export const Results: React.FC<{ scorecard: AnswerKey[] }> = ({
  scorecard,
}) => {
  let score = 0;
  let resultsInEmojis = "";
  scorecard.forEach((answer) => {
    if (answer.usersGuess === answer.correctAnswer) {
      score++;
      resultsInEmojis = resultsInEmojis + "✅";
    } else {
      resultsInEmojis = resultsInEmojis + "❌";
    }
  });

  const linkToTweet = encodeURI(
    `https://twitter.com/intent/tweet?text=Quiz: Name that Subway Station | My score: ${score}/11 ${resultsInEmojis}`
  );

  return (
    <div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-12">
          <p className="subtitle has-text-centered">
            You scored a {score} out of {scorecard.length}
          </p>
        </div>
        <div className="column is-2">
          <p className="is-underlined is-hidden-mobile">Question</p>
        </div>
        <div className="column is-5">
          <p className="is-underlined">Your answer</p>
        </div>
        <div className="column is-5 pr-0">
          <p className="is-underlined">Correct answer</p>
        </div>
        {scorecard.map((answer, i) => {
          const usersStation = getStationFromId(answer.usersGuess);
          const correctStation = getStationFromId(answer.correctAnswer);
          const gotAnswerCorrect = usersStation === correctStation;

          return (
            <>
              <div
                className={classnames(
                  "column",
                  "is-2",
                  gotAnswerCorrect && "has-text-weight-bold"
                )}
              >
                #{i + 1}
              </div>
              <div
                className={classnames(
                  "column",
                  "is-5",
                  gotAnswerCorrect && "has-text-weight-bold"
                )}
              >
                {!!usersStation ? (
                  <p>
                    {usersStation.name}{" "}
                    <ColoredLineIcons trains={usersStation.trains} />
                  </p>
                ) : (
                  <p>Unknown</p>
                )}
              </div>
              <div
                className={classnames(
                  "column",
                  "is-5",
                  gotAnswerCorrect && "has-text-weight-bold"
                )}
              >
                {!!correctStation ? (
                  <p>
                    {correctStation.name}{" "}
                    <ColoredLineIcons trains={correctStation.trains} />
                  </p>
                ) : (
                  <p>Unknown</p>
                )}
              </div>
            </>
          );
        })}
      </div>
      <p className="has-text-centered mt-6">
        <a
          href={linkToTweet}
          target="_blank"
          rel="noopener noreferrer"
          className="button is-twitter"
        >
          Share my score
          <span className="icon ml-3 p-1">
            <TwitterIcon />
          </span>
        </a>
      </p>
    </div>
  );
};
