import React from "react";

type YourGuessProps = {
    userGuess: number;
    correctAnswer: number;
  };

const YourGuess: React.FC<YourGuessProps> = ({userGuess, correctAnswer}) => {
    return (
        <p className="mb-2">
            Your guess:{" "}
            {userGuess === correctAnswer ? (
            <span className="has-text-success has-text-weight-bold">
                Correct!
            </span>
            ) : !!userGuess ? (
            <span className="has-text-danger has-text-weight-bold">Wrong.</span>
            ) : (
            <></>
            )}
        </p>
    )
}

export default YourGuess
