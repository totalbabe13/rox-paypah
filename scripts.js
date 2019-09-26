//alert('Yolo Binches!')

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorBtn = document.querySelector('#scissor');
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
  let outCome

  if(playerChoice === computerChoice){
      //console.log(`${playerChoice} and ${computerChoice}: its a tie`);
      outCome = `${playerChoice} and ${computerChoice}: its a tie`

  } else if (computerChoice === "scissors" && playerChoice === "paper") {
      outCome = (`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (computerChoice === "paper" && playerChoice === "rocks") {
      outCome = (`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (computerChoice === "rocks" && playerChoice === "scissors") {
      outCome = (`${playerChoice} and ${computerChoice}: computer wins`);
      computerScore++;

  } else if (playerChoice === "scissors" && computerChoice === "paper" ) {
      outCome = (`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;

  } else if (playerChoice === "paper" && computerChoice === "rocks" ) {
      outCome = (`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;

  } else if (playerChoice === "rocks" && computerChoice === "scissors" ) {
      outCome = (`${playerChoice} and ${computerChoice}: You win!`);
      yourScore++;
  }
  return outCome;
};


function game(xChoice) {
  let round = playRound(xChoice, computerPlay());
  console.log(round);
  console.log(` YOUR SCORE IS: --> ${yourScore} | COMPUTER SCORE IS: --> ${computerScore}`);
};

rockBtn.onclick = () => game('rocks');
paperBtn.onclick = () => game('paper');
scissorBtn.onclick = () => game('scissors');
