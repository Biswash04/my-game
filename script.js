let userScore = 0;
let computerScore = 0;
let drawCount = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "";
    drawCount++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // result = "You win!";
    userScore++;
  } else {
    // result = "Computer wins!";
    computerScore++;
  }

  document.getElementById(
    "result"
  ).innerHTML = `You chose <strong>${userChoice}</strong>.<br>
         Computer chose <strong>${computerChoice}</strong>.<br>
         <span>${result}</span>`;

  updateScoreboard();

  let final = "";

  if (userScore === 5) {
    final = "you win!";
    document.getElementById("result").innerHTML = "Restart Your Game";
  } else if (computerScore === 5) {
    final = "computer wins";
    document.getElementById("result").innerHTML = "Restart Your Game";
  } else if (userScore === 6 || computerScore === 6) {
    alert("Please Restart Your Game");
  }
  document.getElementById("final").innerHTML = final;
}

function updateScoreboard() {
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("draws").innerText = drawCount;
}

function resetScore() {
  userScore = 0;
  computerScore = 0;
  drawCount = 0;
  updateScoreboard();
  document.getElementById("result").innerHTML = "Scores have been reset.";
  document.getElementById("final").innerHTML = "";
}
