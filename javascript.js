const container = document.querySelector('#container');
createGrid(16);

const resize = document.querySelector("#resize");
resize.addEventListener("click", updateResolution)

function createGrid(squaresPerSide) {
    container.replaceChildren();
    for (let i = 0; i < squaresPerSide; i++) { 
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; flex: 1;'
        container.appendChild(row);
        for (let j = 0; j < squaresPerSide; j++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            pixel.addEventListener("mousedown", (event) => {
                // Clicking on a pixel and moving the mouse is interpreted as a drag event, causing the not-allowed cursor to appear.
                // The drag event is no longer produced if we preventDefault on the mousedown event.
                event.preventDefault();
                event.target.style.backgroundColor = "black";
            });
            pixel.addEventListener("mouseover", (event) => {
                if (event.buttons === 1) {
                    event.target.style.backgroundColor = "black";
                }
            });
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

