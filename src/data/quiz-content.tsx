import React from "react";

export type QuestionContent = {
  photo: string;
  caption: React.ReactNode;
  correctAnswer: number;
};

export const getQuizContent: () => QuestionContent[] = () => [
  {
    photo: require("../assets/1.jpg"),
    caption: <p>At which station can you find these stylish signs?</p>,
    correctAnswer: 636,
  },
  {
    photo: require("../assets/2.jpg"),
    caption: <p>Which stop is this at?</p>,
    correctAnswer: 622,
  },
  {
    photo: require("../assets/3.jpg"),
    caption: <p>Which station are these tiles at?</p>,
    correctAnswer: 609,
  },
  {
    photo: require("../assets/4.jpg"),
    caption: (
      <p>
        If you pay attention to exits you’ll have seen this one. Where is it at?
      </p>
    ),
    correctAnswer: 164,
  },
  {
    photo: require("../assets/5.jpg"),
    caption: <p>At which subway station can you see this sign?</p>,
    correctAnswer: 628,
  },
];
