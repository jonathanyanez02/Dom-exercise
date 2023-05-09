const container = document.querySelector('.container');

for (let i = 0; i <=254; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

let isDrawing = false;

container.addEventListener('mousedown', function(e) {
  isDrawing = true;
  paintGrid(e);
});

container.addEventListener('mousemove', function(e) {
  if (isDrawing) {
    paintGrid(e);
  }
});

container.addEventListener('mouseup', function(e) {
  isDrawing = false;
});

function paintGrid(e){    
  if(e.target.classList.contains('square')){
    let square = e.target;    
    square.style.backgroundColor = 'black';
  }
}

document.querySelector('button').addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(function(square) {
    square.style.backgroundColor = 'white';
  });
});