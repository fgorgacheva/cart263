/**************************************************
contains basic logic concerning the minigames and 
related information and functionalities
**************************************************/
"use strict";

class Minigame{
    constructor(name, teacher){
        this.complete = false;
        this.name;
    }

    displayButtons(){
        
    }

}

class CharmsMinigame extends Minigame{
    
    constructor(name, teacher){
        super(name, teacher);
    }

    draw(){
        background(sprites);

        
    }
}