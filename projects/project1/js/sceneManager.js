/**************************************************
Project 1 
Felicia Gorgatchov

A night at the movie's
Transport yourself into the wizarding world of Harry Potter! 
Meet the famous trio and have them help you with your Diagon Alley shopping list!
**************************************************/
"use strict";

//represents one scene, each scene has a setting and a dialog, each scene also moves the timeline index
class SceneManager { 
    index = 0;
    fade = 0;
    size = 0;
    isFading = false;
    //tracks history of played sounds so we don't play them twice;
    playHistory = [];
    constructor (){
    }

    //will detect if the usesr clicked to continue the text
    onClick(){  
        if(!this.isFading ) {
            index++;
            this.fade = 0;
            this.size = 0;
        }      
        if(!animalChosen && dialogArray[index].event == "animalChoosing"){
            index--;
        }
        
    }

    displayText(speaker, dialog) {
        if(index < dialogArray.length && speaker && dialog){
            imageMode(CENTER);
            image(sprites.dialogBox, width/2, height*0.86, width*0.7, height*0.23);
        
            imageMode(CORNER);
            fill('#2b2b2b');
            // console.log(animalChosen, dialogArray[index].event);
            if(animalChosen && dialogArray[index].event == "animalChosen"){
                let {cost, exclamation, animal} = animalChosen;
                dialog = `${exclamation} It will be ${cost} for the ${animal}!`;

                textFont(magicFont);
                textAlign(LEFT);
                textSize(width*0.013);
                text(speaker, width*0.22, height*0.815, width*0.55);

                textFont(schoolFont);
                textAlign(LEFT);
                textSize(width*0.0125);
                text(dialog, width*0.22, height*0.85, width*0.55); 
                return;
            }

            if( speaker === "ME"){
                textFont(schoolFont);
                textAlign(LEFT);
                textSize(width*0.0125);
                text(dialog, width*0.22, height*0.85, width*0.55);
            }
            else{
                textFont(magicFont);
                textAlign(LEFT);
                textSize(width*0.013);
                text(speaker, width*0.22, height*0.815, width*0.55);

                textFont(schoolFont);
                textAlign(LEFT);
                textSize(width*0.0125);
                text(dialog, width*0.22, height*0.85, width*0.55);
            }
        }
    }

    loadSetting(settingDetails){
        imageMode(CORNER);
        switch(settingDetails){
            case("diagonAlley"):
                background(sprites.diagonAlley); 
                sounds.gringotts.stop();
                sounds.ollivanders_malkins.stop();
                sounds.flourishnblotts.stop();
                sounds.slugsnjiggers.stop();
                sounds.eyelops.stop();
         
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.diagonAlley.play();
                        if(dialogArray[index].event == 'bell'){
                            sounds.bell.play();
                        }
                        else if(dialogArray[index].event == 'closeDoor'){
                            sounds.doorClose.play();
                        }
                    }
                break;
            
            case("gringotts"):
                background(sprites.gringotts); 
            
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.doorOpen.play();
                        sounds.gringotts.play();
                    }
                sounds.diagonAlley.stop();

                break;

            case("madamMalkins"):
                background(sprites.malkinsShop); 
                
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.ollivanders_malkins.play();
                        sounds.bell.play();
                    }
                break;

            case("flourishNBlotts"):
                background(sprites.flourishnblotts); 
                
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.flourishnblotts.play();
                        sounds.bell.play();
                    }
                break;

            case("ollivanders"):    
                background(sprites.ollivandersShop); 
                
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.ollivanders_malkins.play();
                        sounds.bell.play();
                    }
                break;

            case("slugsNJiggers"):
                background(sprites.slugsnjiggers); 
                
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.slugsnjiggers.play();
                        sounds.bell.play();
                    }
                break;

            case("eyelops"):
                background(sprites.eyelops); 
                
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.eyelops.play();
                        sounds.bell.play();
                    }
                break;

            case("end"):
                background(0);
                sounds.diagonAlley.fade(0, 1);
                if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.theme.play();
                    }
                document.getElementById("continue").style.display = "none";
                document.getElementById("textBox").style.display = "flex";
                document.getElementById("replay").style.display = "flex";
                break;
        }

        if(settingDetails === "madamMalkins" || settingDetails === "flourishNBlotts" || settingDetails === "ollivanders" || settingDetails === "slugsNJiggers" || settingDetails === "eyelops"){
                sounds.diagonAlley.stop();                
        }
    }

    eventTrigger(event){
        imageMode(CENTER); 
        switch(event){
                case("start"):
                    this.fadeEffect(sprites.envelope, width/2, height/2, width*0.5, height*0.5);
                    break;
    
                case("openLetter"):
                    background(0);
                    image(sprites.envelope, width/2, height/2, width*0.5, height*0.5);
                    this.fadeEffect(sprites.letter, width/2, height/2, width*0.35, height*0.9);
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.letterIn.play();
                    }
                    break;
                
                case("list"):
                    this.fadeEffect(sprites.list, width/2, height/2, width*0.40, height*0.95);
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.letterIn.play();
                    }
                    break;
    
                case("hermione"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.hermione, width/2, height/2, width*0.30, height*0.8); 
                    break;
            
                case("harry"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);                    
                    imageMode(CENTER);
                    image(sprites.hermione, width/2, height/2, width*0.30, height*0.8);
                    this.comeInEffect(sprites.harry, width/4, height/2, width*0.25, height*0.8);    
                    break;
        
                case("ron"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);                    
                    imageMode(CENTER);
                    image(sprites.hermione, width/2, height/2, width*0.30, height*0.8);
                    image(sprites.harry, width/4, height/2, width*0.25, height*0.8);
                    this.comeInEffect(sprites.ron, (width/4)*3, height/2, width*0.25, height*0.8); 
                    break;

                case("goblin"):   
                    imageMode(CORNER);
                    background(sprites.gringotts);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.goblin, (width/4)*2.5, height/2, width*0.25, height*0.8); 
                    break;
    
                case("madam"):
                    imageMode(CORNER);
                    background(sprites.malkinsShop);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.madam, (width/4)*2.5, height/2, width*0.3, height*0.8);
                    break;
    
                case("ollivander"):
                    imageMode(CORNER);
                    background(sprites.ollivandersShop);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.ollivander, (width/4)*2.5, height/2, width*0.25, height*0.8);
                    break;
        
                case("gilderoy"):
                    imageMode(CORNER);
                    background(sprites.flourishnblotts);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.gilderoy, (width/4)*2.5, height/2, width*0.20, height*0.8);
                    break;
                
                case("animalChosen"):
                case("eyelop"): 
                    imageMode(CORNER);
                    background(sprites.eyelops);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.eyelop, (width/4)*2.5, height/2, width*0.20, height*0.8);
                    break;
    
                case("snape"):
                    imageMode(CORNER);
                    background(sprites.slugsnjiggers);                    
                    imageMode(CENTER);
                    this.comeInEffect(sprites.snape, (width/4)*2.5, height/2, width*0.25, height*0.8);
                    break;
    
                case("box"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.boxOpen.play();
                    }
                    break;
    
                case("letterIn"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.letterIn.play();
                    }
                    break;      
    
                case("measureFabric"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.measureFabric.play();
                    }
                    break;
    
                case("measureWand"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.measureWand.play();
                    }
                    break;
                            
                case("diagonAlley"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);
                    break;
    
                case("onlyRon"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);
                    imageMode(CENTER);
                    this.comeInEffect(sprites.ron, width/2, height/2, width*0.30, height*0.8); 
                    break;
    
                case("pay"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.coin.play();
                    }
                    break;
                
                case("bell"):  
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.bell.play();
                    }
                    break;
    
                case("closeDoor"):   
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.doorClose.play();
                    }
                    break;
                
                case("spell"):
                    if(!this.playHistory[index]){
                        this.playHistory[index] = true;
                        sounds.spell.play();
                    }
                    break;
                
                case("animalChoice"):
                    imageMode(CORNER);
                    background(sprites.eyelops);
                    document.getElementById("buttons").style.display = "flex";
                    break;

                case("owl"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);
                    imageMode(CENTER);
                    this.comeInEffect(sprites.owl, width/2, height/2, width*0.30, height*0.55);
                    break;
    
                case("cat"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);
                    imageMode(CENTER);
                    this.comeInEffect(sprites.cat, width/2, height/2, width*0.4, height*0.6);
                    break;
    
                case("toad"):
                    imageMode(CORNER);
                    background(sprites.diagonAlley);
                    imageMode(CENTER);
                    this.comeInEffect(sprites.toad, width/2, height/2, width*0.30, height*0.4);
                    break;
        }
    }

    animalChoice(animal){      
        switch(animal){
            case("owl"):
                animalChosen = {exclamation: "Great choice!", cost: "5 galleons", animal};
                document.getElementById("buttons").style.display = "none";
                dialogArray[153].message = "An owl!";
                dialogArray[153].event = "owl";

                dialogArray[154].message = "What a majestic owl!";
                dialogArray[155].message = "It's just like Harry's!";

                break;
                
                case("cat"):
                animalChosen = {exclamation: "Amazing choice!", cost: "3 galleons", animal};
                document.getElementById("buttons").style.display = "none";
                dialogArray[153].message = "A cat!";
                dialogArray[153].event = "cat";

                dialogArray[154].message = "Oh my! What a beautiful cat!";
                dialogArray[155].message = "I'm sorry Scabbers...";
                break;

            case("toad"):
                animalChosen = {exclamation: "To each their own!", cost: "30 knuts", animal};
                document.getElementById("buttons").style.display = "none";
                dialogArray[153].message = "A toad!";
                dialogArray[153].event = "toad";

                dialogArray[154].message = "Oh you got a toad...";
                dialogArray[155].message = "Neville Longbottom has a toad, too! His name's Trevor, but Neville somehow always manages to lose him...";
                break;
        }
        index++;
        
    }

    fadeEffect(img, x, y, w, h){
        let fadeAmount = 10;
        this.isFading = true;
        
        imageMode(CENTER);
        tint(255, this.fade);
        image(img, x, y, w, h);
        this.fade += fadeAmount;
        if(this.fade >= 255){
            this.isFading = false;
        }
        tint(255, 255);
    }

    comeInEffect(img, x, y, w, h){
        let increaseAmount = 0.2;
        this.isFading = true;
        
        imageMode(CENTER);
        
        if(this.size >= 0.9){
            increaseAmount = 0;
            this.isFading = false;
        }
        if(this.size == 0){
            this.size = 0.001;
        }
        image(img, x, y, w * this.size, h *  this.size); 
        this.size += increaseAmount;
        
    }



}

