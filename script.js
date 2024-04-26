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

function getHumanChoice() {
    let answer;
    keepGoing = true;

    while (keepGoing) {
       answer = prompt("Type rock, paper, or scissors to select one: ");
       answer = answer.toLowerCase();
       if (answer != "rock" && answer != "paper" && answer != "scissors") {
        console.log("Not a valid response");
       } else {
        keepGoing = false;
       }
    }

    return answer;
 }

 //humanChoice = getHumanChoice();
 // console.log(humanChoice); //this is for testing only. Delete before final version