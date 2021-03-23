"use strict";


// draw()
//
function draw() {
    if(commonDialog[index]){
        sceneManager.main();
    }
}

function mouseClicked(){
    document.getElementById("textBox").style.display = "none";
    sceneManager.onClick();
}
