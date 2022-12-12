import { AnswerKey } from "../App";
import { getStationFromId } from "../data/stations";
import { ColoredLineIcons } from "./Question";
import classnames from "classnames";

// @ts-ignorets-ignore
import { ReactComponent as TwitterIcon } from "../assets/social-icons/twitter-white.svg";
// @ts-ignorets-ignore
import { ReactComponent as EmailIcon } from "../assets/social-icons/email-white.svg";

const resultsText = [
  "As our mayor once said: Go back to Ohio.",
  "There’s no Metrocard in your wallet, is there?",
  "No, this isn’t a commuter railroad.",
  "Transfer… to another city.",
  "Maybe take the ferry instead.",
  "The MTA thanks you for riding.",
  "Good service.",
  "Your train car lines up to the right exit, every time.",
  "Welcome to New York City.",
  "Fine, you can stay.",
  "Congratulations! You know as much about the subway as THE CITY’s transit reporter, Jose Martinez.",
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

  const resetSavedScore = () => {
    scorecard.forEach((answer) => {
      localStorage.removeItem(`stationGuess-${answer.questionNumber}`);
    });
  };

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
              Tweet my score
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
              Email my score
              <span className="icon ml-1 p-1">
                <EmailIcon />
              </span>
            </a>
            <button
              className="button is-restart"
              onClick={() => {
                resetSavedScore();
                window.location.reload();
                window.scrollTo(0, 0);
              }}
            >
              Take it again <span className="icon-text ml-1">↺</span>
            </button>
          </div>
        </div>
        <div className="column is-2 is-underlined">
          <p className="is-hidden-mobile">Question</p>
        </div>
        <div className="column is-5 is-underlined">
          <p>Your answer</p>
        </div>
        <div className="column is-5 pr-0 is-underlined ">
          <p>Correct answer</p>
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
                  i === 0 && "is-first-answer",
                  gotAnswerCorrect
                    ? "has-text-weight-bold"
                    : "has-text-weight-light"
                )}
              >
                {gotAnswerCorrect ? (
                  <span className="tag is-success">#{i + 1} ✓</span>
                ) : (
                  <>#{i + 1}</>
                )}
              </div>
              <div
                key={`2-${i}`}
                className={classnames(
                  "column",
                  "is-5",
                  i === 0 && "is-first-answer",
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
                  i === 0 && "is-first-answer",
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
