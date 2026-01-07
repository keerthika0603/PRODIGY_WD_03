let player = "X";
let gameOver = false;

function play(cell) {
  if (cell.innerHTML === "" && !gameOver) {
    cell.innerHTML = player;
    checkWinner();
    player = (player === "X") ? "O" : "X";
  }
}

function checkWinner() {
  let c = document.getElementsByTagName("td");

  let patterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  // ✅ Check win
  for (let p of patterns) {
    let a = p[0], b = p[1], d = p[2];

    if (
      c[a].innerHTML !== "" &&
      c[a].innerHTML === c[b].innerHTML &&
      c[b].innerHTML === c[d].innerHTML
    ) {
      document.getElementById("result").innerHTML =
        c[a].innerHTML + " wins";
      gameOver = true;
      return;
    }
  }

  // ✅ Check draw
  let filled = true;
  for (let i = 0; i < c.length; i++) {
    if (c[i].innerHTML === "") {
      filled = false;
      break;
    }
  }

  if (filled) {
    document.getElementById("result").innerHTML = "Match Draw";
    gameOver = true;
  }
}

function reset() {
  let c = document.getElementsByTagName("td");
  for (let i = 0; i < c.length; i++) {
    c[i].innerHTML = "";
  }
  player = "X";
  gameOver = false;
  document.getElementById("result").innerHTML = "";
}
