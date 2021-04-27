/**
 * P5 function initializes variables that need to be ready to use before the game starts running
 */

"use strict";

function setup() {
    createCanvas(windowWidth, windowHeight);

    isDoneLoading = false;

    //get the user name from local storage if it exists
    userName = localStorage.getItem("userName") || "";

    index = -1;
    subindex = 0;    

    houses = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
    house =  houses[Math.floor(Math.random()*4)];
  
    //hide loading screen and show the get name form
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("getNameContainer").style.display = "flex";

    //if the username already exists, it will be written/remembered in the form (to avoid always typing the name on restart)
    //else the string will be empty and user must enter a valid name
    $("#userName").val(userName);

    //indictes in console when everything is loaded and app is ready to start
    console.log("DONE");
    isDoneLoading = true;

    //once app is ready to start, call script.init() that will initialize the name stuff and other required variables
    init();
    
    
}
