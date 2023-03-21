import {createContext, ReactElement} from "react";
import { Quiz } from "components/Quiz";
import { getQuizContent } from "data/quiz-content";
import { SubwayStationIcon } from "components/Icon";
import { getStationFromId } from "data/quiz-answers-meta-data";
import { Station } from "data/quiz-answers-meta-data";
// @ts-ignorets-ignore
import { ReactComponent as Animation } from "./assets/images/lines-animation.svg";
import { Train } from "./data/quiz-answers-meta-data";
import { Header } from "components/HeaderFooter";
import { Footer } from "components/HeaderFooter";

// There are too many question components... need to synthesize 

// index.html code 

// change byline names in the .env file 

export type MyContextType = {
  matchIdToName: (id: number) => Station | undefined;
  createIcons: (trains: Train[]) => ReactElement | null;
}

export const MyContext = createContext<MyContextType | null>(null)

// if you don't have icons that you'd like to appear in the answer options and in the scorecard results then erase the if statement and just have createIcons return null
const createIcons = (trains: Train[]) => {
  if (trains) {
    return (<SubwayStationIcon trains = {trains}/>)
  }
  return(null)
}

// why is it when I write the function this way,  it's causing an error for the button element in AnswerOptions
// const createIcons = (trains: Train[]) => {
//   trains ? <SubwayStationIcon trains = {trains}/> : null
// }
// const icons = <SubwayStationIcon trains = {trains}/>

const matchIdToName = getStationFromId

export const App = () => {
  
  return (
    <MyContext.Provider value = {{createIcons, matchIdToName}}>
      <Quiz 
        title = 'LEGENDARY PIZZA'
        subtitle = 'Do you know the subway system as well as THE CITY’s transit reporter?'
        getQuizData = { getQuizContent }
        // animation, header, and footer are optional, if you don't have your own components for these then just erase the property name and assigned variable
        animation = { <Animation /> }
        header = { <Header />}
        footer = { <Footer />}
      />
    </MyContext.Provider>
  );
};