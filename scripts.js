//alert('Yolo Binches!')


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
      return `${playerChoice} and ${computerChoice}: its a tie`;

  } else if (computerChoice === "scissors" && playerChoice === "paper") {
      return `${playerChoice} and ${computerChoice}: computer wins`;

  } else if (computerChoice === "paper" && playerChoice === "rocks") {
      return `${playerChoice} and ${computerChoice}: computer wins`;

  } else if (computerChoice === "rocks" && playerChoice === "scissors") {
      return `${playerChoice} and ${computerChoice}: computer wins`;
// -  -  -  -  -  -
  } else if (playerChoice === "scissors" && computerChoice === "paper" ) {
      return `${playerChoice} and ${computerChoice}: player wins`;

  } else if (playerChoice === "paper" && computerChoice === "rocks" ) {
      return `${playerChoice} and ${computerChoice}: player wins`;

  } else if (playerChoice === "rocks" && computerChoice === "scissors" ) {
      return `${playerChoice} and ${computerChoice}: player wins`;
  };
  // return `${playerChoice} and ${computerChoice}`;



};
