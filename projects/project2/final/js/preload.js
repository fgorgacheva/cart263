/* preload function used to instantiate all p5 objects we will need,
 * here it loads them all into separate arrays (sprites and sounds) to have all elements organized and ready to use
 */

"use strict";

//transforms a string(image name) into its path
function createImageSrc(imgName){
    return "./assets/images/" + imgName + ".png";
}

//transforms a string(sound name) into its path
function createSound(soundName){
    return "./assets/sounds/" + soundName + ".mp3";
}


// preload()
function preload() {
    //returns an array with all the loaded images
    Object.keys(sprites).forEach(key => {
        sprites[key] = loadImage(createImageSrc(key))
    });

    //returns an array with all the loaded sounds and set each one to noLoop
    Object.keys(sounds).forEach(key => {
        sounds[key] = loadSound(createSound(key));
        sounds[key].loop = false;
    });
    
    //load fonts
    hogwartsFont = loadFont('./assets/fonts/HogwartsFont.TTF');
    schoolFont = loadFont('./assets/fonts/Schoolbook.otf');
    
}