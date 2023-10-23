document.addEventListener('DOMContentLoaded', (event) => {
    let squares = document.querySelectorAll('#board div');
    let gameState = Array(9).fill(null);
    let currentPlayer = 'X';
    let status = document.querySelector('#status');
  
    squares.forEach((square, index) => {
      square.classList.add('square');
      square.addEventListener('click', () => {
        if (gameState[index] === null) {
          gameState[index] = currentPlayer;
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          if (checkWinner(gameState, currentPlayer)) {
            status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            status.classList.add('you-won');
          } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        }
      });
  
      square.addEventListener('mouseover', () => {
        if (gameState[index] === null) {
          square.classList.add('hover');
        }
      });
      square.addEventListener('mouseout', () => {
        square.classList.remove('hover');
      });
    });
  });
  
  function checkWinner(gameState, currentPlayer) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    return winningCombinations.some(combination => 
      combination.every(index => gameState[index] === currentPlayer)
    );
  }