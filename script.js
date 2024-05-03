let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let roundCounter = 0;
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let roundResults = document.querySelector(".results");
let gameScore = document.querySelector(".score");


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


function getChoices(buttonID) {
   humanChoice = buttonID.target.id;
   computerChoice = getComputerChoice();
}


function getRoundResults (humanChoice, computerChoice){
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


function playRound(buttonID){
   updateRound();
   getChoices(buttonID);
   getRoundResults(humanChoice, computerChoice);
   trackGameScore();
}


function trackGameScore() {
   if (humanScore >= 5) {
      roundResults.textContent = "";
      gameScore.textContent = "You win!";
   } else if (computerScore >= 5) {
      roundResults.textContent = "";
      gameScore.textContent = "You lose!";
   } else {
      gameScore.textContent = `Round ${roundCounter}: Human Score: ${humanScore} - Computer Score: ${computerScore}`;
   }
}


function updateRound() {
   roundCounter += 1;
}



rockButton.addEventListener("click", function(e) {
   playRound(e);
});
paperButton.addEventListener("click", function(e) {
   playRound(e);
});
scissorsButton.addEventListener("click", function(e) {
   playRound(e);
});
