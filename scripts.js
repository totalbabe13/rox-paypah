//alert('Yolo Binches!')

// let rockBtn = document.querySelector('#rock');
// let paperBtn = document.querySelector('#paper');
// let scissorBtn = document.querySelector('#scissor');
let computerScore = 0;
let yourScore = 0;

let buttonDiv = document.createElement("div");
let scoreDiv  = document.createElement("div");

buttonDiv.setAttribute("id","buttonContainer");
scoreDiv.setAttribute("id","scoreDiv");
const scriptNode = document.querySelector("script");
document.body.insertBefore(scoreDiv,scriptNode);
document.body.insertBefore(buttonDiv,scoreDiv);
buttonDiv.style.cssText = 'border: 1px solid red; height: 40vh; display: grid; grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 1vh;';
scoreDiv.style.cssText  = "border: 1px solid blue; height: 40vh; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr;"

let rockBtn = document.createElement("button");
rockBtn.setAttribute("id","rock");
rockBtn.textContent= "Rock";
rockBtn.style.cssText = "border-radius: 50%; margin-top: 6vh; margin-bottom: 6vh;";

let paperBtn   = document.createElement("button");
paperBtn.setAttribute("id","paper")
paperBtn.textContent = "Paper"
paperBtn.style.cssText = "border-radius: 50%; margin-top: 6vh; margin-bottom: 6vh;";

let scissorBtn = document.createElement("button");
scissorBtn.setAttribute("id","scissor")
scissorBtn.textContent = "Scissors"
scissorBtn.style.cssText = "border-radius: 50%; margin-top: 6vh; margin-bottom: 6vh;";

let scoreHeader = document.createElement("h1");
scoreHeader.setAttribute("id","scoreKeeper");
scoreHeader.textContent = "S C O R E";
scoreHeader.style.cssText = "grid-column: 1 / span 2; text-align: center;";

let playerScoreDisplay = document.createElement("span");
playerScoreDisplay.setAttribute("id","playerScore");
playerScoreDisplay.textContent = `YOUR SCORE: ${yourScore}`
playerScoreDisplay.style.cssText = "text-align: center;"

let computerScoreDisplay = document.createElement("span");
computerScoreDisplay.setAttribute("id","computerScore");
computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`
computerScoreDisplay.style.cssText = "text-align: center;"

let outComes = document.createElement("span");
outComes.setAttribute("id","outCome");
outComes.textContent = '';
outComes.style.cssText = "text-align: center; grid-column: 1 / span 2; text-align: center;"

buttonDiv.appendChild(rockBtn);
buttonDiv.appendChild(paperBtn);
buttonDiv.appendChild(scissorBtn);
scoreDiv.appendChild(scoreHeader);
scoreDiv.appendChild(playerScoreDisplay);
scoreDiv.appendChild(computerScoreDisplay);
scoreDiv.appendChild(outComes);











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
  playerScoreDisplay.textContent = `YOUR SCORE: ${yourScore}`
  computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`
  outComes.textContent = round;
};

rockBtn.onclick = () => game('rocks');
paperBtn.onclick = () => game('paper');
scissorBtn.onclick = () => game('scissors');
