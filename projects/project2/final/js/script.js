/**************************************************
contains basic logic for retrriving input
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

