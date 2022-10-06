import React from "react";

export type QuestionContent = {
  photo: string;
  caption: React.ReactNode;
  correctAnswer: number;
};

export const getQuizContent: () => QuestionContent[] = () => [
  {
    photo: require("../assets/1.jpg"),
    caption: <>At which station can you find these stylish signs?</>,
    correctAnswer: 636,
  },
  {
    photo: require("../assets/2.jpg"),
    caption: <>Which stop is this at?</>,
    correctAnswer: 622,
  },
  {
    photo: require("../assets/3.jpg"),
    caption: <>Which station are these tiles at?</>,
    correctAnswer: 609,
  },
  {
    photo: require("../assets/4.jpg"),
    caption: (
      <>
        If you pay attention to exits you’ll have seen this one. Where is it at?
      </>
    ),
    correctAnswer: 164,
  },
  {
    photo: require("../assets/5.jpg"),
    caption: <>At which subway station can you see this sign?</>,
    correctAnswer: 628,
  },
];
