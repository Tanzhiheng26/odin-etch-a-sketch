const container = document.querySelector('#container');
createGrid(16);

const resize = document.querySelector("#resize");
resize.addEventListener("click", updateResolution)

function colorPixel(event) {
    event.target.style.backgroundColor = "black";
}

function createGrid(squaresPerSide) {
    container.replaceChildren();
    for (let i = 0; i < squaresPerSide; i++) { 
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; flex: 1;'
        container.appendChild(row);
        for (let j = 0; j < squaresPerSide; j++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            pixel.addEventListener("mouseover", colorPixel);
            pixel.style.cssText = 'flex: 1';    
            row.appendChild(pixel);
        }
    }
}

function updateResolution() {
    let squaresPerSide = 0;
    do {
        squaresPerSide = +prompt("Enter number of squares per side (maximum of 100).");
    } while(isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide < 1);
    createGrid(squaresPerSide);
}

