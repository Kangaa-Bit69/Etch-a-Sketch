
//set variables
const grid = document.querySelector('.grid');
const div = document.createElement('div');
const fragment = document.createDocumentFragment();
const pixels = document.querySelectorAll('.pixel');
div.classList.add('div');
grid.classList.add('grid');


//user change canvas size
function promptGridSize() {
    let size = prompt('Pick your dimensions up to 100');
    if (size <= 100 && size > 1) {
        console.log(size);
        return size;
        
    } else {
        console.log('Out of Range');
        if (confirm('Enter a number between 1 and 100')) promptGridSize();
        return size;
        
        
    }
}

//mouseover hanldler
function handleMouse() {
    this.style.backgroundColor = 'black';
}
//change all pixels back to white
function shake() {
 for (pixel of document.querySelectorAll('.pixel')) {
    pixel.style.backgroundColor = 'white'}
}

//function to greate grid 
function createGrid (gridSize) {
    //rows
    for (let i = 0; i < gridSize; i++){     
      row = document.createElement('div');
      row.className = ('row');  
      fragment.appendChild(row);
        //pixels
        for (let j = 0; j < gridSize; j++){
            pixel = document.createElement('div');
            pixel.className=(`pixel`);            
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover',  handleMouse);                                  
            row.append(pixel);
            fragment.appendChild(row);            
        } 
    } grid.appendChild(fragment); 
    
}
// set initial grid
window.onload = function() {
    createGrid(16);
  };





