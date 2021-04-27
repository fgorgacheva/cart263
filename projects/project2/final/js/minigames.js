/**************************************************
contains minigames logic, related information and functionalities
**************************************************/
"use strict";

class Minigame {
    constructor(name){
        this.complete = false;
        this.name = name;
        this.initialized = false
    }

    //will either display the buttons or disable them when the game has been completed
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

    //initializes variables needed from the start
    init(){
        //sets up annyang to listen to the spell
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

    //takes a right answer and a wrong answer if it exists
    spellCast(correctAnswer, wrongAnswer){
        //if right answer, then play the success sound and set success behavior booleans to true
        if(correctAnswer){
            sounds.spell.play();
            this.isRightAnswer = true;
            this.isFloatingUp = true;

            //allow the feather to float for 5 seconds before the teacher says you did well
            setTimeout(() => {
                subindex++;
                sceneManager.minigameLaunched = false;
                this.complete = true;
            }, 5000)
        }
        //to print the wrong answer under the name of the spell
        else{
            this.showWrongAnswer = true; //to display the wrong answer (yes show it)
            this.wrongAnswer = wrongAnswer; //wrong answer to display (string)

            //will show the wrong answer for 2 seconds before disappearing (indicates to the user to try again)
            setTimeout(() => {
                this.showWrongAnswer = false; //to display the wrong answer (no don't show anymore)
            }, 2000);
        }
    }

    draw(){
        if(!this.initialized){            
            this.initialized = true;
            responsiveVoice.speak(this.spell);
        
            //allow 2 seconds from the game start before annyang starts listening for an answer
            //the spell is spoken first, and we don't want annyang to pick up responsiveVoice (if user is on speakers)
            setTimeout(() => {
                this.init();}
            , 2000);
        }

        //hide the class buttons and draw the charms background
        $("#scheduleBtns").hide();
        imageMode(CORNER);
        background(sprites.charms);

        //if the player answered wrong, display what they said/what annyang picked up 
        if(this.showWrongAnswer){
            fill("#fc0303");
            textFont(hogwartsFont);
            textSize(100);
            text(this.wrongAnswer, window.width / 2, window.height / 4 + 100);
        }

        //if the answer picked up is correct, then make the feather float 
        if(this.isRightAnswer){
            imageMode(CORNER);
            background(sprites.charms);
            imageMode(CENTER);
            image(sprites.feather, this.feather.x, this.feather.y, 600, 400);
            this.float(this.isFloatingUp);
        }
        //the rest of the time, display the correct spell at the top, which will disappear when the correct answer is given
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

    //float function will modify the featther's y position to make it go up and down
    //isUp(true), will make the feather go down, isUp(false) will make it go up
    float(isUp){
        if(isUp){
            this.speedY += 0.020;
            this.feather.y -= this.speedY;
            this.gravitySpeed = 0;
            if(this.feather.y < 250){ //defines top boundary
                this.isFloatingUp = false;
            }
        }
        else{
            this.gravitySpeed += 0.020;
            this.feather.y += this.gravitySpeed;
            this.speedY = 0;
            if(this.feather.y > window.height * 3 / 4){ //defines bottom boundary
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
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.gameover = false;
        this.playedWhistle = false;
    }

    //initializes variables needed from the start
    init(){

        //count down 3, 2, 1, GO! to prepare the user for the start of the game
        this.interval = setInterval(() => {
            if(this.countdown > -1){
                this.countdown--;
            } else {
                this.timer++;
            }
        }, 1000);

        //listen to space being pressed down
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
        //hide the minigame menu buttons and draw the flying class background
        $("#scheduleBtns").hide();
        imageMode(CORNER);
        background(sprites.flying2);

        //initialize the game
        if(!this.initialized){
            this.initialized = true;
            this.init();
        }

        //style the countdown and the timer text
        fill(255);
        textSize(500);
        textFont(hogwartsFont);
        textAlign(CENTER);

        //show start countdown 3,2,1 
        if(this.countdown > 0){
            text(this.countdown, window.width / 2, window.height / 2);

        } 
        //once the countdown reaches 0, display GO! (instead of zero)
        else if(this.countdown == 0) {
            text("GO", window.width / 2, window.height / 2);

        } 
        //display timer in the top left corner
        else { 
            textSize(70);
            if(this.timer == 0){ //when at 0, display it in red: 1) signals the start of the timer, 2) indicates to the user when the timer restarts
                fill("#ff0022");
            }
            else{ //fill it white the rest of the time
                fill(255);
            }
            //display in timer format
            if(this.timer < 10){ 
                text("0:0"+this.timer, 100, 100);
            }
            else if (this.timer == 10){
                text("0:"+this.timer, 100, 100);
            }
    
            //draw student in center of the window
            imageMode(CENTER);
            image(sprites.broom, this.playerPosition.x, this.playerPosition.y, this.playerPosition.size + 50, this.playerPosition.size);
            
            //apply the game function as long as the game isn't over
            if(!this.gameover){
                this.applyGravity();
                //press space to bring student back up
                if(this.isFlyingUp){
                    this.flyUp();
                }
                //reset the user position if the user falls down too low
                if(this.playerPosition.y < 0){
                    this.playerPosition.y = 0;
                }
            }
        }
        //if student y coordinate > window height: restart timer, redraw student in the center
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

    //initializes variables needed from the start
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

    //clicking ingredients behavior
    onClick(){
        if(this.ingredientName){
            //if cauldron is clicked with an ingredient, remove the ingredient for a "drop in" effect
            if(mouseX < window.width/2 + 200 && mouseX > window.width/2 - 200 &&
               mouseY < window.height*3/4 + 200 && mouseY > window.height*3/4 - 200){
                    //add the ingredient to the attempted recipe array
                    this.attemptedRecipe.push(this.ingredientName);
                        
                    $("#" + this.ingredientName).prop("disabled", true);
                    this.ingredientName = null;
                    if(this.attemptedRecipe.length == 3) {
                        this.gameOver(JSON.stringify(this.attemptedRecipe) == JSON.stringify(this.rightRecipe));
                    }
            } 
        }
    }

    //end game behavior
    gameOver(isGood){
        //if the correct recipe was followed, success sound plays, and dialog is added to snape
        if(isGood){
            sounds.potion.play();
            this.success = true;
            sceneManager.scenes[sceneManager.minigameClicked].pathDialog.splice(subindex + 1, 0, {speaker: "SEVERUS SNAPE", message: "You can properly follow instructions, congratulations " + userName + "..." });
        } 
        //if the recipe failed, play fail sound and add failure dialog to snape
        else {
            sounds.bad_potion.play();
            sceneManager.scenes[sceneManager.minigameClicked].pathDialog.splice(subindex + 1, 0, {speaker: "SEVERUS SNAPE", message: "What a disappointment, " + userName + "..."});
        }

        //wait 1.5 seconds to either show the succes phial or play out the fail sound before snape says anything
        setTimeout(() => {
            subindex++;
            sceneManager.minigameLaunched = false;
            sceneManager.minigames.potions.started = false;
            this.complete = true;
        }, 1500);
    }

    draw(){
        //hide the minigame menu buttons and draw the potions class background
        if(!this.initialized){
            this.initialized = true;
            this.init();
        }

        //when ready, draw the second background (table with cauldron on top)
        imageMode(CORNER);
        background(sprites.potions2); 
        imageMode(CENTER);
        image(sprites.cauldron, window.width/2, window.height*3/4, 400, 400);
        
        //bind the ingredient image to the mouse when clicked for a "pick up"
        if(this.ingredientName){
            imageMode(CORNER);
            image(sprites[this.ingredientName], mouseX - 100, mouseY - 100, 200, 200);
        }

        //display the phial on successful potion
        if(this.success){
            imageMode(CORNER);
            background(sprites.potions);
            imageMode(CENTER);
            image(sprites.phial, window.width/2, window.height/2);
        }

    }


}

