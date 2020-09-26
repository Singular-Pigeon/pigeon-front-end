const triviaQuestions = [
	'What kind of animal is a pigeon?',
	'How many feet does a pigeon have?',
	'If Jimmy has 300 lollipops and gives 46 to Jim-Bob how many lollipops does Jimmy have?',
	'Who is the godfather of soul?',
	'What is the last name of the 44th president of the United States of America?',
	'What is the best selling flavor of Doritos?',
	'What is the name of the longest river in North America?',
	'In which country did pigeon racing begin?',
	"Where does the music video for the hit song, 'Baby' by Justin Bieber, take place?",
	'What era of music did Mozart compose in?',
	"In Tolkien's 'Lord of the Rings', what is the name of the horse given to Gandalf by the people of Rohan?",
	"In NBC's 'The Office', what is the name of Michael Scott's hero in his screenplay, 'Threat Level Midnight'?",
	"What is the name of Luke's sister in the movie, 'Star Wars Episode V: The Empire Strikes Back'?.",
	'What is the largest animal that lives in the sea?',
	'As of the year 2020, who is the best-selling musical artist of all time?',
	"Who was the artist responsible for painting the series of paintings titled, 'Water Lilies'(aka 'Nymphéas')?",
	"In J.K. Rowling's series, 'Harry Potter', what is the name of Rubius Hagrids's dog?",
	"What big screen motion picture features the first appearance of Disney's Micky Mouse?",
	'What is the maximum capacity of a floppy disk?',
	'What Scottish poet’s works inspired the book titles Of Mice and Men and Catcher in the Rye?',
];
//correct answer bank
const triviaCorrectAnswerBank = [
	'Bird',
	'2',
	'254',
	'James Brown',
	'Obama',
	'Nacho Cheese',
	'Mississippi River',
	'Belgium',
	'A bowling alley',
	'Classical era',
	'Shadowfax',
	'Michael Scarn',
	'Princess Leia',
	'Blue Whale',
	'Michael Jackson',
	'Claude Monet',
	'Fang',
	'Steamboat Willie',
	'2.8 megabytes',
	'Robert Burns',
];
//full bank of answers
const triviaFullAnswerBank = [
	['Bird', 'Reptile', 'Dragon', 'Human'],
	['4', '42', '0', '2'],
	['244', '264', '254', '0'],
	['James Brown', 'Elvis Presley', 'Jimi Hendrix', 'Barry Bays'],
	['Garfield', 'Obama', 'Bush', 'Dub-Ya Bush'],
	['Nacho Cheese', 'Cool Ranch', 'Sweet and Spicy Chili', 'Spicy Nacho Cheese'],
	['Michigan', 'Nile River', 'Yazoo River', 'Mississippi River'],
	['Germany', 'France', 'Belgium', 'Cleveland, MS'],
	['A bowling alley', 'Airport', 'Cruise Ship', 'The White House'],
	['Baroque Era', 'Classical era', 'Modern Era', 'Renaissance Era'],
	['Seabiscuit', 'Black Beauty', 'Mystery...or Debbi', 'Shadowfax'],
	['Michael Scarn', 'Sichael Mott', 'Dwigt', 'Anakin'],
	['Darth Vader', 'Voldemort', 'Princess Leia', 'Jabba The Hutt'],
	['Water Bear', 'Blue Whale', 'Capybara', 'Giraffe'],
	['Lil Wayne', 'Aaron Neville', 'Beethoven', 'Michael Jackson'],
	['Lawson King', 'Michelangelo', 'Claude Monet', 'Leonardo DiCaprio'],
	['Fang', 'Seabiscuit', 'Air Bud', 'Harry Potter'],
	['Toy Story', 'Steamboat Willie', 'Superman', 'Stuart Little'],
	['2.8 megabytes', '88 MPH', '7 TB', '1'],
	[
		'Kumiko Shimizu',
		'Nicholas Sparks',
		'Robert Louis Stevenson',
		'Robert Burns',
	],
];
//specific index
let triviaIndex = 0;
//check answer function
function checkAnswer(button) {
	if (
		button.innerHTML === triviaCorrectAnswerBank[triviaIndex] &&
		triviaIndex < 19
	) {
		triviaIndex++;
		console.log(triviaIndex);
		response.innerHTML = 'CORRECT! Your pigeon grows stronger!';
		response.classList.remove('response-doNot-show');
		setTimeout(function () {
			response.classList.add('response-doNot-show');
		}, 3000);
		eggWidth = eggWidth + 20;
		egg.style.width = `${eggWidth}%`;
		levelCount++;

		resetButton();
	} else if (triviaIndex >= 19) {
		response.innerHTML = 'Game is over, you wasted so much time of your life.';
		response.classList.remove('response-doNot-show');

		winnerMessage.classList.add('active');
	} else {
		console.log(triviaIndex);
		response.innerHTML = "WRONGO! Let's give that another go, little fella.";
		response.classList.remove('response-doNot-show');
		setTimeout(function () {
			response.classList.add('response-doNot-show');
		}, 4000);
	}
}
//function for changing egg to pigeon
const pigeonChange = () => {
	//change pigeon class to active
	//change egg class to deactive
};

//counters
let eggWidth = 30;
let levelCount = 1;
//query selectors
const question = document.querySelector('.trivia-question');
let egg = document.querySelector('.egg-image');

let button1 = document.querySelector('.trivia1');
let button2 = document.querySelector('.trivia2');
let button3 = document.querySelector('.trivia3');
let button4 = document.querySelector('.trivia4');
let response = document.querySelector('.trivia-response');
let index = document.querySelector('.trivia-index');
let winnerMessage = document.querySelector('.winner-not-active');
let closeButton = document.querySelector('.close-modal');
let modalButton = document.querySelector('.modal');
let levelCounter = document.querySelector('.span-level');
closeButton.addEventListener('click', function () {
	closeModal();
});
modalButton.addEventListener('click', function () {
	clickModal();
});
const closeModal = () => {
	winnerMessage.classList.remove('active');
};
const clickModal = () => {
	winnerMessage.classList.add('active');
};
console.log(winnerMessage);
//innerHTML setting
question.innerHTML = triviaQuestions[triviaIndex];
button1.innerHTML = triviaFullAnswerBank[triviaIndex][0];
button2.innerHTML = triviaFullAnswerBank[triviaIndex][1];
button3.innerHTML = triviaFullAnswerBank[triviaIndex][2];
button4.innerHTML = triviaFullAnswerBank[triviaIndex][3];
levelCounter.innerHTML = `${levelCount}`;

//resetting buttons
function resetButton() {
	levelCounter.innerHTML = `${levelCount}`;
	question.innerHTML = triviaQuestions[triviaIndex];
	button1.innerHTML = triviaFullAnswerBank[triviaIndex][0];
	button2.innerHTML = triviaFullAnswerBank[triviaIndex][1];
	button3.innerHTML = triviaFullAnswerBank[triviaIndex][2];
	button4.innerHTML = triviaFullAnswerBank[triviaIndex][3];
}
//button event listeners
button1.addEventListener('click', function () {
	checkAnswer(button1);
});
button2.addEventListener('click', function () {
	checkAnswer(button2);
});
button3.addEventListener('click', function () {
	checkAnswer(button3);
});
button4.addEventListener('click', function () {
	checkAnswer(button4);
});
