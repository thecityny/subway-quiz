import { AnswerKey } from "../App";
import { getStationFromId } from "../data/stations";
import { ColoredLineIcons } from "./Question";

export const Results: React.FC<{ scorecard: AnswerKey[] }> = ({
  scorecard,
}) => {
  let score = 0;
  scorecard.forEach((answer) => {
    if (answer.usersGuess === answer.correctAnswer) {
      score++;
    }
  });

  return (
    <div className="columns is-multiline is-mobile">
      <div className="column is-12">
        <p className="subtitle has-text-centered">
          You scored a {score} out of {scorecard.length}
        </p>
      </div>
      <div className="column is-2">
        <p className="is-underlined">Question</p>
      </div>
      <div className="column is-5">
        <p className="is-underlined">Your answer</p>
      </div>
      <div className="column is-5">
        <p className="is-underlined">Correct answer</p>
      </div>
      {scorecard.map((answer, i) => {
        const usersStation = getStationFromId(answer.usersGuess);
        const correctStation = getStationFromId(answer.correctAnswer);

        return (
          <>
            <div className="column is-2">#{i + 1}</div>
            <div className="column is-5">
              {!!usersStation ? (
                <p>
                  {usersStation.name}{" "}
                  <ColoredLineIcons trains={usersStation.trains} />
                </p>
              ) : (
                <p>Unknown</p>
              )}
            </div>
            <div className="column is-5">
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
  );
};
