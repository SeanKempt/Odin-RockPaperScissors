/* Function needs to return `Rock` `Paper` or `Scissors` randomly. */
const choices = [`Rock`, `Paper`, `Scissors`];
let computerSelection = computerPlay();
let playerSelection = prompt(`What is your choice?`);
playerSelection = playerSelection.toUpperCase();
computerSelection = computerSelection.toUpperCase();

//Function chooses randomly from the array choices.
function computerPlay (){
    return choices[Math.floor(Math.random() * choices.length)];
}

/* function playRockPaperScissors takes playerSelection and computerSelection and return a string that declares the winner of the round as `You lose! Paper
beats Rock` */

function playRockPaperScissors (playerSelection, computerSelection){
    if (playerSelection === `ROCK` && computerSelection === `PAPER`) {
        return `You lose! Paper beats rock!`;
    } else if (playerSelection === `SCISSORS` && computerSelection === `ROCK`) {
        return `You lose! Rock Beats paper!`;
    } else if (playerSelection === `PAPER` && computerSelection === `SCISSORS`) {
        return `You lose! Scissors beats Paper!`;
    } else if (playerSelection === `ROCK` && computerSelection === `SCISSORS`) {
        return `You Win! Rock beats Scissors!`;
    } else if (playerSelection === `PAPER` && computerSelection === `ROCK`) {
        return `You Win! Paper beats Rock!`;
    } else if (playerSelection === `SCISSORS` && computerSelection === `PAPER`) {
        return `You Win! Scissors beats Paper!`;
    } else if (playerSelection === computerSelection) {
        return `Its a tie! Play again!`;
    } else {
        return `Try again!`;
    }
}

