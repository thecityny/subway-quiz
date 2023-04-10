import React from "react";

export type QuestionContent = {
  photo: string;
  caption: React.ReactNode;
  correctAnswer: number;
  otherChoices: number[];
};

export const getResultsText = () => 
  [
    "Stand clear of the closing doors, please.", // Score: 0/10
    "Stand clear of the closing doors, please.", // Score: 1/10
    "Stand clear of the closing doors, please.", // Score: 2/10
    "You are being momentarily held by a signal error.", // Score: 3/10
    "You are being momentarily held by a signal error.", // Score: 4/10
    "You are being momentarily held by a signal error.", // Score: 5/10
    "You’re in a New York State of Mind.", // Score: 6/10
    "You’re in a New York State of Mind.", // Score: 7/10
    "All signals are green, service is good.", // Score: 8/10
    "All signals are green, service is good.", // Score: 9/10
    "Congratulations! You know as much about the subway as THE CITY’s transit reporter, Jose Martinez.", // Score: 10/10
  ];
;

export const getQuizContent: () => QuestionContent[] = () => [
  {
    photo: require("../assets/images/q1.jpg"),
    caption: <>At what major Brooklyn hub can you find these stylish signs?</>,
    correctAnswer: 636,
    otherChoices: [175, 621, 620],
  },
  {
    photo: require("../assets/images/q2.jpg"),
    caption: (
      <>
        At which Manhattan subway station can you find Sol LeWitt’s “Whirls and
        Twirls”?
      </>
    ),
    correctAnswer: 614,
    otherChoices: [602, 635, 310],
  },
  {
    photo: require("../assets/images/q3.jpg"),
    caption: (
      <>
        Which Manhattan station has these tiles, one color of which matches the
        trains that pass through?
      </>
    ),
    correctAnswer: 609,
    otherChoices: [607, 407, 9],
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
    otherChoices: [164, 341, 198],
  },
  {
    photo: require("../assets/images/q5.jpg"),
    caption: (
      <>
        At which subway station in the Financial District can you see this sign?
      </>
    ),
    correctAnswer: 628,
    otherChoices: [622, 329, 327],
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
    otherChoices: [603, 293, 364],
  },
  {
    photo: require("../assets/images/q7.jpg"),
    caption: (
      <>
        This train yard is right next to a sports stadium. What is the closest
        subway station?
      </>
    ),
    correctAnswer: 448,
    otherChoices: [58, 501, 617],
  },
  {
    photo: require("../assets/images/q8.jpg"),
    caption: (
      <>
        At this fully aboveground station in Queens, you can transfer between
        three trains. Which subway stop is this?
      </>
    ),
    correctAnswer: 461,
    otherChoices: [273, 278, 101],
  },
  {
    photo: require("../assets/images/q9.jpg"),
    caption: (
      <>
        This is one of the few subway stops located inside at ground level in a
        borough made up almost entirely of underground stations. What’s its
        name?
      </>
    ),
    correctAnswer: 436,
    otherChoices: [610, 447, 143],
  },
  {
    photo: require("../assets/images/q10.jpg"),
    caption: <>In which station can you find this bitcoin machine?</>,
    correctAnswer: 334,
    otherChoices: [413, 223, 283],
  }
];
