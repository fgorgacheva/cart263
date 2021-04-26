/**
 * A scene object will contain all the information about a scene (background, character, music/sound) and contains the methods that will lay out/draw these images appropriately
 */

 class Scene {

    //takes the elements that form this scene
    constructor(background, speaker, sound, character, path, playSound = true){
        this.background = background;
        this.speaker    = speaker;
        this.music      = sound;
        this.char       = character;
        this.pathDialog = path;

        this.playHistory = {};
        this.size = 0;
        this.drawChar = false;
        this.playSound = true;
        if(playSound == false){
            this.playSound = playSound
        }
    }

    //will draw the elements of the scene onto the screen
    draw() {
        
        imageMode(CORNER);
        background(this.background);
        
        if(this.pathDialog && this.pathDialog[subindex]?.event == "minigame"){
            this.minigame.draw();
            return;
        }

        if(this.pathDialog && this.pathDialog[subindex]?.event == "returnToClasses"){
            sceneManager.isShowingMinigamesButton = false;
            sceneManager.minigameLaunched = false;
            sceneManager.isInMinigame = false;
            index--;
        }

        if( this.music && !this.playHistory[this.music] && this.background != sprites.banquet && this.playSound){
            this.playHistory[this.music] = true;
            this.music.play();
        }
        
        if(commonDialog[index].event === "appear" || (this.pathDialog && this.pathDialog[subindex] && this.pathDialog[subindex].event === "appear")){
            this.drawChar = true;  
        } 
        
        if(this.drawChar){
            this.comeInEffect(this.char, width/2, height/2, width*0.30, height*0.8); 
        }

    }

    unload() {
        if(this.background != sprites.banquet){
            this.music.stop();
        }
    }


    //an effect on characters to make their appearance more dynamic (small to big, like a zoom in effect)
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