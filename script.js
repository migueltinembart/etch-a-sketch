let gridSizeX = 16
let gridSizeY = gridSizeX;
let isHover = false
let isKlicked = false

//Setup canvas inside of container element(div) Also when click is registered inside canvas, setup an event
const canvas = document.querySelector("div.container")
canvas.addEventListener('mousedown', () => {
    isKlicked = true
    console.log("isKlicked is " + isKlicked)
})

canvas.addEventListener('mouseup', () => {
    isKlicked = false
    console.log("isKlicked is " + isKlicked)
})


// Running Section
creategrid(16, 16)

//Function declaration Section

//creates grid with x amount of objects 
//gets its x and y coordinates from variable in declaration block
//while looping through add eventlisteners and class
function creategrid(x, y) {
    let createLength = x * y
    for (let index = 1; index < createLength; index++) {
        grid = document.createElement("div");
        grid.classList.add("grid");
        //add mousedown so first div gets also painted
        grid.addEventListener('mousedown', (e) => {
            e.target.classList.add("hover")
        })

        grid.addEventListener('mouseover', (e) => {
            if (isKlicked === true) {
                e.target.classList.add("hover")
                console.log("isHover is " + isHover)
            }})
        grid.addEventListener('', () => {
                isHover = false
                console.log("isHover is " + isHover)
                
            })
            canvas.append(grid);
        }
    }


    function getRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;  // returns a floating point random number 
        randomNumber = Math.floor(randomNumber)
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
