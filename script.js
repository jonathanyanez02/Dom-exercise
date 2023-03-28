const container = document.querySelector('.container');

for (let i = 0; i <=254; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}


document.querySelector('button').addEventListener('click', function() {
  let userAdjective = prompt("Please provide a number");
  alert (userAdjective);
});

function paintGrid(elem, color){    
  if(elem.buttons == 1){
      if(elem.target.classList == 'square'){
          let square = elem.target;    
          square.style.backgroundColor = color;
      }  
  }else{
      //Exit condition if mouse is not clicked.
      return;
  }
}