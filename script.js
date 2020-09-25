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
	['Bird'],
	['2'],
	['254'],
	['James Brown'],
	['Obama'],
	['Nacho Cheese'],
	['Mississippi River'],
	['Belgium'],
	['A bowling alley'],
	['Classical era'],
	['Shadowfax'],
	['Michael Scarn'],
	['Princess Leia'],
	['Blue Whale'],
	['Michael Jackson'],
	['Claude Monet'],
	['Fang'],
	['Steamboat Willie'],
	['2.8 megabytes'],
	['Robert Burns'],
];
//specific index
let triviaIndex = 0;
//check answer function
function checkAnswer(button) {
	if (button.innerHTML === triviaCorrectAnswerBank[triviaIndex]) {
		triviaIndex++;
		console.log(triviaIndex);
		response.innerHTML = 'Correct! Your Pigeon grows stronger!';
		resetButton();
	} else {
		return (response.innerHTML =
			"WRONGO! Let's give that another go, little fella.");
	}
}
//query selectors
const question = document.querySelector('.trivia-question');
let button1 = document.querySelector('.trivia1');
let button2 = document.querySelector('.trivia2');
let button3 = document.querySelector('.trivia3');
let button4 = document.querySelector('.trivia4');
let response = document.querySelector('.trivia-response');
let index = document.querySelector('.trivia-index');

question.innerHTML = triviaQuestions[triviaIndex];
button1.innerHTML = triviaFullAnswerBank[triviaIndex][0];
button2.innerHTML = triviaFullAnswerBank[triviaIndex][1];
button3.innerHTML = triviaFullAnswerBank[triviaIndex][2];
button4.innerHTML = triviaFullAnswerBank[triviaIndex][3];
index.innerHTML = triviaIndex;
//innerHTML setting
function resetButton() {
	question.innerHTML = triviaQuestions[triviaIndex];
	button1.innerHTML = triviaFullAnswerBank[triviaIndex][0];
	button2.innerHTML = triviaFullAnswerBank[triviaIndex][1];
	button3.innerHTML = triviaFullAnswerBank[triviaIndex][2];
	button4.innerHTML = triviaFullAnswerBank[triviaIndex][3];
	index.innerHTML = triviaIndex;
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
