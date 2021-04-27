/**************************************************
contains vanilla javascript code for initialization
**************************************************/
"use strict";

    //retrieving the user's input for their name
    
function init(){
    //when the submit name button is clicked
    $("#nameSubmitBtn").click(() => {
        //save the value entered by the user
        userName = document.getElementById("userName").value;
        
        //verify that a name has been entered and saved
        if(verifyName(userName)){
            //initialize all the dialogs with the username (because the variable needs to exist first before filling in the dialog)
            initDialog(userName);
            //save the username in local storage
            localStorage.setItem("userName", userName);
            //initialize the dictionary that contains all the house information
            houseDictionary = {
                "Slytherin" : {charName: "DRACO MALFOY",   charSprite: sprites["Slytherin_char" ],  commonRoom: sprites["Slytherin_room" ], sound: sounds["Slytherin_sound" ], dialog: slytherinDialog},
                "Hufflepuff": {charName: "CEDRIC DIGGORY", charSprite: sprites["Hufflepuff_char"],  commonRoom: sprites["Hufflepuff_room"], sound: sounds["Hufflepuff_sound"], dialog: hufflepuffDialog},
                "Gryffindor": {charName: "GINNY WEASLEY",  charSprite: sprites["Gryffindor_char"],  commonRoom: sprites["Gryffindor_room"], sound: sounds["Gryffindor_sound"], dialog: gryffindorDialog},
                "Ravenclaw" : {charName: "LUNA LOVEGOOD",  charSprite: sprites["Ravenclaw_char" ],  commonRoom: sprites["Ravenclaw_room" ], sound: sounds["Ravenclaw_sound" ], dialog: ravenclawDialog},
            };
            //initialize the scene manager
            sceneManager = new SceneManager();
            index++;
        }
    })
}

//spell checks the name to ensure the user enters a valid name (a valid name is a name that will make some sense in the dialog)
function verifyName(username){
    let pattern = /^[A-Z]+[a-z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/; //Starts with an Uppercase letter and contains no numbers or symbols
    if(!pattern.test(username)){
        $("#errorMsg").text("Please enter a valid name that starts with an uppercase letter and contains no numerical values or symbols.");
        return false;
    }
    else{
        nameIsVerified = true;
        return true;
    }
}

