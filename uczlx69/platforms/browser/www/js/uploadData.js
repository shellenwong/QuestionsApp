//Uploading the questions you set
//the codes here adapted from Week 6 Practical, author: Dr.	Claire Ellul

function startDataUpload(){
	alert ('start data upload');	
	//now get the geometry values
	var latitude=document.getElementById('latitude').value;
	var longitude=document.getElementById('longitude').value;
	var postString='latitude='+latitude+'&longitude='+longitude;
	
	//upload the questions and answers options also the correct answers
	var question_title=document.getElementById('question_title').value;
	var question_text=document.getElementById('question_text').value;
	var answer_1=document.getElementById('answer_1').value;
	var answer_2=document.getElementById('answer_2').value;
	var answer_3=document.getElementById('answer_3').value;
	var answer_4=document.getElementById('answer_4').value;
	var correct_answer=document.getElementById('correct_answer').value;
	
	postString=postString+'&question_title='+question_title+'&question_text='+question_text+
	'&answer_1='+answer_1+'&answer_2='+answer_2+'&answer_3='+answer_3+'&answer_4='+answer_4+'&correct_answer='+correct_answer;
	
	try{		//NB try and catch is a couple, should use together or it doesn't work, adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
	if (question_title == "" || question_text == "" || answer_1 == "" || answer_2 == "" || answer_3 == "" || answer_4 == "" || correct_answer == "") throw 'Please fill in all the blankets.'
	if (correct_answer != "1" && correct_answer != "2" && correct_answer != "3" && correct_answer != "4") throw 'Please modify your correct answer, the correct answer should be choosen from the number 1/2/3/4.'
		
	alert (postString);
	processData(postString);		
	}	catch(err) {
		alert(err);
	}
}

var client;   

function processData(postString){
	client=new XMLHttpRequest();
	postString=postString+"&port_id="+httpPortNumber;
	var url='http://developer.cege.ucl.ac.uk:'+httpPortNumber+"/uploadQuestion";	
	//client.open('POST','http://developer.cege.ucl.ac.uk:30281/reflectData',true);
	client.open('POST',url,true);
	client.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	client.onreadystatechange=dataUpload;
    client.send(postString);
}


//create the code to wait for the response from the data server, and process the response once it is received
function dataUpload(){
	//this function listens out for the server to say that the data is ready i.e.has state 4
	if(client.readyState=4){      
	//change the div to show the response
	document.getElementById('dataUploadResult').innerHTML=client.responseText;
	}
}


