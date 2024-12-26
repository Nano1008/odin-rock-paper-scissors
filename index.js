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
        input = prompt("Please enter rock/paper/scissors: ");
    } while (input != "rock" && input != "paper" && input != "scissors");
    return input;
}