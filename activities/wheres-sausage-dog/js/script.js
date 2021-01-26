/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";

const NUM_ANIMAL_IMAGES = 10; 
const NUM_ANIMALS = 100;
const IMG_PATH = "assets/images/";

let sausageDogImg = undefined;
let sausageDog = undefined;

let animalImages = [];
let animals = [];

let indieFlowerFont = undefined;
let doggos = undefined;

let gameState = 0;
let winIcon = undefined;
let endStuff = undefined;

// preload()
function preload() {
    for(let i = 0; i < NUM_ANIMAL_IMAGES; i++){
        let image = loadImage(`assets/images/animal${i}.png`);
        animalImages.push(image);
    }

    sausageDogImg = loadImage(IMG_PATH + "sausage-dog.png");
    indieFlowerFont = loadFont('assets/fonts/IndieFlower-Regular.ttf');
    winIcon = loadImage(IMG_PATH + "win.png", width/2, height/2);
}

// setup()
function setup() {
    createCanvas(windowWidth, windowHeight);

    textFont(indieFlowerFont);
    textAlign(CENTER, CENTER);

    doggos = Utilities.createDoggos();

    Utilities.setupGame(NUM_ANIMALS, animalImages, animals, endScreen);
    endStuff = Utilities.setupEndScreen();

}

// draw()
function draw() {

    switch(gameState){
        case(0): //load title screen
            Utilities.startScreen(indieFlowerFont, sausageDogImg, doggos);
            break;
        case(1): //load game
            Utilities.drawGame();
            break;
        case(2):
            Utilities.drawGame();
            Utilities.drawEndScreen(endStuff);
            imageMode(CENTER);
            image(winIcon, width/2, height/2, 1000, 1000);
            break;
    }

}

//will call the sausageDog's mousepress to see if it is a sausage and if it should rotate
function mousePressed(){
    sausageDog.mousePressed();
}

function keyTyped(){
    if(keyCode === 32 && gameState === 0){
        gameState = 1;
    }
    return false;
}

function endScreen(){
    gameState = 2;
}
