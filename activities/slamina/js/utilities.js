class Utilities{

    static drawStartScreen(font, img, doggos){
        background(191, 244, 255);

        for (let i = 0; i < doggos.length; i ++){
            this.animateDoggo(doggos[i],img);
        }

        fill(255);
        textSize(150);
        text('Slamina', width/2, height/4);

        if(frameCount % 60 < 30){
            fill(42, 66, 161);
            textSize(50);
            text('press SPACE to start!', width/2, height/2);
        }
    }


    static drawGame(currentAnimal, animalsArr) {

    }

    static drawEndScreen(){

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

}