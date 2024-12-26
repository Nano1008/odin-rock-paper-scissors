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

function getHumanChoice() {
    let input;
    do {
        input = prompt("Please enter rock/paper/scissors: ").toLowerCase();
    } while (input != "rock" && input != "paper" && input != "scissors");
    return input;
}

let humanScore, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "It's a tie!";
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            return "Computer wins! Paper beats Rock.";
        } else {
            humanScore++;
            return "Human wins! Rock beats Scissors.";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            return "Human wins! Paper beats Rock.";
        } else {
            computerScore++;
            return "Computer wins! Scissors beats Paper.";
        }
    } else {
        if (computerChoice == "rock") {
            computerScore++;
            return "Computer wins! Rock beats Scissors.";
        } else {
            humanScore++;
            return "Human wins! Scissors beats Paper.";
        }
    }
}
