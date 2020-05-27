let userScore = 0;
let computerScore = 0;

const COMPUTER_POSSIBILITIES = ["r", "p", "s"];

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#comp-score");
const result_p = document.querySelector("#result");
const scores_p = document.querySelector("#scores");
const rbutton_img = document.querySelector("#rbutton");
const pbutton_img = document.querySelector("#pbutton");
const sbutton_img = document.querySelector("#sbutton");

function whoWinning() {
  if (userScore > computerScore) {
    userScore_span.style.color = "#31b43a";
    computerScore_span.style.color = "#fc121b";
    scores_p.classList.remove("red-glow");
    scores_p.classList.add("green-glow");
  } else if (userScore < computerScore) {
    userScore_span.style.color = "#fc121b";
    computerScore_span.style.color = "#31b43a";
    scores_p.classList.remove("green-glow");
    scores_p.classList.add("red-glow");
  }
}

function userWin() {
  userScore += 1;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = "You Win";
}

function computerWin() {
  computerScore += 1;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "Computer Win";
}

function clicked(moveUser) {
  let randomNumberComputer = Math.floor(Math.random() * 3);
  let moveComputer = COMPUTER_POSSIBILITIES[randomNumberComputer];

  switch (moveUser + moveComputer) {
    case "rs":
    case "pr":
    case "sp":
      userWin();
      break;
    case "rp":
    case "ps":
    case "sr":
      computerWin();
      break;
    default:
      result_p.innerHTML = "Draw";
      break;
  }

  whoWinning();
}

function main() {
  rbutton_img.addEventListener("click", () => {
    clicked("r");
  });
  pbutton_img.addEventListener("click", () => {
    clicked("p");
  });
  sbutton_img.addEventListener("click", () => {
    clicked("s");
  });
}

main();
