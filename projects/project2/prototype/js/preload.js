/* preload function is p5 function used to load all sounds and images as p5 objects,
 * here it loads them all into separate arrays (sprites and sounds) to have all elements organized and ready to use
 */

"use strict";

//instantiates/loads an image (arg) as a p5 image 
function createImageSrc(imgName){
    return "../assets/images/" + imgName + ".png";
}

//instantiates/loads a sound (arg) to p5 object
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
    hogwartsFont = loadFont('../assets/fonts/HogwartsFont.TTF');
    schoolFont = loadFont('../assets/fonts/Schoolbook.otf');
    
}