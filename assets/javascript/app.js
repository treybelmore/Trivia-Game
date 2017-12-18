var intervalId;
var countdownId;
var correct = 0;
var wrong = 0;
var skipped = 0;
var timer = 15;
var count = 0;
var correctanswer = "";

var questions = [
             {  q: "Following a loss in the NBA finals to the Miami Heat in the 05-06 NBA season the Mavericks set a franchise record in 06-07 with how many wins?", 
             	a1: "60", 
             	a2: "62", 
             	a3: "58", 
             	a4: "67", 
             	correct: "a4"},
             {	q: "Which NFL player is NOT in the Cowboys ring of honor?", 
             	a1: "Jason Witten",
             	a2: "Darren Woodson", 
             	a3: "Mel Renfro", 
             	a4: "Bob Lilly", 
             	correct: "a1"},
             {	q: "Who scored the final goal in overtime for the Dallas Stars in route to their 1999 Stanley Cup victory?", 
             	a1: "Mike Modano",
             	a2: "Joe Nieuwendyk", 
             	a3: "Brett Hull", 
             	a4: "Mike Keane", 
             	correct: "a3"},
             {	q: "In the 2011 World Series the Texas Rangers lost to the St. Louis Cardinals in game 6. Who missed a deep center field catch in the 9th inning that ultimately led to the Cardinals victory?", 
             	a1: "Michael Young",
             	a2: "Josh Hamilton", 
             	a3: "Nelson Cruz", 
             	a4: "Craig Gentry", 
             	correct: "a3"},
             {	q: "How many Super Bowl wins do the Dallas Cowboys have and when was their last win?", 
             	a1: "6, 1994",
             	a2: "5, 1995", 
             	a3: "4, 1995", 
             	a4: "5, 1996", 
             	correct: "a4"},
             ];

$(".start").on("click" , function(event){
    event.preventDefault();
question();
countdown();
resetTimer();
updateTimer();
})	

$(".skip").on("click", function(event){
	event.preventDefault();
count++;
skipped++;
final();
question();
countdown();
updateTimer();	
})

$(".guess").on("click" , function(event){
        response = $(this).attr("value");
        
    if (response == questions[count].correct) {
            correct++;
        	alert("That is correct!");
        }
    else {
    	wrong++;
    	alert("That is wrong!")
    	}
        timerSet = 20;
    count++;
final();
question();
})

function countdown(){
    countdownId = setInterval(timeUp, 1000);
  	intervalId = setInterval(updateTimer, 1000);
}

function resetTimer(){
	countdownId = setInterval(timeUp, 1000);
	timer= 20;
}

function timeUp(){
	$(".answer").html(questions[4]);
		clearInterval(intervalId);
}

function updateTimer(){
	timer --;
	if (timer < 0){
		skipped++;	
		count++;
		final();
		question();
				}
	else {
	 $(".timer").html(timer);
	}
}

function question(){
	console.log(count);
    $(".question").html(questions[count].q);
    $(".button1").html(questions[count].a1);
    $(".button2").html(questions[count].a2);
    $(".button3").html(questions[count].a3);
    $(".button4").html(questions[count].a4);
    $(".questionnumber").html("Question Number " + (count+1) + " of 5!")  
	timeUp();
	resetTimer();
	countdown();
	
}

function final(){
	if (count == 5){
		count =0;
    $(".final-screen").html("<p>Correct Answers: " + correct + "</p>");
    $(".final-screen").append("<p>Incorrect Answers: " + wrong + "</p>"); 
    $(".final-screen").append("<p>Skipped Answers: " + skipped + "</p>");   
    }
}
