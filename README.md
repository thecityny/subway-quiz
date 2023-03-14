# Name that Subway Station Quiz: a News Apps by THE CITY

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Check it out live](https://projects.thecity.nyc/nyc-subway-quiz/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### How to use The City's quiz code

*** This assumes a basic knowledge of javascript. ***

In order to create your own quiz using The City's subway quiz code, you will need to edit the App.tsx, quiz-content.tsx, stations.ts files as well as the .env file. 

First start by editing the quiz-content.tsx and stations.ts files. You can rename the stations.ts file to be more applicable to your own quiz topic. 

In the quiz-content file, the getQuizContent function returns an array of objects. Each object is a question with an associated image, and answer id for the correct answer and answer id's for incorrect answer options. Each id is associated with an id and corresponding name and other metadata in the stations.ts file

The quiz-code does not rely on a back-end server and all the question data runs client-side. 

In the quiz-content file, replace the array objects' key-value pairs with your own questions, images, answer, and answer options. You can put your desired .jpg images in the src/assets/images folder. 

Our quiz only has 10 questions but you can add or subtract as many questions as you like and everything will still render correctly.

If you want to use our code without having to edit any other files aside from the ones mentioned above, you will need to create a corresponding file, equivalent to stations.ts. When you run the quiz code, the information in stations.ts will show up as the answer options. 

For example, if you have a quiz called Legendary Pizza and you have a question that asks, 'What is the oldest pizza parlor in NYC?'. You will need to give it an id number and in stations.ts give information about that id number (name of pizza restaurant, any other relevant quiz answer info, etc.) For example, in our subway quiz in addition to the name of the subway station, the lines for the specific station are relevant to our quiz answer options so we added that data as well (it shows up in our answer options when you take the quiz) but it's possible that the id for your quiz only needs to refer to one thing such as the pizza parlor name. 

In quiz-content.tsx you will also need to update the return array of the getResultsText function. The length of the results text array is equivalent to the number of questions. Depending on the number of questions that are correct/incorrect the quiz taker will see one of the statements from the results array in the scorecard that appears at the end of the quiz after all the questions have been answered.

For example, in reference to our own results array, if the quiz-taker had only gotten one question right, at the end of the quiz on the scorecard they would see 'Stand clear of the closing doors, please." Which is the 0th item in the array (question #1)

After you have finished creating your own data files (quiz-content.tsx and stations.ts) with your quiz questions and answers, you can move on to editing the App.tsx file. Replace the title and subtitle with your own title and subtitles. If you have an an svg animation you'd like to use you can replace our animation with your own by importing the animation as a react component like we did in line 8 of App.tsx. Otherwise just delete that line.

You will also need to replace the SubwayStationIcon with your own icon component if you'd like to have an icon appear next to your answer options. For example, in our quiz next to the name of the subway stations in the answer options, appears each of the subway station line icons for that subway station. If this was a pizza quiz we could replace it with an icon of a pizza. 

Lastly, you will need to update the .env file with your correct values for the unchanging variables which are used in the index.html and a few other places in the code but only the .env needs to be changed. 