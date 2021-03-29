let drawn = false;
class Utilities{

    
    static createImageSrc(imgName){
        return "./assets/images/" + imgName + ".png";
    }

    static drawStartScreen(){
        background("#fffed4");

        Object.keys(animalSprites).forEach((key,i) => {
            this.animateSprites(animalSprites[key]);

        });

        fill("#ffee00");
        textSize(100);
        text('Who\'s That Pokemon', width/2, height/4);

        if(frameCount % 60 < 30){
            fill(42, 66, 161);
            textSize(50);
            text('press SPACE to start', width/2, height/2);
        }
    }

    static drawInstructions(){
        background("#d6fdff");

        fill("#333333");
        textSize(30);
        text('<3 <3 <3 \n\n Once you hear the name of the pokemon reversed, \n just ask "Is it __?" and the pokemon you think it is! \n\n Left click to move through the game! \n\n Have fun!', width/2, height/2);

    }


    static drawGame() {   
        background("#ffd6d6");

        fill(255);

        //display score
        textSize(30);
        text("score: " + score, width/2,50);
        
        //print the reversed pokemon name above the image
        textSize(100);
        text(reverseAnimal, width/2, height/4); 
        
        //draw the pokemon in the center
        imageMode(CENTER);
        image(animalSprites[currentAnimal].img, width/2, height/2, 500, 500);

        //show the person's answer
        if (currentAnswer === currentAnimal) { //right answer
            fill(0,255,0);
            
            
        }
        else { //wrong answer
            fill(255,0,0);
        }
        text(currentAnswer, width/2, height*3/4+50);
    }


    static guessAnimal(animal) {
         currentAnswer = animal.toLowerCase();
         if(currentAnswer == currentAnimal){
             score += 50;
             rightSound.play();
         }
         else{
            wrongSound.play();
         }
         console.log(currentAnswer);
    }

    /**
    Reverses the provided string
    */
    static reverseString(string) {
        // Split the string into an array of characters
        let characters = string.split('');
        // Reverse the array of characters
        let reverseCharacters = characters.reverse();
        // Join the array of characters back into a string
        let result = reverseCharacters.join('');
        // Return the result
        return result;
    }

    static defineSprites(){ 
        Object.keys(animalSprites).forEach((key,i) => {
            animalSprites[key] = {
                img: loadImage(this.createImageSrc(key)),
                x: random(0, width - 100),
                y: random(0, height - 100),
                w: 100,
                h: 100,
                vx: 3,
                vy: 4
            }
        });
    }

    static animateSprites(sprite) {
        //when animal hits any side of the canvas, reverse direction
        sprite.vx *= ((sprite.x + sprite.w > width  || sprite.x < 0) ? -1 : 1);
        sprite.vy *= ((sprite.y + sprite.h > height || sprite.y < 0) ? -1 : 1);

        sprite.x = sprite.x + sprite.vx;
        sprite.y = sprite.y + sprite.vy;

        //draw the animal
        image(sprite.img, sprite.x, sprite.y, sprite.w, sprite.h);
    }

}