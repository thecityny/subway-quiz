import { AnswerKey } from "../App";
import { getStationFromId } from "../data/stations";
import { ColoredLineIcons } from "./Question";
import classnames from "classnames";

// @ts-ignorets-ignore
import { ReactComponent as TwitterIcon } from "../assets/social-icons/twitter-white.svg";
// @ts-ignorets-ignore
import { ReactComponent as EmailIcon } from "../assets/social-icons/email-white.svg";

const resultsText = [
  "Go back to Ohio.",
  "You take taxis a lot, right?",
  "No, this isn’t a commuter railroad.",
  "Maybe take the ferry instead.",
  "Transfer… to another city.",
  "Congratulations, you did half as well as our transit reporter, Jose Martinez.",
  "The MTA thanks you for riding.",
  "Good service.",
  "Welcome to New York City.",
  "Fine, you can stay.",
  "Congratulations! You know as much about the subway transit reporter, Jose Martinez.",
];

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
    `https://twitter.com/intent/tweet?text=Quiz: Name that Subway Station | My score: ${score}/11 ${resultsInEmojis} ${window.location.href}`
  );

  const linkToEmail = encodeURI(
    `mailto:?subject=I scored ${score}/11 on THE CITY's Name that Subway Station Quiz &body=My results: ${resultsInEmojis}. Check it out here: ${window.location.href}`
  );

  return (
    <div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-12">
          <p className="subtitle has-text-centered">
            You scored a{" "}
            <b>
              {score} out of {scorecard.length}
            </b>
            . {resultsText[score]}
          </p>
        </div>
        <div className="column is-12 mb-2">
          <div className="buttons is-centered">
            <a
              href={linkToTweet}
              target="_blank"
              rel="noopener noreferrer"
              className="button is-twitter"
            >
              Tweet my Score
              <span className="icon ml-1 p-1">
                <TwitterIcon />
              </span>
            </a>
            <a
              href={linkToEmail}
              target="_blank"
              rel="noopener noreferrer"
              className="button is-dark"
            >
              Email my Score
              <span className="icon ml-1 p-1">
                <EmailIcon />
              </span>
            </a>
          </div>
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
                key={`1-${i}`}
                className={classnames(
                  "column",
                  "is-2",
                  gotAnswerCorrect
                    ? "has-text-weight-bold"
                    : "has-text-weight-light"
                )}
              >
                #{i + 1}{" "}
                {gotAnswerCorrect && (
                  <span className="line-icon has-background-success">✓</span>
                )}
              </div>
              <div
                key={`2-${i}`}
                className={classnames(
                  "column",
                  "is-5",
                  gotAnswerCorrect
                    ? "has-text-weight-bold"
                    : "has-text-weight-light"
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
                key={`3-${i}`}
                className={classnames(
                  "column",
                  "is-5",
                  gotAnswerCorrect
                    ? "has-text-weight-bold"
                    : "has-text-weight-light"
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
    </div>
  );
};
