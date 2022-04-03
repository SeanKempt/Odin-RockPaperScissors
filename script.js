const choices = [`Rock`, `Paper`, `Scissors`];
let computerSelection;
let playerSelection;

//Function chooses randomly from the array choices.

/* Function needs to return `Rock` `Paper` or `Scissors` randomly. */
function computerPlay (){
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = computerSelection.toUpperCase();
}

function playerChoice () {
    playerSelection = prompt(`What is your Choice?`);
    playerSelection = playerSelection.toUpperCase();
}
/* function playRockPaperScissors takes playerSelection and computerSelection and return a string that declares the winner of the round as `You lose! Paper
beats Rock` */

function playRockPaperScissors (playerSelection, computerSelection){
    if (playerSelection === `ROCK` && computerSelection === `PAPER`) {
        return console.log(`You lose! Paper beats rock!`);
    } else if (playerSelection === `SCISSORS` && computerSelection === `ROCK`) {
        return console.log(`You lose! Rock Beats paper!`);
    } else if (playerSelection === `PAPER` && computerSelection === `SCISSORS`) {
        return console.log(`You lose! Scissors beats Paper!`);
    } else if (playerSelection === `ROCK` && computerSelection === `SCISSORS`) {
        return console.log(`You Win! Rock beats Scissors!`);
    } else if (playerSelection === `PAPER` && computerSelection === `ROCK`) {
        return console.log(`You Win! Paper beats Rock!`);
    } else if (playerSelection === `SCISSORS` && computerSelection === `PAPER`) {
        return console.log(`You Win! Scissors beats Paper!`);
    } else if (playerSelection === computerSelection) {
        return console.log(`Its a tie! Play again!`);
    } else {
        return console.log(`Try again!`);
    }
}

// let results = console.log(playRockPaperScissors(playerSelection, computerSelection));

/*Write a NEW function called game(). Call the playRound function inside of this one to play 
a 5 round game that keeps score and reports a winner or loser at the end. */

function game (){
    for(let i = 0; i < 5; i++) {
        playerChoice();
        computerPlay();
        playRockPaperScissors(playerSelection, computerSelection);
    }
}