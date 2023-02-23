import React, { useState } from "react";
import { Quiz } from "components/Quiz";
import { getQuizContent } from "data/quiz-content";

// Need to pass the subway animation down from here


// also I'm not sure why getQuizContent needs to be a function ?? 
export const App = () => {

  return (
    <Quiz 
      title = 'Name That NYC Subway Station'
      subtitle = 'Do you know the subway system as well as THE CITY’s transit reporter?'
      getFunction = {getQuizContent}
    />
  );
};
