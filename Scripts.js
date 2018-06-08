
var qSet = [
	q0 = {src:"images/1.jpg", question:"'The Luncheon of the Boating Party', was painted by famous impressionist artist. Who is the author of this painting?", ans1:"Edgar Degas", ans2:"Pierre-Auguste Renoir", ans3:"Claude Monet", ans4:"Eduardo Manet", correct: 2},
	
	q1 = {src:"images/2.jpg", question:"‘Maid in London’ made by famous, anonymous, British graffiti artist, political activist, film director and all-purpose provocateur. What is his artistic pseudonym?", ans1:"Stik", ans2:"Blu", ans3:"Banksy", ans4:"Sickboy", correct: 3},
	
	q2 = {src:"images/3.jpg", question:"This is picture of well-known museum. What is its name?", ans1:"Louvre in Paris", ans2:"National Gallery in London", ans3:"Prado Museum in Madrid", ans4:"Musée d'Orsay in Paris", correct: 1},
	
	q3 = {src:"images/4.jpg", question:"‘Artist is present’ – was an artistic performance in which artist-author was sitting as a part of an exhibition maintain direct eye contact with single, particular visitors, who wanted to take part in her performance. What is the name of this Serbian performance artist?", ans1:"Mila Jovović", ans2:"Elvira Santamaría", ans3:"Linda Montano", ans4:"Marina Abramović", correct: 4},
	
	q4 = {src:"images/5.jpg", question:"This Czech Art Nouveau painter and decorative artist, known best for his distinctive, decorative style. What is his name? ", ans1:"Alphonse Mucha", ans2:"Koloman Moser", ans3:"Gustav Klimt", ans4:"Jan Zrzavý", correct: 1},
	
	q5 = {src:"images/6.jpg", question:"Author of this distinctive piece was an American painter and a major figure in the abstract expressionist movement. What was his name?", ans1:"Robert Delaunay", ans2:"Jackson Pollock", ans3:"Mark Rothko", ans4:"Wassily Kandinsky", correct: 2},
	
	q6 = {src:"images/6.jpg", question:"’ Sagrada Familia’ is a temple designed by famous Spanish Architect – Antonio Gaudi. Where is it located", ans1:"Madrid", ans2:"Jackson Pollock", ans3:"Mark Rothko", ans4:"Wassily Kandinsky", correct: 3}
];

var qNums = new Array(5);
var correctF = "Correct!"
var wrongF = "Wrong :( "
var points = 0;
var qIndex = 0;

$(document).on( "pageinit", '#game', function() { 
    console.log( "ready!" );
	startGame();
		
});

function startGame()
{
	points = 0;
	qIndex = 0;
	
	for( var i = 0 , len = qNums.length; i < len ; i++)
{
	do{
		var num = Math.floor(Math.random() * 6);
	}while(qNums.indexOf(num) > -1 );
	qNums[i] = num;
}
	console.log(qNums);
	getQuestion(qIndex);
	
}

function getQuestion(index)
{
	document.getElementById("feedbackBox").classList.add("hidden");
	document.getElementById("qImg").src = qSet[qNums[index]].src;
	document.getElementById("questionTxt").innerHTML = qSet[qNums[index]].question;
	$('#btn1').text(qSet[qNums[index]].ans1).prop("disabled", false).button("refresh");
	$('#btn2').text(qSet[qNums[index]].ans2).prop("disabled", false).button("refresh");
	$('#btn3').text(qSet[qNums[index]].ans3).prop("disabled", false).button("refresh");
	$('#btn4').text(qSet[qNums[index]].ans4).prop("disabled", false).button("refresh");
}


function getValue(val)
{
	console.log(val);
	var ansVal = val;
	
	if(ansVal == qSet[qNums[qIndex]].correct)
	{
		document.getElementById("feedback").innerHTML = correctF;
		points++;
	}
	else{
		document.getElementById("feedback").innerHTML = wrongF;
	}

	$('#btn1').prop("disabled", true).button("refresh");
	$('#btn2').prop("disabled", true).button("refresh");
	$('#btn3').prop("disabled", true).button("refresh");
	$('#btn4').prop("disabled", true).button("refresh");
	if(qIndex == 2)
		document.getElementById("fin").classList.remove("hidden");
	else
		document.getElementById("feedbackBox").classList.remove("hidden");
	
	qIndex++;
}

function nextQ()
{
	getQuestion(qIndex);
}

















