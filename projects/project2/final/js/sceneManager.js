/**
 * Takes care of managing all scenes and dialog
 */

 class SceneManager {    
    constructor(){
        this.scenes = {};

        houses.forEach((e) =>{
            this.scenes[e] = new Scene(sprites.greatHall, houseDictionary[e].sound, houseDictionary[e].charName, houseDictionary[e].charSprite, houseDictionary[e].dialog);
        });

        this.scenes.beginning  = new Scene(sprites.stairs,    sounds.greatHall,  "MINERVA MCGONAGALL", sprites.mcgonagall);
        this.scenes.calling    = new Scene(sprites.ceremony,  sounds.sortingHat, "MINERVA MCGONAGALL", sprites.mcgonagall);
        this.scenes.ceremony   = new Scene(sprites.ceremony,  sounds.sortingHat, "SORTING HAT",        sprites.hat,                 null,               false);
        this.scenes.feast      = new Scene(sprites.greatHall, sounds.greatHall,  "ALBUS DUMBLEDORE",   sprites.dumbledore);
        this.scenes.night      = new Scene(sprites.banquet,   null,              "ME");
        this.scenes.classes    = new Scene(sprites.hallway,   sounds.ambience,   "ME",                 );
        this.scenes.potions    = new Scene(sprites.potions,   null,              "SEVERUS SNAPE",      sprites.snape,               potionsDialog);
        this.scenes.charms     = new Scene(sprites.charms,    null,              "FILIUS FLITWICK",    sprites.flitwick,            charmsDialog);
        this.scenes.flying     = new Scene(sprites.flying,    null,              "ROLANDA HOOCH",      sprites.hooch,               flyingDialog);

        this.currentScene = "beginning";
        this.isShowingMinigamesButton = false;
        this.minigameLaunched = false;
        this.questionnaire = new Questionnaire();
        
        this.minigames = {};
        this.isInPath = false; //checks if we are in path or not, to know to pause or resume the main story increment or increment the path index
        this.minigames.potions = new PotionsMinigame("potions", sprites.snape);
        this.minigames.charms  = new CharmsMinigame("charms", sprites.flitwick);
        this.minigames.flying  = new FlyingMinigame("flying", sprites.hooch);
        this.minigameClicked;
        this.isInMinigame = false; //checks if we're currently in a minigame scene or not
    }


    main() {
        //set current scene and unload the previous one so sounds don't overlap
        if(commonDialog[index].scene && commonDialog[index].scene != this.currentScene){
            if(commonDialog[index].scene != "night" && commonDialog[index].scene != "ceremony"){
                this.scenes[this.currentScene]?.unload();
            }
            this.currentScene = commonDialog[index].scene;
            if(this.currentScene == "classes"){
                this.scenes["feast"].unload();
            }
        }

        //if storyline reaches the question part, display the sorting quiz
        if(commonDialog[index].event === "pick"){
            this.questionnaire.displayButtons();
        }
        //set the quiz result to the house
        if(commonDialog[index].event === "getHouse"){
            this.questionnaire.setHouse(house);
        }
        //load minigame menu/buttons
        if(commonDialog[index].event === "loadMiniGameMenu" && !this.isShowingMinigamesButton){
            this.isShowingMinigamesButton = true;

            //create 3 minigames objects and show buttons for each one
            $("#scheduleBtns").css('display', 'flex');
            this.minigames.potions.displayButton();
            this.minigames.charms.displayButton();
            this.minigames.flying.displayButton();

            //if all 3 games have been completed, create the last scene object and resume the path continnuing after the classes (and hide the buttons)
            if(this.minigames.potions.complete && this.minigames.charms.complete && this.minigames.flying.complete){
                this.scenes.endDay = new Scene(houseDictionary[house].commonRoom, houseDictionary[house].sound, houseDictionary[house].charName, houseDictionary[house].charSprite, commonDialog[index]);                
                index++;
                $("#scheduleBtns").css('display', 'none');
            }

            //onClick one of the game buttons to launch that game
            $(".class").on('click', (e) =>{
                e.preventDefault();
                subindex = 0;
                this.isInMinigame = true;
                this.currentMinigame = this.minigames[e.target.id];
                this.minigameClicked = e.target.id;
                $("#scheduleBtns").css('display', 'none');
            });
        }

        //if we are in the minigame
        if(this.isInMinigame){
            //draw the scene and display the text. until the game logic is launched
            this.scenes[this.minigameClicked].draw();
            this.displayText(this.scenes[this.currentMinigame.name].pathDialog[subindex].speaker, this.scenes[this.currentMinigame.name].pathDialog[subindex].message);
            if(this.scenes[this.currentMinigame.name].pathDialog[subindex].event === "launch"){
                this.currentMinigame.draw();
                this.minigameLaunched = true;
            }
        }
        else if(commonDialog[index].event === "path"){  //if we reach the point where the path starts, run this 
            this.isInPath = true; //indicates that we are now in path 
            if(this.questionnaire.result){ //check if user has picked a house
                //if path is finished stop scene music and set isInPath to fasle to continue main story line else load the path characters, text and music
                if(this.scenes[this.questionnaire.result].pathDialog && (subindex == this.scenes[this.questionnaire.result].pathDialog.length)){
                    this.isInPath = false; //we are no longer in path
                    index++; //increment index by 1 because it is 1 behind upon resume
                    this.scenes[this.questionnaire.result].unload(); //unload the path music
                    this.currentScene = "feast"; //set the current scene to the one following the path upon resume
                }
                else{
                    this.scenes[this.questionnaire.result].draw(); //draw the path scene
                    this.scenes[this.currentScene]?.unload(); //unload the music that came before it

                    //replace the HOUSE CHAR placeholder of the path dialog with the correct character name
                    if(houseDictionary[house].dialog[subindex].speaker === "HOUSE CHAR"){
                        houseDictionary[house].dialog[subindex].speaker = houseDictionary[house].charName;
                    }

                    this.displayText(houseDictionary[house].dialog[subindex].speaker, houseDictionary[house].dialog[subindex].message);
                }
            }
        }
        else{ //draw scenes and display text as normal
            //but if the event is endDay, then check for the "HOUSE CHAR" place holder and replace it with the correct character name
            if(this.currentScene === "endDay"){
                if(commonDialog[index].speaker === "HOUSE CHAR"){
                    commonDialog[index].speaker = houseDictionary[house].charName;
                }
            }

            //else draw as normal
            this.scenes[this.currentScene].draw();
            this.displayText(commonDialog[index].speaker, commonDialog[index].message);

            //redraw the background to "remove" the character when we go to sleep
            if(commonDialog[index].event === "sleep"){
                imageMode(CORNER);
                background(houseDictionary[house].commonRoom);
            }
        }

        //transition event draws a black screen to define clearer separation between big scene changes
        if(commonDialog[index].event === "transition"){
            background(0);
        }
    }

    //will detect if the user clicked to continue the text or clicked on a button
    //ensures that while the story goes through, we can click to continue, unless buttons are presented
    onClick(){
        if(userName && nameIsVerified && commonDialog[index].event !== "pick" && !this.minigameLaunched ){
            if((commonDialog[index].event === "loadMiniGameMenu" && !this.isInMinigame)){
                return;
            }
            //check if the house has been picked by player and display the corresponding path and once that's done resume the main path
            if(this.isInPath || this.isInMinigame){ 
                subindex++;
            }
            else{
                index++;
            }
        }   
    }

    //displays the text styled and placed in the dialog box
    displayText(speaker, dialog) {
        if(index < commonDialog.length && speaker && dialog){
            imageMode(CENTER);
            image(sprites.dialogBox, width/2, height*0.86, width*0.7, height*0.23);
        
            imageMode(CORNER);
            fill('#2b2b2b');

            if(speaker === "ME"){
                textFont(schoolFont);
                textAlign(LEFT);
                textSize(width*0.0125);
                text(dialog, width*0.22, height*0.85, width*0.55);
            }
            else{
                textFont(hogwartsFont);
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


}