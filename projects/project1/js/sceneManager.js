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

    constructor (){
    }

    //will detect if the usesr clicked to continue the text
    onClick(){   
        index++;
        this.loadSetting(dialogArray[index].setting);
        this.eventTrigger(dialogArray[index].event);
        this.displayText(dialogArray[index].speaker, dialogArray[index].message);
    }

    displayText(speaker, dialog) {
        if(index < dialogArray.length && speaker && dialog){
            imageMode(CENTER);
            image(sprites.dialogBox, width/2, height*0.86, width*0.7, height*0.23);
        
            imageMode(CORNER);
            fill('#2b2b2b');

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

                sounds.diagonAlley.play();
                break;
            case("gringotts"):
                background(sprites.gringotts); 
                sounds.doorOpen.play();
                sounds.diagonAlley.stop();
                sounds.gringotts.play();
                break;

            case("madamMalkins"):
                background(sprites.malkinsShop); 
                sounds.diagonAlley.stop();
                sounds.bell.play();
                sounds.ollivanders_malkins.play();
                break;

            case("flourishNBlotts"):
                background(sprites.flourishnblotts); 
                sounds.diagonAlley.stop();
                sounds.bell.play();
                sounds.flourishnblotts.play();
                break;

            case("ollivanders"):    
                background(sprites.ollivandersShop); 
                sounds.diagonAlley.stop();
                sounds.bell.play();
                sounds.ollivanders_malkins.play();
                break;

            case("slugsNJiggers"):
                background(sprites.slugsnjiggers); 
                sounds.diagonAlley.stop();
                sounds.bell.play();
                sounds.slugsnjiggers.play();
                break;

            case("eyelops"):
                background(sprites.eyelops); 
                sounds.diagonAlley.stop();
                sounds.bell.play();
                sounds.eyelops.play();
                break;

            case("end"):
                background(0);
                sounds.diagonAlley.fade(0, 1);
                sounds.theme.play();
                document.getElementById("continue").style.display = "none";
                document.getElementById("textBox").style.display = "flex";
                document.getElementById("replay").style.display = "flex";
                break;
        }
    }

    eventTrigger(eventDetails){
       imageMode(CENTER); 
       switch(eventDetails){
            case("start"):
                console.log("f");
                this.fadeEffect(sprites.envelope, width/2, height/2, width*0.5, height*0.5);
                break;

            case("openLetter"):
                background(0);
                image(sprites.envelope, width/2, height/2, width*0.5, height*0.5);
                this.fadeEffect(sprites.letter, width/2, height/2, width*0.35, height*0.9);
                sounds.letterIn.play();
                break;
            
            case("list"):
                this.fadeEffect(sprites.list0, width/2, height/2, width*0.40, height*0.95);
                sounds.letterIn.play();
                break;

            case("harry"):
                this.fadeEffect(sprites.harry, width/4, height/2, width*0.25, height*0.8);    
                break;

            case("ron"):
                this.fadeEffect(sprites.ron, (width/4)*3, height/2, width*0.25, height*0.8); 
                break;

            case("hermione"):
                this.fadeEffect(sprites.hermione, width/2, height/2, width*0.30, height*0.8); 
                break;

            case("goblin"):    
                image(sprites.goblin, (width/4)*2.5, height/2, width*0.25, height*0.8);
                break;

            case("madam"):
                image(sprites.madam, (width/4)*2.5, height/2, width*0.3, height*0.8);
                break;

            case("ollivander"):
                image(sprites.ollivander, (width/4)*2.5, height/2, width*0.25, height*0.8);
                break;

            case("box"):
                sounds.boxOpen.play();
                break;

            case("gilderoy"):
                image(sprites.gilderoy, (width/4)*2.5, height/2, width*0.20, height*0.8);
                break;

            case("eyelop"):
                image(sprites.eyelop, (width/4)*2.5, height/2, width*0.20, height*0.8);
                break;
            
            case("snape"):
                image(sprites.snape, (width/4)*2.5, height/2, width*0.25, height*0.8);
                break;

            case("letterIn"):
                sounds.letterIn.play();
                break;

            case("letterOut"):
                sounds.letterOut.play();
                break;          

            case("measureFabric"):
                sounds.measureFabric.play();
                break;

            case("measureWand"):
                sounds.measureWand.play();
                break;
                        
            case("diagonAlley"):
                imageMode(CORNER);
                background(sprites.diagonAlley);
                break;

            case("onlyRon"):
                background(sprites.diagonAlley);
                imageMode(CENTER);
                image(sprites.ron, width/2, height/2, width*0.30, height*0.8); 
                break;

            case("pay"):
                sounds.coin.play();
                break;
            
            case("bell"):
                sounds.bell.play();
                break;

            case("closeDoor"):
                sounds.doorClose.play();
                break;
            
            case("spell"):
                sounds.spell.play();
                break;
            
            case("owl"):
                image(sprites.owl, width/2, height/2, width*0.30, height*0.8);
                break;

            case("cat"):
                image(sprites.owl, width/2, height/2, width*0.30, height*0.8);
                break;

            case("toad"):
                image(sprites.owl, width/2, height/2, width*0.30, height*0.8);
                break;
        }

    }

    fadeEffect(img, x, y, w, h){
        let fadeAmount = 5;
        let interval;

        let stopInterval = () => {
            clearInterval(interval);
            this.fade = 0;
        }
        
        interval = setInterval(() => {
            imageMode(CENTER);
            tint(255, this.fade);
            image(img, x, y, w, h);
            this.fade += fadeAmount;
            // console.log(this.fade);
            if(this.fade >= 100){
                stopInterval();
            }
            tint(255, 255);
            this.displayText(dialogArray[index].speaker, dialogArray[index].message);
        }, 50);
    }

    comeInEffect(img, x, y, w, h){
        let size = 0;
        let increaseAmount = 10;
        let interval;

        let stopInterval = () => {
            clearInterval(interval);
            this.fade = 0;
        }
        
        interval = setInterval(() => {
            imageMode(CENTER);
            tint(255, this.fade);
            image(img, x, y, w, h);
            this.fade += fadeAmount;
            // console.log(this.fade);
            if(this.fade >= 100){
                stopInterval();
            }
            tint(255, 255);
            this.displayText(dialogArray[index].speaker, dialogArray[index].message);
        }, 50);

    }

}

