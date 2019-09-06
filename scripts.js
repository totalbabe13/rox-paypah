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

  if(computerSelection === playerChoice) {
    return "Its a tie!"
  };
};
