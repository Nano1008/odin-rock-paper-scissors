function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum >= 0 && randomNum < 0.3) {
        return "rock";
    } else if (randomNum >= 0.3 && randomNum < 0.6) {
        return "paper";
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return "Computer wins! Paper beats Rock.";
        } else {
            humanScore++;
            return "Human wins! Rock beats Scissors.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            humanScore++;
            return "Human wins! Paper beats Rock.";
        } else {
            computerScore++;
            return "Computer wins! Scissors beats Paper.";
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            return "Computer wins! Rock beats Scissors.";
        } else {
            humanScore++;
            return "Human wins! Scissors beats Paper.";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";
body.appendChild(scissorsButton);

const result = document.createElement("div");
body.appendChild(result);

const score = document.createElement("div");
body.appendChild(score);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playResult = playRound(e.target.textContent);
        result.textContent = playResult;
        score.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            const winner = humanScore == 5 ? "You" : "Computer";
            result.textContent = `${winner} wins!`

            buttons.forEach((button) => {button.disabled = true});
        }
    })
});