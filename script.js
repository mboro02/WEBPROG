let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      return gameState[a];
    }
  }

  if (!gameState.includes('')) {
    gameActive = false;
    return 'tie';
  }

  return null;
}

function handleCellClick(clickedCell, clickedCellIndex) {
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerText = currentPlayer;

  const gameResult = checkWin();
  if (gameResult !== null) {
    endGame(gameResult);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function endGame(result) {
  if (result === 'tie') {
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Döntetlen!';
    resultElement.style.color = 'yellow';
    resultElement.style.animation = 'tieAnimation 1s ease-in-out';

    setTimeout(() => {
      resultElement.style.animation = ''; 
    }, 1000); 
  } else {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `${result} győzött!`;
    resultElement.style.color = result === 'X' ? 'green' : 'red';

    const winnerAnimation = result === 'X' ? 'winAnimation' : 'loseAnimation';
    resultElement.style.animation = `${winnerAnimation} 0.5s ease-in-out`;
  }

  gameActive = false;
}


function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
  document.getElementById('result').innerText = '';
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', () => {
  const clickedCell = cell;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('id'));

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  handleCellClick(clickedCell, clickedCellIndex);
}));

document.getElementById('reset-button').addEventListener('click', resetGame);