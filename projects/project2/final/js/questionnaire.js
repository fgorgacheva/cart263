//this class takes care of keeping track of the questions and gathering the information given by the user to calculate which house they should be sorted in based on their answers
class Questionnaire {

    constructor(){
        this.result;
        this.fired = false;
        this.questionCount = 1;
        this.eventBinded = false;
    }

    displayButtons(){
        if(!this.eventBinded){
            $(".next").on('click', (e) => {
                e.preventDefault();
                $(".questionnaire").hide();
                index++;
                this.fired = false;
            })
            this.eventBinded = true;
        }
        if(!this.result && !this.fired){
            this.fired = true;
            $(".questionnaire").hide();
            
            let qID = commonDialog[index].question;
            $("#" + qID).css('display', 'flex');
        }

    }

    getHouse(){
        let houses = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
        let pick = houses[Math.floor(Math.random()*4)];
        return pick;
    }

    setHouse(house){
        this.result = house;
    }
    


}