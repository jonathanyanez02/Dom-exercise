const grid = document.getElementById('grid');

// Create 16 x 16 grid cells
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}