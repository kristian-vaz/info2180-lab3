document.addEventListener('DOMContentLoaded', (event) => {
    let squares = document.querySelectorAll('#board div');
    let gameState = Array(9).fill(null);
    let currentPlayer = 'X';
  
    squares.forEach((square, index) => {
      square.classList.add('square');
      square.addEventListener('click', () => {
        if (gameState[index] === null) {
          gameState[index] = currentPlayer;
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
    });
  });