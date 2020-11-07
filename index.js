// Generates the computer's hand
function playComputer() {
	let computerHand = Math.random() * 3;

	// Turns random number into hand
	if (computerHand > 2) {
		computerHand = "rock";
	} else if (computerHand > 1) {
		computerHand = "scissors";
	} else {
		computerHand = "paper";
	}

	return computerHand;
}

function checkWinner(userSign, computerSign) {
	// This goes through all the 9 combinations of hands and determines the winner.
	if (userSign === "rock") {
		if (computerSign === "scissors") {
			return "user";
		} else if (computerSign === "paper") {
			return "computer";
		} else {
			return "tie";
		}
	} else if (userSign === "scissors") {
		if (computerSign === "rock") {
			return "computer";
		} else if (computerSign === "paper") {
			return "user";
		} else {
			return "tie";
		}
	} else {
		if (userSign === "paper") {
			if (computerSign === "rock") {
				return "user";
			} else if (computerSign === "paper") {
				return "tie";
			} else {
				return "computer";
			}
		}
	}
}

// Pits the computer's hand against the user's hand.
function playRound(userSign) {
	// Generates computer hand.
	let computerSign = playComputer();
	
	// Puts Waring Hands onscreen.
	const userPara = document.querySelector('#userPara');
	userPara.textContent = userSign;

	const computerPara = document.querySelector('#computerPara');
	computerPara.textContent = computerSign;

	// Calculates the winner
	let winner = checkWinner(userSign, computerSign);
	
	const results = document.querySelector('#results');
	const userScore = document.querySelector('#userScore');
	const computerScore = document.querySelector('#computerScore');

	if (isNaN(+userScore.textContent)) {
		userScore.textContent = 0;
		computerScore.textContent = 0;
	}

	// Generates and returns the proper result sentence.
	if (winner === "user") {
		results.textContent = "You won!";
		results.style.cssText = "color: green";
		userScore.textContent = +userScore.textContent + 1;
	} else if (winner === "computer") {
		results.textContent = "You lost!";
		results.style.cssText = "color: red";
		computerScore.textContent = +computerScore.textContent + 1;
	} else {
		results.textContent = "You tied!";
		results.style.cssText = "color: black";
	}

	if (+userScore.textContent === 5) {
		userScore.textContent = "You Won!";
	} else if (+computerScore.textContent === 5) {
		userScore.textContent = "You Lost!";
	}
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id);
	});
});