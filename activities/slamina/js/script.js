/**************************************************
Exercise 
Felicia Gorgatchov

Here is a description of this template p5 project.
**************************************************/
"use strict";

//animals array is in animals.js to keep this script clean

let gameState = 0;
let score = 0;

let currentAnswer;
let currentAnimal = ``;
let reverseAnimal;
let bitfont;
let themeSong;
let rightSound;
let wrongSound;

// preload()
//
function preload() {
    Object.keys(animalSprites).forEach(key => {
        animalSprites[key] = loadImage(Utilities.createImageSrc(key));
    });

    bitfont = loadFont("./assets/fonts/8bit.ttf");
    themeSong  = loadSound("./assets/sounds/theme.mp3");
    rightSound = loadSound("./assets/sounds/right.mp3");
    wrongSound = loadSound("./assets/sounds/wrong.mp3");

}

// setup()
//
function setup() {
    createCanvas(windowWidth, windowHeight);

    Utilities.defineSprites();

    if(annyang){
        let commands = {
            'is it *animal': Utilities.guessAnimal
        };
        annyang.addCommands(commands);
        annyang.start();
    }

}

// draw()
//
function draw() {
    // themeSong.play();

    //set general font style
    textSize(40);
    textFont(bitfont);
    textAlign(CENTER, CENTER);

    //draw the game states
    switch(gameState){
        case(0):
            Utilities.drawStartScreen();    
            break;
        case(1):
            Utilities.drawInstructions();
            break;
        case(2):
            Utilities.drawGame();
            break;
    }

}


function mousePressed() {
    if (gameState == 1){
        gameState = 2;
    }
    if(gameState == 2){
        currentAnimal = random(animals);
        reverseAnimal = Utilities.reverseString(currentAnimal);
        responsiveVoice.speak(reverseAnimal);
        currentAnswer = '';
    }
}

function keyTyped(){
    if(keyCode === 32 && gameState === 0){
        gameState = 1;
        themeSong.setVolume(0.05);
        themeSong.play();
    }
    return false;
}
