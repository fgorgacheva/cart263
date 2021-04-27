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
            $("#" + this.name).prop("disabled", true);
            $("#" + this.name).removeClass("class");
            $("#" + this.name).addClass("disabled");
        }
        else{
            $("#" + this.name).show();
        }
    }
}

class CharmsMinigame extends Minigame{
    
    constructor(name){
        super(name);
        this.spell = "wingardium leviosa"
        this.currentAnswer;
        this.spellCast = this.spellCast.bind(this);
        this.showWrongAnswer = false;
        this.isRightAnswer = false;
        this.wrongAnswer;
        this.feather = {
            x: window.width /2,
            y: window.height*3/4
        }
        this.isFloatingUp = false;
        this.speedY = 0;
        this.gravitySpeed = 0;
    }

    init(){
        if(annyang){
            console.log("listening");
            let commands = {
                'Wingardium Leviosa': () => this.spellCast(true),
                '*anything': (wrongAnswer) => this.spellCast(false, wrongAnswer)
            };
            annyang.addCommands(commands);
            annyang.start();
        }
    }

    spellCast(correctAnswer, wrongAnswer){
        if(correctAnswer){
            sounds.spell.play();
            this.isRightAnswer = true;
            this.isFloatingUp = true;
            setTimeout(() => {
                subindex++;
                sceneManager.minigameLaunched = false;
                this.complete = true;
            }, 4500)
        }
        else{
            //print wrongAnwser
            this.showWrongAnswer = true;
            this.wrongAnswer = wrongAnswer;

            setTimeout(() => {
                this.showWrongAnswer = false;
            }, 2000);
        }
    }

    draw(){
        if(!this.initialized){            
            this.initialized = true;
            responsiveVoice.speak(this.spell);
            //
            setTimeout(() => {
                console.log("charms initialized");
                this.init();}
            , 2000);
        }

        $("#scheduleBtns").hide();
        imageMode(CORNER);
        background(sprites.charms);

        if(this.showWrongAnswer){
            fill("#fc0303");
            textFont(hogwartsFont);
            textSize(100);
            text(this.wrongAnswer, window.width / 2, window.height / 4 + 100);
        }
        if(this.isRightAnswer){
            imageMode(CORNER);
            background(sprites.charms);
            imageMode(CENTER);
            image(sprites.feather, this.feather.x, this.feather.y, 600, 400);
            this.float(this.isFloatingUp);
        }
        else{
            fill(255);
            textFont(hogwartsFont);
            textSize(200);
            textAlign(CENTER);
            text("Wingardium Leviosa", window.width / 2, window.height / 4);
            imageMode(CENTER);
            image(sprites.feather, this.feather.x, this.feather.y, 600, 400);
        }
    }

    float(isUp){
        if(isUp){
            this.speedY += 0.020;
            this.feather.y -= this.speedY;
            this.gravitySpeed = 0;
            if(this.feather.y < 250){
                this.isFloatingUp = false;
            }
        }
        else{
            this.gravitySpeed += 0.020;
            this.feather.y += this.gravitySpeed;
            this.speedY = 0;
            if(this.feather.y > window.height * 3 / 4){
                this.isFloatingUp = true;
            }
        }
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
            console.log("flying initialized");
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
                    this.playerPosition.y = 0;
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
    constructor(name){
        super(name);
        this.rightRecipe = ["mushroom", "mandrake", "batwing"];
        this.attemptedRecipe = [];
        this.success = false;
        this.ingredientName;
        this.started = false;
    }

    onClick(){
        if(this.ingredientName){
            if(mouseX < window.width/2 + 200 && mouseX > window.width/2 - 200 &&
                mouseY < window.height*3/4 + 200 && mouseY > window.height*3/4 - 200){
                    console.log("EE");
                    this.attemptedRecipe.push(this.ingredientName);
                        
                    $("#" + this.ingredientName).prop("disabled", true);
                    this.ingredientName = null;
                    if(this.attemptedRecipe.length == 3) {
                        this.gameOver(JSON.stringify(this.attemptedRecipe) == JSON.stringify(this.rightRecipe));
                    }
            } 
        }
    }

    gameOver(isGood){
        if(isGood){
            sounds.potion.play();
            this.success = true;
            sceneManager.scenes[sceneManager.minigameClicked].pathDialog.splice(subindex + 1, 0, {speaker: "SEVERUS SNAPE", message: "You can properly follow instructions, congratulations " + userName + "..." });
        } else {
            sounds.bad_potion.play();
            sceneManager.scenes[sceneManager.minigameClicked].pathDialog.splice(subindex + 1, 0, {speaker: "SEVERUS SNAPE", message: "What a disappointment, " + userName + "..."});
        }

        this.madeCorrectPotion = isGood;

        setTimeout(() => {
            subindex++;
            sceneManager.minigameLaunched = false;
            sceneManager.minigames.potions.started = false;
            this.complete = true;
        }, 1500);
    }

    init(){
        this.started = true;
        $("#potionIngredientBtns").css('display', 'flex');
        $(".ingredients").on('click', (e) => {
            e.preventDefault();
            this.ingredientName = e.target.id;
            $(".ingredients").removeClass("selected");
            $("#" + this.ingredientName).addClass("selected");
        });
    }

    draw(){

        if(!this.initialized){
            this.initialized = true;
            console.log("potions initialized");
            this.init();
        }

        imageMode(CORNER);
        background(sprites.potions2);
        
        imageMode(CENTER);
        image(sprites.cauldron, window.width/2, window.height*3/4, 400, 400);
        
        
        if(this.ingredientName){
            imageMode(CORNER);
            image(sprites[this.ingredientName], mouseX - 100, mouseY - 100, 200, 200);
        }

        if(this.success){
            imageMode(CORNER);
            background(sprites.potions);
            imageMode(CENTER);
            image(sprites.phial, window.width/2, window.height/2);
        }

    }


}

