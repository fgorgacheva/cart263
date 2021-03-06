/**
 * Takes care of managing all scenes and dialog
 */

class SceneManager {    
    constructor(){
        this.scenes = {};
        this.scenes.beginning  = new Scene(sprites.stairs,    "MINERVA MCGONAGALL", sounds.greatHall,  sprites.mcgonagall);
        this.scenes.ceremony   = new Scene(sprites.ceremony,  "SORTING HAT",        sounds.sortingHat, sprites.hat);
        this.scenes.Ravenclaw  = new Scene(sprites.greatHall, "LUNA LOVEGOOD",      sounds.ravenclaw,  sprites.luna,         ravenclawDialog);
        this.scenes.Gryffindor = new Scene(sprites.greatHall, "GINNY WEASLEY",      sounds.gryffindor, sprites.ginny,        gryffindorDialog);
        this.scenes.Slytherin  = new Scene(sprites.greatHall, "DRACO MALFOY",       sounds.slytherin,  sprites.malfoy,       slytherinDialog);
        this.scenes.Hufflepuff = new Scene(sprites.greatHall, "CEDRIC DIGGORY",     sounds.hufflepuff, sprites.cedric,       hufflepuffDialog);
        this.scenes.feast      = new Scene(sprites.greatHall, "ALBUS DUMBLEDORE",   sounds.greatHall,  sprites.dumbledore);
        this.scenes.end        = new Scene(sprites.banquet,   "ME");
        this.scenes.plotTwist  = new Scene(sprites.plottwist, "ME",                 sounds.plottwist);

        this.currentScene = "beginning";

        this.questionnaire = new Questionnaire();

        this.isInPath = false; //checks if we are in path or not, to know to pause or resume the main story increment or increment the path index
    }


    main() {
        
        //set current scene and unload the previous one so sounds don't overlap
        if(commonDialog[index].scene && commonDialog[index].scene != this.currentScene){
            if(commonDialog[index].scene != "end"){
                this.scenes[this.currentScene]?.unload();
            }
            if(commonDialog[index].scene === "plotTwist"){
                this.scenes["feast"]?.unload();
            }

            this.currentScene = commonDialog[index].scene;
        }

        //if storyline reaches the question part, display the choices/buttons to the user to make a choice
        if(commonDialog[index].event === "pick"){
            this.questionnaire.displayButtons();
        }

        //if we reach the point where the path starts, run this 
        if(commonDialog[index].event === "path"){
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
                    this.scenes[this.questionnaire.result].draw(); //draw the path chosen's scene
                    this.scenes[this.currentScene]?.unload(); //unload the music that came before it

                    switch(this.questionnaire.result){
                        case("Ravenclaw"):
                            this.displayText(ravenclawDialog[subindex].speaker, ravenclawDialog[subindex].message);
                            break;
                        case("Slytherin"):
                            this.displayText(slytherinDialog[subindex].speaker, slytherinDialog[subindex].message);
                            break;
                        case("Hufflepuff"):
                            this.displayText(hufflepuffDialog[subindex].speaker, hufflepuffDialog[subindex].message);
                            break;
                        case("Gryffindor"):
                            this.displayText(gryffindorDialog[subindex].speaker, gryffindorDialog[subindex].message);
                            break;
                    }
                }
            }
        }
        else{ //draw scenes and display text as normal
            this.scenes[this.currentScene].draw();
            this.displayText(commonDialog[index].speaker, commonDialog[index].message);
        }

    }

    //will detect if the user clicked to continue the text or clicked on a button
    onClick(){
        
        if(this.isInPath){
            subindex++;
        }
        else{
            index++;
        }
        //check if the house has been picked by player and display the corresponding path and once that's done display the ending common to all paths
        
    }

    //displays the text styled and placed in the dialog box
    displayText(speaker, dialog) {
        if(index < commonDialog.length && speaker && dialog){
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