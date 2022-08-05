const etchASketch = {}

etchASketch.grid = {}
etchASketch.init = false
etchASketch.grid.size = 16
etchASketch.grid.color = 'black'
etchASketch.grid.tileList = function (size) {
    size = size * size
    const gridArray = Array.from(Array(size).keys())
    return gridArray
}
etchASketch.isKlicked = false
etchASketch.isHover = false
etchASketch.grid.canvas = document.querySelector("div.container")

etchASketch.grid.createTile = function () {

    //find variable name pls...
    let tile = document.createElement('div');
    tile.classList.add("grid");
    tile.style.cssText += 'background-color: white'

    tile.addEventListener('mousedown', (e) => {
        e.target.style.cssText = `background-color: ${this.color}`
    })

    tile.addEventListener('mouseover', (e) => {
        if (etchASketch.isKlicked === true) {
            e.target.style.cssText = `background-color: ${this.color}`
        }
    })

    this.canvas.append(tile)
}

etchASketch.grid.createGrid = function (size) {

    let r = document.documentElement
    r.style.setProperty('--gridsize', size)

    this.canvas.addEventListener('mousedown', () => {
        etchASketch.isKlicked = true
    })

    etchASketch.grid.canvas.addEventListener('mouseup', () => {
        etchASketch.isKlicked = false
    })

    let myArray = this.tileList(size);
    myArray.forEach(tile => etchASketch.grid.createTile('#FFFFFF'))
    etchASketch.init = true
}


etchASketch.applyRandomButton = function () {
    const randomButton = document.getElementById("randomColorBtn");
    randomButton.addEventListener('click', () => {
        this.grid.color = getRandomColor()
    })
}

etchASketch.applyGridSizeButton = function () {
    const gridSizeButton = document.getElementById("promptGridSize");
    gridSizeButton.addEventListener('click', () => {
        let myprompt = prompt("GridSize?")
        etchASketch.reload(myprompt)
    })
}

etchASketch.reload = function (size) {
    if (!size) {return}
    while(this.grid.canvas.firstChild) {
    this.grid.canvas.removeChild(this.grid.canvas.firstChild)
}
etchASketch.grid.createGrid(size)
}

etchASketch.grid.createGrid(etchASketch.grid.size)
etchASketch.applyRandomButton()
etchASketch.applyGridSizeButton()

function getRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;  // returns a floating point random number 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}