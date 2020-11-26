//Quiz Loading Function
//This function is used to load the quiz layer to show up all the quiz points and when clicking the quiz points you can answer the quesitons
//NB: keeping staying same variable with the httpServer! Or it cannot be defined!
//the codes here adapted from Week 6 Practical, author: Dr.	Claire Ellul


var client; 
var Quiz; 
var QuizLayer; 
var QuizPoints;
var url;
var Quizjson;

//Loading quizs function
function getQuizPoints(){
	Quiz=new XMLHttpRequest(); 
	url='http://developer.cege.ucl.ac.uk:'+httpPortNumber+'/getQuizPoints/'+httpPortNumber;
	Quiz.open('GET',url,true);
	Quiz.onreadystatechange=processQuizPoints;
	Quiz.send();
}

//Response of getting quiz points
function processQuizPoints(){
	if (Quiz.readyState<4){
		console.log('Loading Quiz now');
	}
	else if(Quiz.readyState===4){
		if(Quiz.status>=200 && Quiz.status<300){
			QuizPoints=Quiz.responseText;
			QuizLayer(QuizPoints);
		}  
	}
}

//convert the quiz points into GeoJSON format and show up in the map when clicking the points
function QuizLayer(QuizPoints){
	Quizjson = JSON.parse(QuizPoints);
	QuizLayer = L.geoJSON(Quizjson,{
		pointToLayer: function(feature, latlng){
			var htmlString = "<DIV id='popup'" + feature.properties.id + "><h5>" + feature.properties.question_title + "</h5>";
			htmlString = htmlString + "<p>" + feature.properties.question_text + "</p>";
			htmlString = htmlString + "<input type='radio' name='answer' id='" + feature.properties.id + " 1'/>" + feature.properties.answer_1 + "<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id='" + feature.properties.id + " 2'/>" + feature.properties.answer_2 + "<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id='" + feature.properties.id + " 3'/>" + feature.properties.answer_3 + "<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id='" + feature.properties.id + " 4'/>" + feature.properties.answer_4 + "<br><br />";
			htmlString = htmlString + "<button onclick='checkAnswer(" + feature.properties.id + "); return false;'> Submit Answer</button>";
			htmlString = htmlString + "<div id=answer" + feature.properties.id + " hidden>" + feature.properties.correct_answer + "</div>";
			htmlString = htmlString + "</div>";				
			return L.marker(latlng, {icon: testMarkerOrange}).bindPopup(htmlString);
			}
			}).addTo(mymap);
			mymap.fitBounds(QuizLayer.getBounds());
			}

//Answering Checking function
//When answering the question, it will show the client whether the answer submitted is correct or not 
var answer;
var correct_answer;
var answer_selected;
var postString;

function checkAnswer(questionID){
	var answer=document.getElementById('answer'+questionID).innerHTML;
	var correct_answer=false;
	answerSelected = 0;	
	postString = '&question_id=' + questionID;
	for (var i=1; i<5; i++){
		if (document.getElementById(questionID + ' ' + i).checked){
			answer_selected=1;
			postString = postString + "&answer_selected=" + i;
			}
		//Case 1: correct answer
		if ((document.getElementById(questionID+ " " + i).checked) && (i == answer)){ 
			alert("Well done!");
			correct_answer = true;
			QuizLayer.eachLayer(function(layer){
				if (layer.feature.properties.id == questionID){
					return L.marker([layer.getLatLng().lat, layer.getLatLng().lng], {icon: testMarkerBlue}).addTo(mymap); 
				}
			})
			postString = postString + '&correct_answer=' + i;
		}
	}
	//Case 2: incorrect answer selected
	if (correct_answer===false){ 
		alert('Better luck next time!');
		QuizLayer.eachLayer(function(layer){
			if (layer.feature.properties.id == questionID){
				return L.marker([layer.getLatLng().lat, layer.getLatLng().lng], {icon: testMarkerRed}).addTo(mymap); 
			}
		})
	}
	mymap.closePopup();	
	uploadAnswer(postString); 
}

//processing uploadAnswer to the server
function uploadAnswer(postString){
	client = new XMLHttpRequest();
	postString = postString + "&port_id=" + httpPortNumber;
	//url = 'http://developer.cege.ucl.ac.uk:' + httpPortNumber + '/reflectData';
	url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber + '/uploadAnswer';
	client.open("POST", url, true);
	client.onreadystatechange = answerUpload;
	try {
		client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}
	catch (e) {
	}
	client.send(postString);
	}


function answerUpload(){
	if (client.readyState === 4){
		document.getElementById("showQuestion").innerHTML = client.responseText;
		GetCorrectAnswer();
	}
}
	
//create a function to remove the quiz layer
function removeQuizLayer(){
	alert ('The Quiz Points will be removed! ');
	mymap.removeLayer(QuizLayer);
}	


//get the number of correct answers	
var RightAnswer; 
var CorrJSON;

function GetCorrectAnswer(){
	RightAnswer = new XMLHttpRequest();
	var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber + "/numCorrectAnswers/" + httpPortNumber ;
	RightAnswer.open("GET", url, true); // send to server
	RightAnswer.onreadystatechange = processCorrectAnswer;
	RightAnswer.send();
}


// AJAX response function
function processCorrectAnswer(){
	if (RightAnswer.readState < 4){
		console.log('Please be patient.');
	}
	else if (RightAnswer.readyState === 4) { 
		if (RightAnswer.status >= 200 && RightAnswer.status < 300) {
			CorrJSON = JSON.parse(RightAnswer.responseText)[0];
			CorrJSON = CorrJSON.num_questions;
			alert('Congratulations! There are' + CorrJSON + 'questions you have answered correctly! ');
			
		}
	}
}

//Loading the quiz points automatically every time when opening the quiz app 
//so that the client can follow the quiz point to play this quiz answering game! 
document.addEventListener('DOMContentLoaded',function(){getQuizPoints();},false); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	