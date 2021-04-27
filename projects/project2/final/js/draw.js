/**
 * p5 draw function
 */

"use strict";


// all drawing is done here, or drawing functions are called and executed here
function draw() {

    //if the commonDialog array exists and the item at a specified index exists, and the user name entered is verified(valid), then draw the sceneManager
    if(commonDialog && commonDialog[index] && nameIsVerified){
        sceneManager.main();
    }
}

//handles the mouse click event
function mouseClicked(){
    //handles potion click (it has some different behaviour for the ingredient dropping)
    if(sceneManager && sceneManager.minigames.potions.started){
        sceneManager.minigames.potions.onClick();
        return;
    }
    //handles the sceneManager onClick which progresses through the dialog or pauses when the user must click a button
    if(isDoneLoading && userName && nameIsVerified){
        document.getElementById("textBox").style.display = "none";
        sceneManager.onClick();
    }  
}
