//this class takes care of keeping track of the questions and gathering the information given by the user to calculate which house they should be sorted in based on their answers
class Questionnaire {

    constructor(){
        this.result;

        // this.gryffindor = 0;
        // this.slytherin  = 0;
        // this.hufflepuff = 0;
        // this.ravenclaw  = 0;
    }

    displayButtons(){
        if(!this.result){
            $("#buttons").show("swing").css('display', 'flex');
            index--;
        }
    }

    houseChoice(opt){
        this.result = opt;
        console.log(opt);
        
        if(this.result){
            $("#buttons").hide();
            index++;
            
        }
    }
    


}