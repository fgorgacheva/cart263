//in this script contains all variables thatt will be used throughout the code/script files

"use strict";

//array containing all sounds
let sounds = {
    bell: {},
    boxOpen: {},
    diagonAlley: {},
    eyelops: {},
    flourishnblotts: {},
    gringotts: {},
    letterIn: {},
    letterOut: {},
    measureFabric: {},
    measureWand: {},
    ollivanders_malkins: {},
    slugsnjiggers: {},
    theme: {},
    spell: {},
    coin: {}

};


//array containing all images
let sprites = {
    envelope: {},
    letter: {},
    dialogBox: {},

    //0 is for empty, and every number represents the next location/stage 
    list0: {},
    // list1: {},
    // list2: {},
    // list3: {},
    // list4: {},
    // list5: {},

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
    //gringottsSign: {},

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

let animalChoice;
let moneyBalance;
let index;

let sceneManager;
let magicFont;
let schoolFont;