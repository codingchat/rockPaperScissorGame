 // const userInput = prompt("Enter your move"); // takes user input
const playerChoice = userInput.toLowerCase(); // makes input case-insensitive





function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
} // ths function will generate random computer choice



function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It is a tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    return "You won this round";
  } 
  else if(
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")
  ) {
    return "You Lose this round";
  } else {
    return "You choose the wrong move"
  }
}

function game() {
  let playerPoint = 0; // initial point of player
  let computerPoint = 0; // initial point of computer

  for (let i = 1; i <= 7; i++) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice); // game will play 5 times
    console.log(result);

    if(result.includes("won")){
      playerPoint++;
    }else if(result.includes("lost")){
      computerPoint++;
    }
  }

  if (playerPoint > computerPoint) {
    return "Congratulatins! You won the game";
  } else if (playerPoint < computerPoint) {
    return "You lose the game, Better luck next time";
  } else {
    return "It is a tie";
  }

}

// console.log(game());s
