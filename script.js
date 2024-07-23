let computerScore = 0
    ,playerScore = 0
    ,rounds = 0;

// Getting html elements to put the information of the game on the document
let totalRound = document.querySelector("#totalRounds");
totalRound.textContent += " "  + rounds;
let computerPoints = document.querySelector("#computerNumberPoints");
// Messing with this counter
let playerPoints = document.querySelector("#playerNumberPoints");
computerPoints.textContent += " " + computerScore;
playerPoints.textContent += " " + Number(playerScore);
let gameButtons = document.querySelector(".game-buttons"); 

function main() {
    gameButtons.addEventListener('click', (e) => {
        let playerChoice = "";
        let target = e.target;

        // Getting user input to play round
        switch(target.id){
            case 'rock-button':
                playerChoice = "rock";
                break;
            case 'paper-button':
                playerChoice = "paper";
                break;
            case 'scissors-button':
                playerChoice = "scissors";
                break;
        }
        // let gameRoundScore = compareChoice(getComputerChoice(), playerChoice);
            playRound(getComputerChoice(), playerChoice);
            rounds++;
            updateScores();
        
    })
}

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
    let announceWinner = document.querySelector(".round-winner");

    switch(winner){
        case(0):
            console.log("Player and Computer had same choice, no winner");
            announceWinner.textContent = "";
            announceWinner.textContent =  "Player and Computer had same choice, no winner";
            break;
        case(1):
            console.log("You lose! " + computerChoice + " beats " + playerChoice);
            computerScore++;
            announceWinner.textContent = "";
            announceWinner.textContent =  "You lose! " + computerChoice + " beats " + playerChoice;
            break;
        case(2):
            console.log("You win! " + playerChoice + " beats " + computerChoice);
            playerScore++;
            console.log("player score: " + +playerScore)
            announceWinner.textContent = "";
            announceWinner.textContent =  "You win! " + playerChoice + " beats " + computerChoice;
            break;
    }
}

function updateScores() {
    let computerScoreUpdate = document.querySelector("#computerNumberPoints")
    let playerScoreUpdate = document.querySelector("#playerNumberPoints");
    let roundTotalUpdate = document.querySelector("#totalRounds");
    computerScoreUpdate.textContent = computerScore;
    playerScoreUpdate.textContent = playerScore;
    roundTotalUpdate.textContent = rounds;
}


function checkWinner(rounds) {
    if(computerScore == 3){
        return "Computer";
    }
    else if(playerScore == 3){
        return "Player";
    }
    else if(rounds == 5 && computerScore > playerScore){
        return "Computer";
    }
    else if(rounds == 5 && playerScore > computerScore){
        return "Player";
    }
    else {
        return null;
    }
}

// function playGame() {
//     while(rounds < 5) {
//         let computerDecision = getComputerChoice();
//         let playerDecision = getPlayerChoice();
//         playRound(computerDecision, playerDecision);
//         rounds++;
        
//         let gameWinner = checkWinner(rounds);
//         if(gameWinner != null){
//             console.log(gameWinner + " won the game!!!");
//             break;
//         }
//     }
//     checkWinner();
// }
main();
