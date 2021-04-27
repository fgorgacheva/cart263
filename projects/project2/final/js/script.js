/**************************************************
contains basic logic 
**************************************************/
"use strict";

    //retrieving the user's input for their name
    
function init(){
    $("#nameSubmitBtn").click(() => {
        //save a name in username
        userName = document.getElementById("userName").value;
        //starts the story
        if(verifyName(userName)){
            initDialog(userName);

            houseDictionary = {
                "Slytherin" : {charName: "DRACO MALFOY",   charSprite: sprites["Slytherin_char" ],  commonRoom: sprites["Slytherin_room" ], sound: sounds["Slytherin_sound" ], dialog: slytherinDialog},
                "Hufflepuff": {charName: "CEDRIC DIGGORY", charSprite: sprites["Hufflepuff_char"],  commonRoom: sprites["Hufflepuff_room"], sound: sounds["Hufflepuff_sound"], dialog: hufflepuffDialog},
                "Gryffindor": {charName: "GINNY WEASLEY",  charSprite: sprites["Gryffindor_char"],  commonRoom: sprites["Gryffindor_room"], sound: sounds["Gryffindor_sound"], dialog: gryffindorDialog},
                "Ravenclaw" : {charName: "LUNA LOVEGOOD",  charSprite: sprites["Ravenclaw_char" ],  commonRoom: sprites["Ravenclaw_room" ], sound: sounds["Ravenclaw_sound" ], dialog: ravenclawDialog},
            };
            sceneManager = new SceneManager();
            index++;
        }

       
    
    })
}

function verifyName(username){
    let pattern = /^[A-Z]+[a-z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(!pattern.test(username)){
        $("#errorMsg").text("Please enter a valid name that starts with an uppercase letter and contains no numerical values.");
        return false;
    }
    else{
        nameIsVerified = true;
        return true;
    }
}

