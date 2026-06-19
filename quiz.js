const questionObj = {
	category: "Food & Drink",
	id: "qa-1",
	correctAnswer: "Three ",
	options: ["Two", "Three ", "Four", "Five"],
	question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

questionEl.textContent = question;
options.forEach((option, index) => {
	const optionbtn = document.createElement("button");
	optionEl.append(optionbtn);
	optionbtn.id = `opt-${index + 1}`;
	optionbtn.classList.add("option");
	optionbtn.innerText = options[index];
});

console.log(optionEl);

// addling event to options

const answers = document.querySelectorAll(".option");
let score = 0;

answers.forEach((answer) => {
	answer.addEventListener("click", (e) => {
		if (e.target.innerText.trim() === questionObj.correctAnswer.trim()) {
			score++;
			scoreEl.innerText = score;
		} else {
			score = score - 0.25;
			scoreEl.innerText = score;
		}
	});
});
