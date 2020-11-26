# Questions APP
# Question Setting App


## Requirement Applications
- Equipments: A computer
- Software used to develop: Bitvise SSH Client 8.29 in computers, PhoneGap Developer 1.8.4 APK
- Browser: Google Chrome 73.0.3683.86 (NB: Ctrl+Shift+I to check the error from the Console)

## Deployment
The Question Setting App is the pairing app with the quiz answering app and also is part of the “UCL POP QUIZ. 

The Question Setting App is developed by HTML5 and Javascript. A phonegap app built up by terminal of the Bitvise SSH Client, using programme statement w3.includeHTML() to connect the website page which is used to set quiz points. Each value of context clients entered will be sent to the server and saved. Seven blankets are set in the inner website page, including, question title, question context, answer 1/2/3/4 respectively and correct answer. Clients have to fill up all the blankets or they cannot submit it, meanwhile the correct answer must be 1/2/3/4 or there is an alert and also cannot be submitted. 

Phonegap app is an open source mobile device development framework designed to enable developers to develop cross-platform mobile device applications using Web APIs such as HTML, Javascript, and CSS. What the developer needs to do is entering a simple command into the terminal. The app can be opened by typing the command “phonegap serve” into the terminal. 

All the functions developed here are basically using Javascript and the solution is mainly the asynchronous JavaScript and XML (AJAX) which is used on the client side to create multiple web applications. According to the AJAX, for the function of uploading questions, writing a function to get every value by using the programming statement getElementById entered by clients and processing it to send the data through the way postString to the server to save. As for loading existing quiz points automatically, the app needs to send the request to acquire each value from the server when opening the app. For getting the detailed coordinates from the leaflet map, onMapClick and getElementById can be used here. 

One more thing is worth to be explained that every user from different port will be detected when the app is opened. That is why different users from different ports can continuously use this app.

## Testing
For testing the code, the tester can select random points on the map and then set random questions on it then submit it, opening the server to see whether the information has already been saved. 
- Opening the question setting app in the browser Google Chrome. Clicking on the map to select different points and setting different questions, it is better if there is a certain distance between points since there is 5 to 10 meters error in the Global Navigation Satellite System (GNSS). That is also the major reason that set 50 meter as the certain distance to require the closest quiz point. 
- After submitting the questions, tester can refresh the page to check whether the quiz points are displayed on the map.
- If there is any question about the app, tester can click the top right corner to click the “Help” to check the user guide. 


## Functions used in the app 
HTML or JS file       | Functions                       | Reference    | 
--------------------- | :--------------------------------------: | :-----------: |
|index.html |foundation of the app| modify from the phonegap|
|QuestionsSetting.html|A form for clients to set questions|Week 5 Practical, author: Dr. Claire Ellul|
userGuide1.html       | A user guide for clients to understand how to use this app  | develped by myself|
|QuestionsSetting.js|When clicking the map, the coordinates show up automatically and fill in the blanket automatically|adapted from https://github.com/pkkj/SkyExplorer1/blob/master/t100_ts/TS/Common/MapUtils.ts & https://gis.stackexchange.com/questions/88273/triggering-click-event-on-leaflet-map |
LoadQuiz.js           | Loading existing quiz points| Week 6 Practical, author: Dr. Claire Ellul|
Markers.js            | Setting Makers                  |Week 3 Practical, author: Dr. Claire Ellul|
 leaflet.awesome-markers.js|Leaflet.AwesomeMarkers |http://leafletjs.com & https://github.com/lvoogdt |
 leaflet.js|The map show in the app|Week 2 Practical, author: Dr. Claire Ellul |
 rhMenu.js |Setting Menues in the upper right corner | Week 3 Practical, author: Dr. Claire Ellul|
 startup.js |Loading the functions automatically | Week 4 Practical, author: Dr. Claire Ellul|
 |uploadData.js|Uploading questions to the server| Week 5 Practical, author: Dr. Claire Ellul|
 utilities.js |Detecting the port ID | Week 5 Practical, author: Dr. Claire Ellul|
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
