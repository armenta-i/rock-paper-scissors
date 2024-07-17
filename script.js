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

function compareChoice(computerChoice, playerChoice){
    let biggerScore;
    
    // 0 means they tied, 1 means computer won, and 2 means player won
    switch(true) {
        case (computerChoice === playerChoice):
            biggerScore = 0;
            break;
        case (computerChoice === 'rock' && playerChoice === 'scissors'):
            biggerScore = 1;
            break;
        case (computerChoice === 'paper' && playerChoice === 'rock'):
            biggerScore = 1;
            break;
        case (computerChoice === 'scissors' && playerChoice ==='paper'):
            biggerScore = 1;
            break;
        case (computerChoice === 'rock' && playerChoice === 'paper'):
            biggerScore = 2;
                break;
        case (computerChoice === 'paper' && playerChoice === 'scissors'):
            biggerScore = 2;
            break;
        case (computerChoice === 'scissors' && playerChoice === 'rock'):
            biggerScore = 2;
            break;
    }
    return biggerScore;
}  


function playRound(computerChoice, playerChoice) {
    let winner = compareChoice(computerChoice, playerChoice);

    switch(winner){
        case(0):
            console.log("Player and Computer had same choice, no winner");
            break;
        case(1):
            console.log("You lose! " + computerChoice + " beats " + playerChoice);
            computerScore++;
            break;
        case(2):
            console.log("You win! " + playerChoice + " beats " + computerChoice);
            playerScore++;
            break;
    }
}

let playerScore = 0;
let computerScore = 0;
let computerDecision = getComputerChoice();
let playerDecision = getPlayerChoice();
playRound(computerDecision, playerDecision);

