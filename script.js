// create a variable for computer choice
let computerChoice;
// create a variable for human choice
let humanChoice;
// create a variable for computer score
let computerScore = 0;
// create a variable for human score
let humanScore = 0;

// Obtain computer's choice
function getComputerChoice() {
   let choice;
   choice = Math.random();
   if (choice <= .33) {
      return "rock";
   } else if (choice > .33 && choice < .67) {
      return "paper";
   } else if (choice >= .67) {
      return "scissors";
   }
}

//computerChoice = getComputerChoice();
//console.log(computerChoice); //this is for testing only. Delete before final version