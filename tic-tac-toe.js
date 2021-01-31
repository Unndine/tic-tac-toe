let board = document.querySelector(".board");
let currentPlayer = 1;

createBoard();

//maina spēlētāju
function changePlayer() {
  let header2 = document.querySelector("h2");
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  header2.textContent = "Player" + currentPlayer;
}

//ja pirmais spēlētājs uzklikšķina, tas ir +, ja otrais, tad o
function cellClickListener(cell) {
  if (cell.querySelector("span").textContent === "") {
    if (currentPlayer === 1) {
      cell.querySelector("span").textContent = "+";
      validateBoard("+");
    } else {
      cell.querySelector("span").textContent = "o";
      validateBoard("-");
    }
    changePlayer();
  } else {
    document.querySelector("h2").textContent = "Neatlauts Gajiens";
  }
}

function validateBoard(speletajaSimbols) {
  let currentCells = board.querySelectorAll(".cell");
  let isWinner = false;

  //pirmā rinda
  if (
    currentCells[0].querySelector("span").textContent == speletajaSimbols &&
    currentCells[1].querySelector("span").textContent == speletajaSimbols &&
    currentCells[2].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //otrā rinda
  if (
    currentCells[3].querySelector("span").textContent == speletajaSimbols &&
    currentCells[4].querySelector("span").textContent == speletajaSimbols &&
    currentCells[5].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //trešā rinda
  if (
    currentCells[6].querySelector("span").textContent == speletajaSimbols &&
    currentCells[7].querySelector("span").textContent == speletajaSimbols &&
    currentCells[8].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //pirmā kolonna
  if (
    currentCells[0].querySelector("span").textContent == speletajaSimbols &&
    currentCells[3].querySelector("span").textContent == speletajaSimbols &&
    currentCells[6].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //otrā kolonna
  if (
    currentCells[1].querySelector("span").textContent == speletajaSimbols &&
    currentCells[4].querySelector("span").textContent == speletajaSimbols &&
    currentCells[7].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //trešā kolonna
  if (
    currentCells[2].querySelector("span").textContent == speletajaSimbols &&
    currentCells[5].querySelector("span").textContent == speletajaSimbols &&
    currentCells[8].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //pirmā diagonāle
  if (
    currentCells[0].querySelector("span").textContent == speletajaSimbols &&
    currentCells[4].querySelector("span").textContent == speletajaSimbols &&
    currentCells[8].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }

  //otrā diagonāle
  if (
    currentCells[2].querySelector("span").textContent == speletajaSimbols &&
    currentCells[4].querySelector("span").textContent == speletajaSimbols &&
    currentCells[6].querySelector("span").textContent == speletajaSimbols
  ) {
    isWinner = true;
  }
  if (isWinner) {
    board.style.background = "green";
  }
}

//izveido laukumus
function createBoard() {
  for (let i = 0; i <= 8; i++) {
    let cell = document.createElement("a");
    cell.classList.add("cell");
    cell.innerHTML = "<span><span>";

    cell.addEventListener("click", function () {
      cellClickListener(cell);
    });

    board.append(cell);
  }
}
