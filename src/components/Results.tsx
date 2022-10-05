import { AnswerKey } from "../App";
import { getStationFromId } from "../data/stations";

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
    <div>
      <p>
        You scored a {score} out of {scorecard.length}!
      </p>
      {scorecard.map((answer, i) => (
        <p key={i}>
          For question {i + 1}, you answered{" "}
          {getStationFromId(answer.usersGuess)?.name}. The correct answer was{" "}
          {getStationFromId(answer.correctAnswer)?.name}.
        </p>
      ))}
    </div>
  );
};
