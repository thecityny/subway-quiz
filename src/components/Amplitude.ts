import amplitude from "amplitude-js";

const PUBLIC_API_KEY = "6f8da674c6393bcc24b44b05a9675753";
amplitude.getInstance().init(PUBLIC_API_KEY);

export type AmplitudeEvent =
  | "answerQuestion1"
  | "answerQuestion2"
  | "answerQuestion3"
  | "answerQuestion4"
  | "answerQuestion5"
  | "answerQuestion6"
  | "answerQuestion7"
  | "answerQuestion8"
  | "answerQuestion9"
  | "answerQuestion10"
  | "finishedQuiz"
  | "tweetScore"
  | "emailScore"
  | "takeQuizAgain"
  | "seeOtherQuizzes";

type AmplitudeEventData = {
  gotQuestionRight?: boolean;
  finalScore?: number;
};

const logAmplitudeEvent = (e: AmplitudeEvent) =>
  amplitude.getInstance().logEvent(e);
const logAmplitudeEventWithData = (
  e: AmplitudeEvent,
  data: AmplitudeEventData
) => amplitude.getInstance().logEvent(e, data);

export { amplitude, logAmplitudeEvent, logAmplitudeEventWithData };
