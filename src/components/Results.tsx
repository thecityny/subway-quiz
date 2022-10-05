import { getQuizContent } from "../data/quiz-content";
import { getStationFromId } from "../data/stations";

export const Results: React.FC<{ userGuesses: number[] }> = ({
  userGuesses,
}) => {
  const quizAnswers = getQuizContent().map(
    (question) => question.correctAnswer
  );

  let score = 0;
  userGuesses.forEach((guess, i) => {
    if (guess === quizAnswers[i]) {
      score++;
    }
  });

  return (
    <div>
      <p>
        You scored a {score} out of {quizAnswers.length}!
      </p>
      {quizAnswers.map((answer, i) => (
        <p>
          For question {i + 1}, you answered{" "}
          {getStationFromId(userGuesses[i])?.name}. The correct answer was{" "}
          {getStationFromId(answer)?.name}.
        </p>
      ))}
    </div>
  );
};
