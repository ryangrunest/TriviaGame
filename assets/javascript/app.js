
	// init counter for correctly and incorrectly answered quiz questions
	var correctCount;
	var incorrectCount;
	// counter for questions
	var questionCount = 0;

	// array of questions to load
	var questions = [14,
		{
			// question 1
			// html
			// correct answer
		}, 
		{
			// question 2
			// html
			// correct answer
		}
	];

	//push start page html to container
	$('.jumbotron').html('<h1>Steve Jobs Trivia!</h1><h3 class="mt-5">You have x amount of time to <br>answer as many questions correct as possible</h3><button type="button" id="startButton" class="btn btn-info mt-5 btn-lg">Click Here To Start!</button>');

	// when start button clicked..
	$('#startButton').on('click', function() {
		questionCount++;

		// clear jumbotron html
		$('.jumbotron').html('');
		// load first question into jumbotron html
		$('.jumbotron').html(questions[questionCount]);
	});

