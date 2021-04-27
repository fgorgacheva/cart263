"use strict";


// draw()
//
function draw() {
    if(commonDialog && commonDialog[index] && nameIsVerified){
        sceneManager.main();
    }
}

function mouseClicked(){
    if(sceneManager.minigames.potions.started){
        sceneManager.minigames.potions.onClick();
        return;
    }
    if(isDoneLoading && userName && nameIsVerified){
        document.getElementById("textBox").style.display = "none";
        sceneManager.onClick();
    }  
}
