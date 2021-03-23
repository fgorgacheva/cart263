"use strict";


// draw()
//
function draw() {
    if(commonDialog[index]){
        sceneManager.main();
    }
}

function mouseClicked(){
    if(isDoneLoading){
        document.getElementById("textBox").style.display = "none";
        sceneManager.onClick();
    }
}
