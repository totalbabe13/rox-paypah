//alert('Yolo Binches!')
let computerScore = 0;
let yourScore = 0;

function computerPlay() {
  let x = Math.floor(Math.random() * (3) + 1);
  switch (x) {
    case 1:
      return 'Rocks';
      break;

    case 2:
      return 'Paper';
      break;

    case 3:
      return 'Scissors';
      break;
  }
};

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  if(playerChoice === computerChoice){
      console.log(`${playerChoice} and ${computerChoice}: its a tie`);

  } else if (computerChoice === "scissors" && playerChoice === "paper") {
      console.log(`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (computerChoice === "paper" && playerChoice === "rocks") {
      console.log(`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (computerChoice === "rocks" && playerChoice === "scissors") {
      console.log(`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (playerChoice === "scissors" && computerChoice === "paper" ) {
      console.log(`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;

  } else if (playerChoice === "paper" && computerChoice === "rocks" ) {
      console.log(`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;

  } else if (playerChoice === "rocks" && computerChoice === "scissors" ) {
      console.log(`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;
  }
};

function game() {
  let playerOptions = "Select One: rocks, paper, or scissors";
  for (let round = 0; round < 5; round++){
    let one = prompt(playerOptions);
    playRound(one,computerPlay());
  }
  console.log(` YOUR SCORE IS: --> ${yourScore} | COMPUTER SCORE IS: --> ${computerScore}`);
};
