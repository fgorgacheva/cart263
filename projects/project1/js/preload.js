"use strict";

let sounds = {
    bell: {},
    boxOpen: {},
    diagonAlley: {},
    eyelops: {},
    gringotts: {},
    letterIn: {},
    letterOut: {},
    measureFabric: {},
    measureWand: {},
    ollivanders_malkins: {},
    slugsnjiggers: {},
    theme: {},

};

let sprites = {
    closedLetter: {},
    letter: {},
    dialogBox: {},
    dialogBoxName: {},

    //0 is for empty, and every number represents the next location/stage 
    list0: {},
    list1: {},
    list2: {},
    list3: {},
    list4: {},
    list5: {},

    //locations
    slugsnjiggers: {},
    eyelops: {},
    ollivandersShop: {},
    flourishnblotts: {},
    diagonAlley: {},
    gringotts: {},
    malkinsShop: {},

    //signs
    malkinsSign: {},
    ollivandersSign: {},
    slugsSign: {},
    eyelopsSign: {},
    flourishSign: {},
    gringottsSign: {},

    //characters
    eyelop: {},
    gilderoy: {},
    goblin: {},
    harry: {},
    hermione: {},
    ron: {},
    ollivander: {},
    madam: {},
    snape: {},

    //pets
    cat: {},
    owl: {},
    toad: {},
}


function createImage(imgName){
    return "../assets/images/" + imgName + ".png";
}

function createSound(soundName){
    return "../assets/sounds/" + soundName + ".mp3";
}


// preload()
function preload() {
    //returns an array with all the loaded images
    Object.keys(sprites).forEach(key => {
        sprites[key] = loadImage(createImage(key))
    })

    //returns an array with all the loaded sounds
    Object.keys(sounds).forEach(key => {
        sprites[key] = loadSound(createImage(key))
    })
    
    //load fonts
    magicFont = loadFont('../assets/fonts/HARRYP_.TTF')
    
}