"use strict";


// draw()
//
function draw() {
    if(commonDialog && commonDialog[index] && nameIsVerified){
        sceneManager.main();
    }
}

function mouseClicked(){
    if(isDoneLoading && userName && nameIsVerified){
        document.getElementById("textBox").style.display = "none";
        sceneManager.onClick();
    }
}
