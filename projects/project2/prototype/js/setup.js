/**
 * setup function is p5 function in which we initialize all variables and objects that will be
 * use later in the draw function
 */

"use strict";

function setup() {
    createCanvas(windowWidth, windowHeight);

    isDoneLoading = false;

    index = -1;
    subindex = 0;

    sceneManager = new SceneManager();

    //**FIX: LOADING MUST NOT DISAPPEAR IF CLICKED BEFORE DONE LOADING */
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("continue").style.display = "block";

    //indictes in console when everything is loaded and app is ready to start
    console.log("DONE");
    isDoneLoading = true;

    let options = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"];

    options.forEach((element)=> {
        document.getElementById(element).addEventListener("click", () => {
            sceneManager.questionnaire.houseChoice(element);
        });
    })

    
}
