let restart = document.querySelector("#restart");
let innerstatus = document.querySelector("#status");
let cells = document.querySelectorAll(".cell");
let options = ["", "", "", "", "", "", "", "", ""];
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(winCondition.length);
let begin = false;
let player = "X";
innerstatus.textContent = `${player}'s Turn`;

initialize();
function initialize() {
  begin = true;
  cells.forEach((cell) => cell.addEventListener("click", update));
  restart.addEventListener("click", reset);
}
function update() {
  console.log(options);
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] != "" || begin == false) return;
  else {
    options[cellIndex] = player;
    this.textContent = player;
    result();
  }
}
function changeplayer() {
  if (begin) {
    player = player == "X" ? "O" : "X";
    innerstatus.textContent = `${player}'s Turn`;
  }
}
function result() {
  let roundwon = false;
  for (let i = 0; i < winCondition.length; i++) {
    let condition = winCondition[i];
    const a = options[condition[0]];
    const b = options[condition[1]];
    const c = options[condition[2]];
    if (a == "" || b == "" || c == "") {
      continue;
    }
    if (a == b && b == c) {
      roundwon = true;
      break;
    }
  }
  if (roundwon) {
    innerstatus.textContent = `${player} has won`;
    begin = false;
  } else if (!options.includes("")) {
    innerstatus.textContent = `Draw`;
    begin = false;
  } else {
    changeplayer();
  }
}
function reset() {
  cells.forEach((cell) => (cell.textContent = ""));
  options = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  innerstatus.textContent = `${player}'s Turn`;
  begin = true;
}
