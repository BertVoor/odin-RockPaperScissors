console.log("Script loaded");

let playerScore = 0;
let computerScore = 0;
let round = 1;


function getComputerChoise(){
   const choises = ["Rock", "Paper", "Scissors"];
   const computerChoise = choises[Math.floor(Math.random()*3)];  
   return computerChoise; 
};

function playRound(playerSelection, computerSelection){

   playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

   if (playerSelection == computerSelection)
      return "It's a tie!";

   else if (playerSelection == "Rock"){
      if (computerSelection == "Scissors"){
         playerScore++;
         return "Rock beats Scissors, you win!";
      }
      else {
         computerScore++;
         return "Paper beats Rock, you lose...";
      }
   }
   
   else if (playerSelection == "Paper"){
      if (computerSelection == "Rock"){
         playerScore++;
         return "Paper beats Rock, you win!";
      }
      else{
         computerScore++;
         return "Scissors beats Paper, you lose...";
      }
   }

   else if (playerSelection == "Scissors"){
      if (computerSelection == "Paper"){
         playerScore++;
         return "Scissors beats Paper, you win!";
      }
      else{
         computerScore++;
         return "Rock beats Paper, you lose..."
      }
   }
};

function game(){
   
   while (round <= 5){

      const playerSelection = prompt(`Round ${round}:\nRock, Paper or Scissors?`);
      const computerSelection = getComputerChoise();
      round++;

     console.log(playRound(playerSelection, computerSelection));

   };

   if(playerScore > computerScore){
      console.log(`Supreme victory!\nFinal score: ${playerScore} - ${computerScore}`);
   }
   else if (playerScore == computerScore){
      console.log(`Everybody is a winner. It's a tie.\nFinal score: ${playerScore} - ${computerScore}`);
   }
   else {
      console.log(`Better luck next time...\nFinal score: ${playerScore} - ${computerScore}`);
   }
};

game();