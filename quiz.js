// const questionObj = {
// 	category: "Food & Drink",
// 	id: "qa-1",
// 	correctAnswer: "Three ",
// 	options: ["Two", "Three ", "Four", "Five"],
// 	question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
	{
		correctAnswer: "Three ",
		options: ["Two", "Three ", "Four", "Five"],
		question: "How many pieces of bun are in a Mcdonald's Big Mac?",
	},
	{
		correctAnswer: "L. Frank Baum",
		options: [
			"Suzanne Collins",
			"James Fenimore Cooper",
			"L. Frank Baum",
			"Donna Leon",
		],
		question: "Which author wrote 'The Wonderful Wizard of Oz'?",
	},
	{
		correctAnswer: "Atlanta United",
		options: [
			"Atlanta United",
			"Atlanta Impact",
			"Atlanta Bulls",
			"Atlanta Stars",
		],
		question: "Which of these is a soccer team based in Atlanta?",
	},
	{
		correctAnswer: "A Nanny",
		options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
		question: "A female goat is known as what?",
	},
	{
		correctAnswer: "P. L. Travers",
		options: [
			"J. R. R. Tolkien",
			"P. L. Travers",
			"Lewis Carroll",
			"Enid Blyton",
		],
		question: "Which author wrote 'Mary Poppins'?",
	},
];

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextbtn = document.getElementById("next");
let score = 0;
let currentQuestion = 0;

displayQuestion(quesJSON);
nextbtn.addEventListener("click", () => {
	displayNextQuestion();
});

function displayQuestion(questionObj) {
	const { correctAnswer, options, question } = questionObj[currentQuestion];

	questionEl.textContent = question;

	(function shuffle(arr) {
		for (let index = arr.length - 1; index >= 0; index--) {
			const j = Math.floor(Math.random() * arr.length - 1) + 1;
			[arr[index], arr[j]] = [arr[j], arr[index]];
		}
	})(options);

	options.forEach((option, index) => {
		const optionbtn = document.createElement("button");
		optionEl.append(optionbtn);
		optionbtn.id = `opt-${index + 1}`;
		optionbtn.classList.add("option");
		optionbtn.innerText = options[index];
	});

	// console.log(optionEl);

	evaluateAnswer(questionObj);
}

function evaluateAnswer(questionObj) {
	const answers = document.querySelectorAll(".option");

	answers.forEach((answer) => {
		answer.addEventListener("click", (e) => {
			if (
				e.target.innerText.trim() ===
				questionObj[currentQuestion].correctAnswer.trim()
			) {
				score++;
				scoreEl.innerText = `Score ${score}`;
			} else {
				score = score - 0.25;
				scoreEl.innerText = `Score ${score}`;
			}

			displayNextQuestion();
		});
	});
}

function displayNextQuestion() {
	if (currentQuestion < quesJSON.length - 1) {
		optionEl.textContent = "";
		currentQuestion++;
		displayQuestion(quesJSON);
	} else {
		questionEl.innerText = "Quiz Completed !";
		optionEl.textContent = "";
		nextbtn.remove();
	}
}
