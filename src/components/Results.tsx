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
    <div className="columns is-multiline">
      <div className="column is-12">
        <p className="subtitle">
          You scored a {score} out of {scorecard.length}
        </p>
      </div>
      {scorecard.map((answer, i) => {
        const usersStation = getStationFromId(answer.usersGuess);
        const correctStation = getStationFromId(answer.correctAnswer);

        return (
          <>
            <div className="column is-half">
              <p>For #{i + 1}, you answered:</p>
              {!!usersStation ? (
                <p>
                  {usersStation.name}{" "}
                  <ColoredLineIcons trains={usersStation.trains} />
                </p>
              ) : (
                <p>Unknown</p>
              )}
            </div>
            <div className="column is-half">
              <p>The correct answer was:</p>
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
