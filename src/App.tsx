import React from "react";
import { Quiz } from "components/Quiz";
import { getQuizContent } from "data/quiz-content";
import { SubwayStationIcon } from "components/SubwayStationIcon";

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

export const App = () => {
  
  return (
    <Quiz 
      title = 'Name That NYC Subway Station'
      subtitle = 'Do you know the subway system as well as THE CITY’s transit reporter?'
      getFunction = { getQuizContent }
      animation = { <Animation /> }
      stationIcons = { <SubwayStationIcon /> }
    />
  );
};