/**
 * setup function is p5 function in which we initialize all variables and objects that will be
 * use later in the draw function
 */

"use strict";

function setup() {
    createCanvas(windowWidth, windowHeight);

    isDoneLoading = false;

    userName = localStorage.getItem("userName") || "";

    index = -1;
    subindex = 0;    

    houses = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
    house =  houses[Math.floor(Math.random()*4)];
  
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("getNameContainer").style.display = "block";
    $("#userName").val(userName);
    //indictes in console when everything is loaded and app is ready to start
    console.log("DONE");
    isDoneLoading = true;
    init();
    
    
}
