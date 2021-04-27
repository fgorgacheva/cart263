/**
 * A scene object
 * contains all the information about a scene (background, sound, speaker, character, path, playSound) and contains the methods that will lay out/draw these images appropriately
 */

 class Scene {

    //takes the elements that form this scene
    constructor(background, sound, charName, charSprite, path, playSound = true){
        this.background = background; //background image
        this.charName   = charName; //the charachter who is speaking's name
        this.music      = sound; //the music of that scene
        this.charSprite = charSprite; //the character's sprite
        this.pathDialog = path; //opt: the path dialog of the scene

        this.playHistory = {}; //keeps track of play history of sounds so when called in draw, they are only called once forever and not once every frame
        this.size      = 0; //size of sprites start at 0 to become bigger for the "come in" effect
        this.drawChar  = false; //drawing the character sprit eis a timed event, it's not drawing immediately
        
        this.playSound = playSound; //playsound is true by default unless specified otherwise by passing false

    }

    //will draw the elements of the scene onto the screen
    draw() {
        
        imageMode(CORNER);
        background(this.background);
        
        //checks if we've reached a minigame, and launches the minigame
        if(this.pathDialog && this.pathDialog[subindex]?.event == "minigame"){
            this.minigame.draw();
            return;
        }

        //event returnToClasses is to go back to the minigame menu to pick another game if not all 3 have been completed        
        if(this.pathDialog && this.pathDialog[subindex]?.event == "returnToClasses"){
            sceneManager.isShowingMinigamesButton = false;
            sceneManager.minigameLaunched = false;
            sceneManager.isInMinigame = false;
        }

        //ensures that music only starts/plays once
        if(this.music && !this.playHistory[this.music] && this.background != sprites.banquet && this.playSound){
            this.playHistory[this.music] = true;
            this.music.play();
        }

        //if the event appear exists, this will draw the character sprite using the "come in" effect
        if(commonDialog[index].event === "appear" || (this.pathDialog && this.pathDialog[subindex]?.event === "appear")){
            this.drawChar = true;  
        } 

        //if the event is sleep or alone, it will not draw the character so they can appear to "leave" the scene
        if(commonDialog[index].event == "sleep" || commonDialog[index].event == "alone"){
            this.drawChar = false;
        }

        //when the game is over, display the "play again" message and button
        if(commonDialog[index].event == "gameOver"){
            background(0);
            $("#replay").css('display', 'flex');
        }
        //when drawchar is true, use the effect to draw them
        if(this.drawChar){
            this.comeInEffect(this.charSprite, width/2, height/2, width*0.25, height*0.8); 
        }

    }

    //when called will stop the sound currently playing
    unload() {
        // stop all music except if its the banquet()
        if(this.background != sprites.banquet){
            this.music.stop();
        }
    }


    //an effect on characters to make their appearance/entrance more dynamic (small to big, like a zoom in effect)
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