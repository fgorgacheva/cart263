"use strict";



// setup()
//
function setup() {
    createCanvas(windowWidth, windowHeight);

    moneyBalance = 0;

    index = -1;

    sceneManager = new SceneManager();
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("continue").style.display = "block";
    console.log("DONE");
    // 

}
