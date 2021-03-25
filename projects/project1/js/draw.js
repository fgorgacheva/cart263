"use strict";


// draw()
//
function draw() {
    if(dialogArray[index]){
        sceneManager.loadSetting(dialogArray[index].setting);
        sceneManager.eventTrigger(dialogArray[index].event);
        sceneManager.displayText(dialogArray[index].speaker, dialogArray[index].message);
    }
}

function mouseClicked(){
    document.getElementById("textBox").style.display = "none";
    sceneManager.onClick();
}
