/* Function computerPlay to return `Rock` `Paper` or `Scissors` randomly. */
let computerSelection;
const choices = [`Rock`, `Paper`, `Scissors`];
function computerPlay (){
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = computerSelection.toUpperCase();
}

let playerSelection;
function playerChoice () {
    playerSelection = prompt(`What is your Choice?`);
    playerSelection = playerSelection.toUpperCase();
}

/* function playRockPaperScissors takes playerSelection and computerSelection and returns a string that declares the winner */

function playRockPaperScissors (playerSelection, computerSelection){
    if (playerSelection === `ROCK` && computerSelection === `PAPER`) {
        computerScore++;
        return console.log(`You lose! Paper beats rock!`);
    } else if (playerSelection === `SCISSORS` && computerSelection === `ROCK`) {
        computerScore++;
        return console.log(`You lose! Rock Beats paper!`);
    } else if (playerSelection === `PAPER` && computerSelection === `SCISSORS`) {
        computerScore++;
        return console.log(`You lose! Scissors beats Paper!`);
    } else if (playerSelection === `ROCK` && computerSelection === `SCISSORS`) {
        playerScore++;
        return console.log(`You Win! Rock beats Scissors!`);
    } else if (playerSelection === `PAPER` && computerSelection === `ROCK`) {
        playerScore++;
        return console.log(`You Win! Paper beats Rock!`);
    } else if (playerSelection === `SCISSORS` && computerSelection === `PAPER`) {
        playerScore++;
        return console.log(`You Win! Scissors beats Paper!`);
    } else if (playerSelection === computerSelection) {
        return console.log(`Its a tie! Play again!`);
    } else {
        return console.log(`Try again! Incorrect entry.`);
    }
}

function game (){
    for(let i = 0; i < 5; i++) {
    playerChoice();
    computerPlay();
    playRockPaperScissors(playerSelection, computerSelection);
    }
}

let playerScore = 0;
let computerScore = 0;
function gameWinner(){
    if (playerScore < computerScore) {
        console.log(`You lose! with a score of ${playerScore} Try again!`);
    } else if (computerScore < playerScore) {
        console.log(`You Win! with a score of ${playerScore} You are the greatest!`);
    } else {
        console.log(`Something broke!`);
    }
}