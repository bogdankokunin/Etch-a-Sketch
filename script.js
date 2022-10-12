const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let colorMode;

const main = document.querySelector('main');
const container = document.querySelector('.container');
const sizeButton = document.querySelector('.newSize');
const colorButton = document.querySelector('.newColor');
const sizePara = document.querySelector('.sizePara');

sizePara.textContent = `${size} x ${size}`;


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < (size * size); i++) {
        const subContainer = document.createElement('div');
        subContainer.setAttribute('class', 'subContainer');
        subContainer.setAttribute('draggable', 'false');
        subContainer.addEventListener('mouseover', changeColor);
        container.appendChild(subContainer);
    }
}


sizeButton.addEventListener('click', changeSize);
colorButton.addEventListener('click', changeColor)


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    else e.target.style.backgroundColor = color;
}

function changeSize() {
    let newSize = prompt('What size do you want to make the canvas?', [size]);
    if (newSize >= 100) alert('too big!');
    else {
    size = newSize;
    createGrid(size);
    }
}






window.onload = () => {
    createGrid(DEFAULT_SIZE);
  }