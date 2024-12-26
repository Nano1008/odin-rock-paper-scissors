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