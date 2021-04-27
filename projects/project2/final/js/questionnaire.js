/**
 * quiz logic
 */
class Questionnaire {

    constructor(){
        this.result;
        this.fired = false;
        this.questionCount = 1;
        this.eventBound = false;
    }

    //when called, show the buttons and when clicked, show the next question and set of buttons
    displayButtons(){
        //binding the onClick event onto the buttons with class .next
        if(!this.eventBound){
            $(".next").on('click', (e) => {
                e.preventDefault();
                $(".questionnaire").hide();
                index++;
                this.fired = false;
            })
            this.eventBound = true; //setting to true so the bind only happens once
        }
        //if a result hasn't been determined yet and if this event has already happend
        if(!this.result && !this.fired){
            this.fired = true; //ensures it only happens once
            $(".questionnaire").hide(); //hide the buttons once the answered
            
            //ensures that the right buttons(answers) are shown for the rright question
            let qID = commonDialog[index].question;
            $("#" + qID).css('display', 'flex');
        }

    }

    //gets a random house
    getHouse(){
        let houses = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
        let pick = houses[Math.floor(Math.random()*4)];
        return pick;
    }

    //sets the random house to the result
    setHouse(house){
        //house is defined before so it can be used to fill in the dialog
        //result is used in the sceneManager to control the path continuation
        //so house is set at the beginning, but once ready to enter a path, we set the result to the house we got at the beginning
        this.result = house;
    }
    


}