import React from "react";
import { Quiz } from "components/Quiz";
import { getQuizContent } from "data/quiz-content";
import { SubwayStationIcon } from "components/SubwayStationIcon";
import { getStationFromId } from "data/stations";

// @ts-ignorets-ignore
import { ReactComponent as Animation } from "./assets/images/lines-animation.svg";

// I'm not sure why getQuizContent needs to be a function ?? 

// Byline names come from our .env for seo purposes?

// going to pass stationIcons down through context instead of prop drilling

// interface MyComponentWrapperProps {
//   children: React.ReactNode;
// }

// export const MyContext = React.createContext({
  
// })

// const MyComponentWrapper = ({children}: MyComponentWrapperProps) => {
//   const contextValue = {
//     stationIcons: SubwayStationIcon
//   };

//   return (
//     <MyContext.Provider value={contextValue}> {children} </MyContext.Provider>
//   )
// }

// add getStationId to pass down-- call it matchIdToName
// rename getFunction to something else-- getQuestionsAnswersImages
//  getQuestionsAnswersImages when you pass in your unique getFunction it calls your unique data for the quiz, can model this after our quiz-content file
//  should I pass these down through context???

// also need to pass down getResultsText

// get rid of some index.html code when making this public 

//need to rename station icons attribute to be less specific, rename to icons
export const App = () => {
  
  return (
    <Quiz 
      title = 'LEGENDARY PIZZA'
      subtitle = 'Do you know the subway system as well as THE CITY’s transit reporter?'
      getQuizData = { getQuizContent }
      animation = { <Animation /> }
      stationIcons = { <SubwayStationIcon /> }
      // matchIdToName = { getStationFromId }
    />
  );
};