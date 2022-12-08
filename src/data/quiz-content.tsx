import React from "react";

export type QuestionContent = {
  photo: string;
  caption: React.ReactNode;
  correctAnswer: number;
};

export const getQuizContent: () => QuestionContent[] = () => [
  {
    photo: require("../assets/images/q1.jpg"),
    caption: (
      <>
        At what major Downtown Brooklyn transfer hub can you find these stylish
        signs?
      </>
    ),
    correctAnswer: 636,
  },
  {
    photo: require("../assets/images/q2.jpg"),
    caption: (
      <>
        At which West Side Manhattan subway hub can you find Sol Lewitt’s
        “Whirls and twirls”?
      </>
    ),
    correctAnswer: 614,
  },
  {
    photo: require("../assets/images/q3.jpg"),
    caption: (
      <>
        Which Midtown Manhattan station has these tiles, one color of which
        matches the trains that pass through it?
      </>
    ),
    correctAnswer: 609,
  },
  {
    photo: require("../assets/images/q4.jpg"),
    caption: (
      <>
        This station connects passengers to a newly renovated space, but if you
        pay attention to exits you’ll see this relic of the past. Where is it?
      </>
    ),
    correctAnswer: 318,
  },
  {
    photo: require("../assets/images/q5.jpg"),
    caption: (
      <>
        At which subway station in the Financial District can you see this sign?
      </>
    ),
    correctAnswer: 628,
  },
  {
    photo: require("../assets/images/q6.jpg"),
    caption: (
      <>
        Which popular Bronx subway station has these cool platform benches by
        MTA Arts & Design?
      </>
    ),
    correctAnswer: 604,
  },
  {
    photo: require("../assets/images/q7.jpg"),
    caption: (
      <>This station is at the end of the line in Queens. Which one is it?</>
    ),
    correctAnswer: 447,
  },
  {
    photo: require("../assets/images/q8.jpg"),
    caption: (
      <>
        At this fully above-ground station in Queens, you can transfer between
        three different trains. Which subway stop is this?
      </>
    ),
    correctAnswer: 461,
  },
  {
    photo: require("../assets/images/q9.jpg"),
    caption: (
      <>
        One of the few subway stops located at ground level, in a borough almost
        entirely made up of underground stations. Which one is this?
      </>
    ),
    correctAnswer: 436,
  },
  {
    photo: require("../assets/images/q10.jpg"),
    caption: (
      <>In which outer-borough station can you find this Bitcoin machine?</>
    ),
    correctAnswer: 334,
  },
];
