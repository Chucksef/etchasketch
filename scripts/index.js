//global variables section
var main;

//main setup function, mostly tying initial elements to variables and adding event listeners.
function initialSetup(){
    main = document.querySelector("#main");
    document.querySelector("#clearButton").addEventListener('click',function(){
        clear();
    })
    document.querySelector("#newButton").addEventListener('click',function(){
        buildGrid(newGrid());
    })
    main.addEventListener('click', function(e){
        e.target.classList.add("colored");
    })
}

//builds the main pixel grid.
function buildGrid(pixels){
    //delete any pixels before we make new ones.
    var oldPixels = Array.from(document.querySelectorAll(".pixel"));
    for (i=0;i<oldPixels.length;i++){
        oldPixels[i].remove();
    }

    //calculate and set size of pixels.
    var pixelSize = 960/pixels[0];
    console.log(`pixels should be ${pixelSize} pixels square`);

    //update CSS grid to have the right number of columns.
    main.style.gridTemplateColumns = `repeat(${pixels[0]},auto)`;

    //actually generate the pixels.
    var count = pixels[0]*pixels[1];
    for(i=0;i<count;i++){
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel");
        newDiv.style.width = `${pixelSize}px`;
        newDiv.style.height = `${pixelSize}px`;
        main.appendChild(newDiv);
    }
}

//runs the above function when the window is done loading.
window.addEventListener('load', function () {
    initialSetup();
    buildGrid([60,45]);
})

//resets all clicked pixels to default status.
function clear(){
    var allColored = Array.from(document.querySelectorAll(".colored"));
    for(i=0;i<allColored.length;i++){
        allColored[i].setAttribute("class", "pixel");
    }
}

//gets user input for grid dimensions.
function newGrid(){

    var pixelsX = window.prompt("How many pixels wide?");
    var pixelsY = window.prompt("How many pixels high?");
    var pixelDims = [pixelsX,pixelsY];
    return pixelDims;

}