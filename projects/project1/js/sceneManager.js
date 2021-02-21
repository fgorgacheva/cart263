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
    sceneDialogArray;
    index = 0;


    constructor (){

        let firstSetting            = new Setting(0,                        {},                         {envelope: sprites.envelope, letter: sprites.letter});
        let diagonAlleySetting      = new Setting(sprites.diagonAlley,      sounds.diagonAlley,         {harry: sprites.harry, hermione: sprites.hermione, ron: sprites.ron});
        let gringottsSetting        = new Setting(sprites.gringotts,        sounds.gringotts,           {goblin: sprites.goblin});
        let madamMalkinsSetting     = new Setting(sprites.malkinsShop,      sounds.malkinsShop,         {madam: sprites.madam});
        let flourishNBlottsSetting  = new Setting(sprites.flourishnblotts,  sounds.flourishnblotts,     {gilderoy: sprites.gilderoy});
        let ollivandersSetting      = new Setting(sprites.ollivandersShop,  sounds.ollivanders_malkins, {ollivander: sprites.ollivander});
        let apothecarySetting       = new Setting(sprites.slugsnjiggers,    sounds.slugsnjiggers,       {snape: sprites.snape});
        let eyelopsSetting          = new Setting(sprites.eyelops,          sounds.eyelops,             {eyelop: sprites.eyelop});
        let lastScene               = new Setting(0,                        sounds.theme,               {});

        this.sceneDialogArray = dialogArray;
    }

    //will detect if the usesr clicked to continue the text
    onClick(){
        index++;
        this.loadSetting(dialogArray[index].setting);
        this.displayText(dialogArray[index].speaker, dialogArray[index].message);
    }

    displayText(speaker, dialog) {
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

    loadSetting(settingDetails){
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
                sounds.diagonAlley.stop();
                sounds.gringotts.play();
                break;
            case("madamMalkins"):
                background(sprites.malkinsShop); 
                sounds.diagonAlley.stop();
                sounds.ollivanders_malkins.play();
                break;
            case("flourishNBlotts"):
                background(sprites.flourishnblotts); 
                sounds.diagonAlley.stop();
                sounds.flourishnblotts.play();
                break;
            case("ollivanders"):    
                background(sprites.ollivandersShop); 
                sounds.diagonAlley.stop();
                sounds.ollivanders_malkins.play();
                break;
            case("slugsNJiggers"):
                background(sprites.slugsnjiggers); 
                sounds.diagonAlley.stop();
                sounds.slugsnjiggers.play();
                break;
            case("eyelops"):
                background(sprites.eyelops); 
                sounds.diagonAlley.stop();
                sounds.eyelops.play();
                break;
        }
    }
}

