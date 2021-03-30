/**************************************************
Exercise: spy profile generator
Felicia Gorgatchov

generates a spy profile with alias weapon and password based on provided user name
**************************************************/
"use strict";

let spyProfile = {
    name: '*REDACTED*',
    alias: '*REDACTED*',
    secretWeapon: '*REDACTED*',
    password:'*REDACTED*'
};

let instrumentData;
let objectData;
let tarotData;

// preload()
//
function preload() {
    instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
    objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
    tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');

}

// setup()
//
function setup() {
    createCanvas(windowWidth, windowHeight);  

    let data = JSON.parse(localStorage.getItem('spy-profile-data'));
    if(data){
        let password = prompt('Agent! What is your password?');
        if(password === data.password){
            spyProfile = data;
        }
    }
    else{
        generateSpyProfile();
    }

}

// draw()
//
function draw() {
    background(0);

    let profile = `** CONFIDENTIAL! DO NOT DISTRIBUTE! **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

    push();
    textFont('Courier, monospace');
    textSize(24);
    textAlign(TOP, LEFT);
    fill(255);
    text(profile, 100, 100);
    pop();
}

//=====================================================================================

function generateSpyProfile() {
    //ask for input
    spyProfile.name = prompt('Agent! What is your name?');

    //generatet the info
    spyProfile.alias = `The ${random(instrumentData.instruments)}`;
    spyProfile.secretWeapon = random(objectData.objects);
    let card = random(tarotData.tarot_interpretations);
    spyProfile.password = random(card.keywords);

    //save the info
    localStorage.setItem('spy-profile-data', JSON.stringify(spyProfile));
}