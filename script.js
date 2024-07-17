function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch(randomIndex){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getPlayerChoice() {
    let userInput = prompt("Choose one of the options to play against you opponent!\n Rock Paper Scissors\n 0 to exit");
    userInput = userInput.toLowerCase();
    return userInput;
}



