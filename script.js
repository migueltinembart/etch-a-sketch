let gridSizeX = 16
let gridSizeY = gridSizeX;
let isHover = false
let isKlicked = false

const canvas = document.querySelector("div.container")
canvas.addEventListener('mousedown', () => {
    isHover = true
    console.log("isHover is " + isKlicked)
})
canvas.addEventListener('mouseout', () => {
    isHover = false
    console.log("isKlicked is " + isKlicked)
})


creategrid(16, 16)

function creategrid(x, y) {
    let createLength = x * y
    for (let index = 1; index < createLength; index++) {
        grid = document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener('mousedown', (e) => {
            isHover = true
            if (isKlicked) {
                e.target.classList.add("hover")
                console.log("isHover is " + isHover)
            }
        })
        grid.addEventListener('onmouseup', () => {
            isHover = false
            console.log("isHover is " + isHover)
        })
        canvas.append(grid);
    }

}


// Declare Functions here



