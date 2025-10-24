const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.game-board');
const restartButton = document.getElementById('restartButton');
let xTurn = true;

const handleClick = (e) => {
    const cell = e.target;
    const currentClass = xTurn ? 'X' : 'O';
    cell.textContent = currentClass;
    cell.removeEventListener('click', handleClick);
    xTurn = !xTurn;
    checkWin();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));

restartButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick);
    });
    xTurn = true;
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
        }
    });
}
