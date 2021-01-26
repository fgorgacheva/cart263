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


// preload()
function preload() {
    for(let i = 0; i < NUM_ANIMAL_IMAGES; i++){
        let image = loadImage(`assets/images/animal${i}.png`);
        animalImages.push(image);
    }

    sausageDogImg = loadImage(IMG_PATH + "sausage-dog.png");
}

// setup()
function setup() {
    createCanvas(windowWidth, windowHeight);

    //create the 100 animals
    for(let i = 0; i < NUM_ANIMALS; i++){
        let x = random(0, width);
        let y = random(0, height);
        let image = random(animalImages);
        let animal = new Animal(x, y, image);
        animals.push(animal);
    }

    sausageDog = new SausageDog (random(0, width), random(0,height), sausageDogImg);

}

// draw()
function draw() {
    background(191, 244, 255);

    for(let i = 0; i < animals.length; i++){
        animals[i].update();
    }

    sausageDog.update();

}

//will call the sausageDogg's mousepress to see if it is a sausage and if it should rotate
function mousePressed(){
    sausageDog.mousePressed();
}