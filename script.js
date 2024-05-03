// create a variable for computer choice
let computerChoice;
// create a variable for human choice
let humanChoice;
// create a variable for computer score
let computerScore = 0;
// create a variable for human score
let humanScore = 0;

let roundCounter = 0;

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

// obtain human choice
/*function getHumanChoice() {
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
 }*/


 //Play a single round game
function playRound (humanChoice, computerChoice){
    if (humanChoice === "rock") {
       if (computerChoice === "rock"){
          roundResults.textContent = "It's a tie! Both picked rock.";
          return;
       } else if (computerChoice === "paper"){
          roundResults.textContent = "You lose! Paper beats rock.";
          return computerScore = ++computerScore;
       } else if (computerChoice === "scissors"){
          roundResults.textContent = "You win! Rock beats scissors.";
          return humanScore = ++humanScore;
       }
    } else if (humanChoice === "paper") {
       if (computerChoice === "rock"){
          roundResults.textContent = "You win! Paper beats rock.";
          return humanScore = ++humanScore;   
       } else if (computerChoice === "paper"){
          roundResults.textContent = "It's a tie! Both picked paper.";
          return;
       } else if (computerChoice === "scissors"){
          roundResults.textContent = "You lose! Scissors beats paper.";
          return computerScore = ++computerScore
       }
    } else if (humanChoice === "scissors") {
       if (computerChoice === "rock"){
          roundResults.textContent = "You lose! Rock beats scissors.";
          return computerScore = ++computerScore;
       }
       if (computerChoice === "paper"){
          roundResults.textContent = "You win! Scissors beats paper.";
          return humanScore = ++humanScore;
       }
       if (computerChoice === "scissors"){
          roundResults.textContent = "It's a tie! Both picked scissors.";
          return;
       }
    } else {
       alert("ERROR: Please refresh the page");
       return;
    }
 }


/*function playGame(){
    for (let i = 1; i <= 5; ++i){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Round ${i}: Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    }
}*/


let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let roundResults = document.querySelector(".results");
let gameScore = document.querySelector(".score");

rockButton.addEventListener("click", () => {
   //alert("rock");
   roundCounter += 1;
   humanChoice = "rock";
   computerChoice = getComputerChoice();
   playRound(humanChoice, computerChoice);
   gameScore.textContent = `Round ${roundCounter}: Human Score: ${humanScore} - Computer Score: ${computerScore}`;
});
paperButton.addEventListener("click", () => {
   //alert("paper");
   roundCounter += 1;
   humanChoice = "paper";
   computerChoice = getComputerChoice();
   playRound(humanChoice, computerChoice);
   gameScore.textContent = `Round ${roundCounter}: Human Score: ${humanScore} - Computer Score: ${computerScore}`;
});
scissorsButton.addEventListener("click", () => {
   //alert("scissors");
   roundCounter += 1;
   humanChoice = "scissors";   computerChoice = getComputerChoice();
   playRound(humanChoice, computerChoice);
   gameScore.textContent = `Round ${roundCounter}: Human Score: ${humanScore} - Computer Score: ${computerScore}`;   
});

//playGame();