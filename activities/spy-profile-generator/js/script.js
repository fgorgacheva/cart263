/**************************************************
Exercise: spy profile generator
Felicia Gorgatchov

generates a spy profile with alias weapon and password based on provided user name
**************************************************/
"use strict";

let backgroundImg;
let accessGranted;
let accessDenied;

let spyProfile = {
    name: '*REDACTED*',
    alias: '*REDACTED*',
    secretWeapon: '*REDACTED*',
    colors: '*REDACTED*',
    cape: '*REDACTED*',
    password:'*REDACTED*'
};

let instrumentData;
let objectData;
let tarotData;
let colors;
let cape;

// preload()
//
function preload() {
    instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
    objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
    tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
    colors = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json');
    cape = ['yes', 'no'];

    backgroundImg = loadImage('./assets/images/background.png');
    // accessDenied = loadSound('./assets/sounds/access-denied.mp3');
    // accessGranted = loadSound('./assets/sounds/access-granted.mp3');
}

// setup()
//
function setup() {
    createCanvas(windowWidth, windowHeight);  
    document.getElementById("deleteBtn").style.visibility = "hidden !important";

    let data = JSON.parse(localStorage.getItem('spy-profile-data'));
    if(data){
        let password = prompt('Hero!! What is your password?');

        while(password != data.password){
            password = prompt('Wrong password! Try again!');
            // accessDenied.play();
        }
        
        if(password === data.password){
            spyProfile = data;
            // accessGranted.play();
        }
    }
    else{
        Utilities.generateSpyProfile();
    }

}

// draw()
//
function draw() {
    background(backgroundImg);
    document.getElementById("deleteBtn").style.visibility = "visible !important";
    document.getElementById("deleteBtn").addEventListener("click", Utilities.deleteProfile);
    Utilities.displayInformation();

    
}
