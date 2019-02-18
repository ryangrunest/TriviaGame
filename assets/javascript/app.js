
	// init counter for correctly and incorrectly answered quiz questions
	var correctCount;
	var incorrectCount;
	// counter for questions
	var questionCount = 0;

	function clearHTML() {
		// clear html
		$('.question').html('');$('.answers').html('');
	};
	// load question and answers divs with html based on question count
	function loadHTML() {
		$('.question').html(questions[questionCount].question);
		$('.answers').html(questions[questionCount].answers);
	};


	// array of questions to load
	var questions = [
		{ // question1
			// questions html
			question: '<h1>When Did Steve Jobs Meet Steve Wozniak?</h1>',
			// anwers html
			answers: '<h3 id="1">Elementary School</h3><h3 id="2">Middle School</h3><h3 id="3">High School</h3><h3 id="4">College</h3>',
			// correct answer value
			value: 3
		}, 
		{ // question2
			// questions html
			question: '<h1>Was Steve Jobs Adopted?</h1>',
			// html
			answers: '<h3 id="1">Yes!</h3><h3 id="2">No!</h3>',
			// correct answer value
			value: 1
		},
		{
			// questions html
			question: '<h1>What Does Jobs Describe As "One of the two or three most important things I have done in my life"?</h1>',
			// html
			answers: '<h3 id="1">Have Children</h3><h3 id="2">Travel To India</h3><h3 id="3">LSD</h3><h3 id="4">Work For An Apple Orchard</h3>',
			// correct answer value
			value: 3
		},
		{
			// questions html
			question: '<h1>Where Did Jobs Go To College?</h1>',
			// html
			answers: '<h3 id="1">Portland State University</h3><h3 id="2">Arizona State University</h3><h3 id="3">Reed College</h3><h3 id="4">Harvard</h3>',
			// correct answer value
			value: 3
		},
		{
			// questions html
			question: '<h1>What Is The Famous Line Jobs Used At Apple Keynote Events?</h1>',
			// html
			answers: '<h3 id="1">And Thats The Way We Do It</h3><h3 id="2">And One More Thing...</h3><h3 id="3">The Spaceship Has Landed!</h3><h3 id="4">Are You Ready To Rumble?</h3>',
			// correct answer value
			value: 2
		}
	];

	//push start page html to container on load
	$('.jumbotron').html('<h1>Steve Jobs Trivia!</h1><h3 class="mt-5">You have x amount of time to <br>answer as many questions correct as possible</h3><button type="button" class="btn btn-info mt-5 btn-lg startButton">Click Here To Start!</button>');


	// create click listener for answers
		$('.jumbotron').on('click', $('h3'), function(h3) {
			alert(event.target.id);
			if (event.target.classList.contains('startButton')) {
				// clear jumbotron html
				$('.jumbotron').html('');
				// add question and answers divs to jumbotron
				$('.jumbotron').html('<div class="question"></div><div class="answers"></div>');
				// load first question into question sub container
				$('.question').html(questions[questionCount].question);
				// load possible answers into answers sub container
				$('.answers').html(questions[questionCount].answers);
				// questionCount = 0;
			} else {
				if (event.target.id == questions[questionCount].value) {
					alert('correct');
				} else if (event.target.id == questions[questionCount].value) {
					alert('incorrect');
				}; 
				clearHTML();
				questionCount++;
				loadHTML();
			}
			
			

		});

		// when start button clicked..
	$('#startButton').on('click', function() {
		
	});


