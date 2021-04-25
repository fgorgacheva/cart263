/**************************************************
contains basic logic concerning the minigames and 
related information and functionalities
**************************************************/
"use strict";

class Minigame {
    constructor(name, teacher){
        this.complete = false;
        this.name = name;
    }

    displayButton(){
        console.log(this.name);
        if(this.complete == true){
            $("#" + this.name).css("pointer-events", "disabled");
        }
        else{
            $("#" + this.name).show();
        }
    }

}

class CharmsMinigame extends Minigame{
    
    constructor(name, teacher){
        super(name, teacher);
    }

    draw(){
        background(sprites.charms);

        //make teacher appear, get dialog and disaply with text from scene manager??

        
    }
}

class FlyingMinigame extends Minigame{

}

class PotionsMinigame extends Minigame{

}