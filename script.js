/* Function computerPlay to return `Rock` `Paper` or `Scissors` randomly. */
let computerSelection;
const choices = [`Rock`, `Paper`, `Scissors`];
function computerPlay() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  computerSelection = computerSelection.toUpperCase();
}

let playerSelection;
function playerChoice(choice) {
  playerSelection = choice;
  playerSelection = playerSelection.toUpperCase();
}

/* function playRockPaperScissors takes playerSelection and computerSelection and returns a string that declares the winner */
let roundWinner = document.querySelector("#rpsWinner");
function playRockPaperScissors(playerSelection, computerSelection) {
  if (playerSelection === `ROCK` && computerSelection === `PAPER`) {
    computerScore++;
    console.log(`You lose! Paper beats rock!`);
    return (roundWinner.textContent = `Round Winner: Computer Wins! Paper beats rock!`);
  } else if (playerSelection === `SCISSORS` && computerSelection === `ROCK`) {
    computerScore++;
    console.log(`You lose! Rock beats paper!`);
    return (roundWinner.textContent = `Round Winner: Computer Wins! Rock beats paper!`);
  } else if (playerSelection === `PAPER` && computerSelection === `SCISSORS`) {
    computerScore++;
    console.log(`You lose! Scissors beats Paper!`);
    return (roundWinner.textContent = `Round Winner: Computer Wins! Paper beats Rock!`);
  } else if (playerSelection === `ROCK` && computerSelection === `SCISSORS`) {
    playerScore++;
    console.log(`You Win! Rock beats Scissors!`);
    return (roundWinner.textContent = `Round Winner: Player Wins! Rock beats Scissors!`);
  } else if (playerSelection === `PAPER` && computerSelection === `ROCK`) {
    playerScore++;
    console.log(`You Win! Paper beats Rock!`);
    return (roundWinner.textContent = `Round Winner: Player Wins! Paper beats Rock!`);
  } else if (playerSelection === `SCISSORS` && computerSelection === `PAPER`) {
    playerScore++;
    console.log(`You Win! Scissors beats Paper!`);
    return (roundWinner.textContent = `Round Winner: Player Wins! Scissors beats Paper!`);
  } else if (playerSelection === computerSelection) {
    console.log(`Its a tie! Play again!`);
    return (roundWinner.textContent = `Round Tied: It's a tie! Play again!`);
  } else {
    console.log(`Try again! Incorrect entry.`);
    return (roundWinner.textContent = `Round Error: Try again! Incorrect Entry.`);
  }
}
//Plays game five times ----
// function game (){
//     for(let i = 0; i < 5; i++) {
//     playerChoice();
//     computerPlay();
//     playRockPaperScissors(playerSelection, computerSelection);
//     }
// }
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let playerScore = 0;
let computerScore = 0;
function gameWinner() {
  if (playerScore < computerScore) {
    console.log(`You lose! with a score of ${playerScore} Try again!`);
  } else if (computerScore < playerScore) {
    console.log(
      `You Win! with a score of ${playerScore} You are the greatest!`
    );
  } else {
    console.log(`Something broke!`);
  }
}

const gameChoices = document.querySelectorAll(".choice");
gameChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    computerPlay();
    playerChoice(choice.value);
    playRockPaperScissors(playerSelection, computerSelection);
    updateScore();
  });
});

function updateScore() {
  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;
}
