function promptGridSize() {
    return prompt('What Size?');
}


const grid = document.querySelector('.grid');
const div = document.createElement('div');
 
div.classList.add('div');
grid.classList.add('grid');

const fragment = document.createDocumentFragment();


const pixels = (document.querySelectorAll('pixel'));

function handleMouse() {
    this.style.backgroundColor = 'black'
}



function createGrid (gridSize) {
    // rows
    for (let i = 0; i < gridSize; i++){     
      row = document.createElement('div');
      row.className = ('row'+ i);  
      fragment.appendChild(row);
        //pixels
        for (let j = 1; j < gridSize; j++){
            pixel = document.createElement('div');
            pixel.className=(`pixel`);
            pixel.addEventListener('mouseover',  handleMouse);
                                  
            row.append(pixel);
            fragment.appendChild(row);
            
        } 
    }
    grid.appendChild(fragment);
    
}






