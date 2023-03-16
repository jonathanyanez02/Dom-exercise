const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)



const controls = document.querySelector('.controls');   
// selects the .controls div


const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'

div.textContent = 'Hello World!';

div.innerHTML = '<span>Hello World!</span>';   


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'THE DOM IS ADDING ME';

container.appendChild(content);