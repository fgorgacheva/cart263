/**************************************************
contains basic logic concerning the minigames and 
related information and functionalities
**************************************************/
"use strict";

class Minigame {
    constructor(name){
        this.complete = false;
        this.name = name;
        this.initialized = false
    }

    displayButton(){
        if(this.complete == true){
            $("#flying").prop("disabled", true);
        }
        else{
            $("#" + this.name).show();
        }
    }

    
}

class CharmsMinigame extends Minigame{
    
    constructor(name){
        super(name);
       
    }

    init(){
        
    }

    draw(){
        
        imageMode(CORNER);
        $("#scheduleBtns").hide();
        background(sprites.charms);

    }
}

class FlyingMinigame extends Minigame{
    constructor(name){
        super(name);
        this.countdown = 3;
        this.timer = 0;
        this.playerPosition = {
            x: window.width / 2,
            y: window.height / 2,
            size: 300,
        }
        this.speedY = 0;
        this.gravity = 0.05;
        this.gravitySpeed = 0;
        this.gameover = false;
        this.playedWhistle = false;
    }

    init(){
        this.interval = setInterval(() => {
            if(this.countdown > -1){
                this.countdown--;
            } else {
                this.timer++;
            }
        }, 1000);

        document.addEventListener('keypress', (e) => {
            
            //press space to bring student back up
            if(e.code === 'Space'){
                this.isFlyingUp = true;
                this.speedY = 0;
                setTimeout(() => {
                    this.isFlyingUp = false;
                }, 200);
            }
        })
    }
    //brings the student back up in the air
    flyUp(){
        this.speedY += 2
        this.playerPosition.y -= this.speedY;
        this.gravitySpeed = 0;
    }

    //applies a force to make the student fall over time
    applyGravity(){
        this.gravitySpeed += this.gravity;
        this.playerPosition.y += this.gravitySpeed;
    }

    draw(){
        $("#scheduleBtns").hide();

        imageMode(CORNER);
        background(sprites.flying2);

        if(!this.initialized){
            this.initialized = true;
            console.log("Minigame initialized");
            this.init();
        }

        fill(255);
        textSize(500);
        textFont(hogwartsFont);
        textAlign(CENTER);
        //show start timer 3,2,1 
        if(this.countdown > 0){
            text(this.countdown, window.width / 2, window.height / 2);
        } else if(this.countdown == 0) {
            text("GO", window.width / 2, window.height / 2);
        } else {
            //display timer in the top left corner
            textSize(70);
            if(this.timer == 0){
                fill("#ff0022");
            }
            else{
                fill(255);
            }
            if(this.timer < 10){
                text("0:0"+this.timer, 100, 100);
            }
            else if (this.timer == 10){
                text("0:"+this.timer, 100, 100);
            }
    
            //display student in center of the window
            imageMode(CENTER);
            image(sprites.broom, this.playerPosition.x, this.playerPosition.y, this.playerPosition.size + 50, this.playerPosition.size);
            
            //apply the game function as long as the game isn't over
            if(!this.gameover){
                this.applyGravity();
                //press space to bring student back up
                if(this.isFlyingUp){
                    this.flyUp();
                }
                if(this.playerPosition.y < 0){
                    this.playerPosition.y =0;
                }
            }
        }

        //if student coordinate > window height: restart timer, reinitialize student in the center
        if(this.timer < 10 && this.playerPosition.y > window.height){
            this.timer = 0;
            fill("#ff0022");
            text("0:0"+this.timer, 100, 100);
            this.playerPosition = {
                x: window.width / 2,
                y: window.height / 2,
                size: 300,
            }
            this.speedY = 0;
            this.gravity = 0.05;
            this.gravitySpeed = 0;
        }
        else if(this.timer == 10){
            this.gameover = true;
            clearInterval(this.interval);
            this.complete = true;
            if(!this.playedWhistle){
                sounds.whistle.play();
                this.playedWhistle = true;

                
                setTimeout(() => {
                    subindex++;
                    sceneManager.minigameLaunched = false;
                }, 1000)
            }

        }
    }
}

class PotionsMinigame extends Minigame{

}

