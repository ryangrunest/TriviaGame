
	// init counter for correctly and incorrectly answered quiz questions
	var correctCount = 0;
	var incorrectCount = 0;
	// counter for questions
	var questionCount = 0;

	// Variable that will hold setInterval
	var intervalID;

	var clockRunning = false;
	var time = 10;
	var ranOutOfTime = 0;


	// load first question
	function loadFirstQuestion() {
		// clear jumbotron html
		$('.jumbotron').html('');
		// add question and answers divs to jumbotron
		$('.jumbotron').html('<div>Time Left: <span class="timer">10</span></div><div class="question"></div><div class="answers"></div>');
		// load first question into question sub container
		$('.question').html(questions[questionCount].question);
		// load possible answers into answers sub container
		$('.answers').html(questions[questionCount].answers);		
	};

	//count func called by setInterval
	function count() {
		// subtract time by 1
		time--;
		if (time === 0) {
			ranOutOfTime++;
			loadHTML();
		};
		// clear span
		$('.timer').html('');
		// update UI with current time
		$('.timer').append(time);
	};
	// resets timer to 10 secs
	function resetTimer() {
		time = 10;
	};
	// start timer func
	function startTimer() {
		// if clockRunning is false
		if (!clockRunning) {
			// set to true
			clockRunning = true;
			// instantiate intervalID w setInterval
			intervalID = setInterval(count, 1000)
		};
	};
	function stopTimer() {
		clearInterval(intervalID);
		clockRunning = false;
	};
	// pretty self explanatory ;)
	function clearHTML() {
		// clear html
		$('.question').html('');$('.answers').html('');
	};
	function loadFinalPage() {
		stopTimer();
		// load totals of incorrect and correct count
		$('.jumbotron').html('<h1>Totals:</h1><h3 class="mt-5">Correct: <span class="correct"></span></h3><h3 class="mt-5">Incorrect: <span class="incorrect"></span></h3><h3 class="mt-5">Ran Out Of Time: <span class="ranOutOfTime"></span> Time(s)</h3>');
		$('.correct').text(correctCount);
		$('.incorrect').text(incorrectCount);
		$('.ranOutOfTime').text(ranOutOfTime);
	};


	// load question and answers divs with html based on question count
	function loadHTML() {
		resetTimer();
		// clear divs for questions and answers
		clearHTML();
		// add one to count
		questionCount++;
		if (questionCount < 4) {
			$('.question').html(questions[questionCount].question);
			$('.answers').html(questions[questionCount].answers);
			$('.timer').html('10');
		} else if (questionCount >=4) {
			loadFinalPage();
		};
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
	$('.jumbotron').html('<h1>Steve Jobs Trivia!</h1><h3 class="mt-5">Test your knowledge on the intricacies of Steve Jobs! <br> You have 15 seconds per question <br>At the end you will find out your score!</h3><button type="button" class="btn btn-info mt-5 btn-lg startButton">Click Here To Start!</button>');
	// create click listener for answers
		$('.jumbotron').on('click', $('h3'), function(h3) {

			// alert(event.target.id);
			// checking that start button was clicked
			if (event.target.classList.contains('jumbotron')) {
				
			} else if (event.target.classList.contains('startButton')) {
				// load ui
				loadFirstQuestion();
				// start timer
				startTimer();

			} else { // for h3's (questions)
				// if correctly guessed
				if (event.target.id == questions[questionCount].value) {
					alert('correct');
					// increase correct count
					correctCount++;
					// if incorrect guess
				} else if (event.target.id != questions[questionCount].value) {
					alert('incorrect');
					// increase incorrect count
					incorrectCount++;
				}; 
				loadHTML();			
			};
		});

		if (time === 0) {
				loadHTML();
			};


