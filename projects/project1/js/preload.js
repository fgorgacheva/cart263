"use strict";

function createImageSrc(imgName){
    return "../assets/images/" + imgName + ".png";
}

function createSound(soundName){
    return "../assets/sounds/" + soundName + ".mp3";
}


// preload()
function preload() {
    //returns an array with all the loaded images
    Object.keys(sprites).forEach(key => {
        sprites[key] = loadImage(createImageSrc(key))
    });

    //returns an array with all the loaded sounds
    Object.keys(sounds).forEach(key => {
        sounds[key] = loadSound(createSound(key));
        sounds[key].loop = false;
    });
    
    //load fonts
    magicFont = loadFont('../assets/fonts/HogwartsFont.TTF')
    schoolFont = loadFont('../assets/fonts/Schoolbook.otf');
    
}