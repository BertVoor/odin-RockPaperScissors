let playerScore = 0;
let computerScore = 0;

const resetButton = document.createElement("button");
resetButton.id = "resetButton";
resetButton.innerText = "Play Again";
resetButton.style.display = "inline-block";

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("click", (e) => {
		playRound(e);
	})
);

function getComputerSelection() {
	const choises = ["Rock", "Paper", "Scissors"];
	const computerSelection =
		choises[Math.floor(Math.random() * 3)];
	return computerSelection;
}

function playRound(e) {
	const computerSelection = getComputerSelection();
	const playerSelection = e.target.value;

	if (playerSelection == computerSelection) {
		resultDiv.textContent = "It's a tie!";
	} else if (
		(playerSelection == "Rock" &&
			computerSelection == "Scissors") ||
		(playerSelection == "Paper" &&
			computerSelection == "Rock") ||
		(playerSelection == "Scissors" &&
			computerSelection == "Paper")
	) {
		playerScore++;
		resultDiv.textContent = `${playerSelection} beats ${computerSelection}, you win!`;
	} else {
		computerScore++;
		resultDiv.textContent = `${computerSelection} beats ${playerSelection}, you lose...`;
	}

	scoreDiv.innerText = `Current score:\n ${playerScore} - ${computerScore}`;
	if (playerScore == 5 || computerScore == 5) {
		resultDiv.innerText = `GAME OVER\nFinal score:\n ${playerScore} - ${computerScore}\n `;
		scoreDiv.innerText = ``;
		buttons.forEach((button) => {
			button.style.display = "none";
		});

		document.body.appendChild(resetButton);
		resetButton.style.display = "inline-block";
		resetButton.addEventListener("click", resetGame);
	}
}

function resetGame() {
	buttons.forEach((button) => {
		button.style.display = "inline-block";
	});
	resetButton.style.display = "none";
	resultDiv.innerText = "";
	playerScore = 0;
	computerScore = 0;
}
// if(playerScore > computerScore){
//    console.log(`Supreme victory!\nFinal score: ${playerScore} - ${computerScore}`);
// }
// else if (playerScore == computerScore){
//    console.log(`Everybody is a winner. It's a tie.\nFinal score: ${playerScore} - ${computerScore}`);
// }
// else {
//    console.log(`Better luck next time...\nFinal score: ${playerScore} - ${computerScore}`);
// }
//}
