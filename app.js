let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "s", "p"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user_action, comp_action) {
  userScore++;
  userScore_span.textContent = userScore;
  compScore_span.textContent = compScore;
  const userSmallWord = "user".fontsize(3).sub();
  const compSmallWord = "comp".fontsize(3).sub();
  result_p.innerHTML = ` ${convertToWord(
    user_action
  )}${userSmallWord} beats ${convertToWord(
    comp_action
  )}${compSmallWord}. You win!`;

  document.getElementById(user_action).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(user_action).classList.remove("green-glow"),
    500
  );
}

function lose(user_action, comp_action) {
  compScore++;
  userScore_span.textContent = userScore;
  compScore_span.textContent = compScore;
  const userSmallWord = "user".fontsize(3).sub();
  const compSmallWord = "comp".fontsize(3).sub();
  result_p.innerHTML = ` ${convertToWord(
    user_action
  )}${userSmallWord} loses to ${convertToWord(
    comp_action
  )}${compSmallWord}. You lost!`;
  document.getElementById(user_action).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(user_action).classList.remove("red-glow"),
    500
  );
}

function draw(user_action, comp_action) {
  const userSmallWord = "user".fontsize(3).sub();
  const compSmallWord = "comp".fontsize(3).sub();
  result_p.innerHTML = ` ${convertToWord(
    user_action
  )}${userSmallWord} same as ${convertToWord(
    comp_action
  )}${compSmallWord}. It's a draw!`;
  document.getElementById(user_action).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(user_action).classList.remove("gray-glow"),
    500
  );
}

function game(user_action) {
  const comp_action = getComputerChoice();
  switch (user_action + comp_action) {
    case "rs":
    case "pr":
    case "sp":
      win(user_action, comp_action);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(user_action, comp_action);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(user_action, comp_action);
      break;
  }
}

(function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissors_div.addEventListener("click", function() {
    game("s");
  });
})();
