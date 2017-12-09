console.log('Hello from app.js')

// questions
var panel = $("#quiz-area")

var questions = [
	{
		question: "Who's the only quarterback that has not started for the Dallas Cowboys?",
		answers: ["Tony Romo ", "Quincy Carter ", "Matt Cassell ", "Matt Schaub "],
		correctAnswer: "Matt Schaub"
	}, {
		question: "Who is the all time leader for points in the Mavericks?",
		answers: ["Jason Kidd ", "Michael Finley ", "Dirk Nowitzki ", "Steve Nash"],
		correctAnswer: "Dirk Nowitzki"
	},
	{
		question: "How many Super Bowl wins do the Dallas Cowboys have?",
		answers: ["5 ", "4 ", "6 ", "3"],
		correctAnswer: "5"
	},
	{
		question: "What year did the Dallas Stars win their only Stanley Cup?",
		answers: ["2000 ", "1999 ", "1988 ", "1969"],
		correctAnswer: "1999"
	},
	{
		question: "How many games did the Mavericks defeat the Heat in for the 2011 NBA Championship title?",
		answers: ["7 ", "5 ", "6 ", "4 "],
		correctAnswer: "6"
	}

]
// var check = questions.forEach(function(question) {
// 	console.log("I am question", question.answers)
// 	for (var i = 0; i < question.answers.length; i++) {
// 		question.answers[i]
// 		panel.append(`<input type='radio' name=question-${i} value='${question.answers[i]}'`)
// 	}

// 	console.log("I am answer", question.correctAnswer)
// })

// console.log(check)

// var time;

$("#question-1").append(questions[0].question);
$("#question-2").append(questions[1].question);
$("#question-3").append(questions[2].question);
$("#question-4").append(questions[3].question);
$("#question-5").append(questions[4].question);

for (var i = 0; i < questions.length; i++) {
		$
	}
}

// var game = {

// 	correct: 0,
// 	incorrect: 0,
// 	counter: 120,

// 	countdown: function() {
// 		game.counter--;
// 		$("#counter-number").html(game.counter);
// 		if (game.counter === 0 ) {
// 			console.log("GAME OVER MAN")
// 			game.done()
// 		}
// 	}
	

	// start: function() {
	// 	// start countdown

	// 	// remove the start button

	// 	// create a nested forloop taht appends the questions to the game div
		
	// 	// append the done button.

	// 	// call done when button is clicked, or timer runs out.
	// }


	

// 	done: function() {
// 		// go through which answer you checked for each question,

// 		// then compare the answer to the correct answer

// 		// return this.result()
// 	},

// 	result: function() {
// 		// clear the timer

// 		// append html with global variables "correct answers and incorrect answers"

// 		// reappend a start button
// 	}

// }


// // timer that will hold the set interval

// // game object

// // create event listener on "start button" that starts the game