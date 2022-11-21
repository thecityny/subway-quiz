import React from "react";

export type QuestionContent = {
  photo: string;
  caption: React.ReactNode;
  correctAnswer: number;
};

export const getQuizContent: () => QuestionContent[] = () => [
  {
    photo: require("../assets/images/q1.jpg"),
    caption: <>At which station can you find these stylish signs?</>,
    correctAnswer: 636,
  },
  {
    photo: require("../assets/images/q2.jpg"),
    caption: <>Which stop is this at?</>,
    correctAnswer: 20,
  },
  {
    photo: require("../assets/images/q3.jpg"),
    caption: <>Which station are these tiles at?</>,
    correctAnswer: 609,
  },
  {
    photo: require("../assets/images/q4.jpg"),
    caption: (
      <>
        If you pay attention to exits you’ll have seen this one. Where is it at?
      </>
    ),
    correctAnswer: 164,
  },
  {
    photo: require("../assets/images/q5.jpg"),
    caption: <>At which subway station can you see this sign?</>,
    correctAnswer: 628,
  },
  {
    photo: require("../assets/images/q6.jpg"),
    caption: (
      <>
        Which subway station has these cool platform benches by @MTAArtsDesign?
      </>
    ),
    correctAnswer: 604,
  },
  {
    photo: require("../assets/images/q7.jpg"),
    caption: (
      <>
        At which Manhattan subway hub can you find Sol Lewitt’s “Whirls and
        twirls”?
      </>
    ),
    correctAnswer: 614,
  },
  {
    photo: require("../assets/images/q8.jpg"),
    caption: <>Where is this? Hint: it’s the end of the line.</>,
    correctAnswer: 447,
  },
  {
    photo: require("../assets/images/q9.jpg"),
    caption: <>Which subway stop is this?</>,
    correctAnswer: 461,
  },
  {
    photo: require("../assets/images/q10.jpg"),
    caption: (
      <>
        One of the few subway stops located at ground level, which one is this?
      </>
    ),
    correctAnswer: 436,
  },
  {
    photo: require("../assets/images/q11.jpg"),
    caption: <>Where in the system can you buy bitcoin?</>,
    correctAnswer: 334,
  },
];
