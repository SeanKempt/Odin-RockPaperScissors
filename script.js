function restoreGame() {
  window.location.reload();
}

let computerSelection;
const computerChoices = [0, 1, 2];
/* Function computerPlay to return `Rock` `Paper` or `Scissors` randomly. */
function computerPlay() {
  computerSelection =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

let playerSelection;
function playerChoice(choice) {
  playerSelection = choice;
}

const choices = { 0: "Rock", 1: "Paper", 2: "Scissors" };
const choiceMatrix = [
  [-1, 1, 0],
  [1, -1, 2],
  [0, 2, -1],
];
/* function playRockPaperScissors takes playerSelection and computerSelection and returns a string that declares the winner */
let roundWinner = document.querySelector("#rpsWinner");
function playRockPaperScissors(playerSelection, computerSelection) {
  let answer = choiceMatrix[playerSelection][computerSelection];
  if (answer == playerSelection) {
    playerScore++;
    return (roundWinner.textContent = `Round Winner: Player Wins! ${choices[playerSelection]} beats ${choices[computerSelection]}!`);
  } else if (answer == computerSelection) {
    computerScore++;
    return (roundWinner.textContent = `Round Winner: Computer Wins! ${choices[computerSelection]} beats ${choices[playerSelection]}!`);
  } else {
    return (roundWinner.textContent = `Round Tied: It's a tie! Play again!`);
  }
}

let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let playerScore = 0;
let computerScore = 0;
function gameWinner() {
  if (playerScore < computerScore && computerScore === 5) {
    alert(`You lose! with a score of ${playerScore} Try again!`);
    restoreGame();
  } else if (computerScore < playerScore && playerScore === 5) {
    alert(`You Win! with a score of ${playerScore} You are the greatest!`);
    restoreGame();
  }
}

const gameChoices = document.querySelectorAll(".choice");
gameChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    computerPlay();
    playerChoice(choice.value);
    playRockPaperScissors(playerSelection, computerSelection);
    updateScore();
    gameWinner();
  });
});

function updateScore() {
  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;
}

//Plays game five times ----
// function game (){
//     for(let i = 0; i < 5; i++) {
//     playerChoice();
//     computerPlay();
//     playRockPaperScissors(playerSelection, computerSelection);
//     }
// }
