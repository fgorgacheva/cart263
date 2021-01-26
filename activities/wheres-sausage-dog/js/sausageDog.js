class SausageDog extends Animal {
    constructor(x, y, image) {
        super(x, y, image);

        this.found = false;
        this.rotation = 0.25;
    }


    update(){
        super.update();

        if(this.found){
            this.angle += this.rotation;
        }
    }

    wiggle(){
        
    }

    mousePressed(){
        if( super.mouseOver(mouseX, mouseY) ) {
            this.found = true;
        }
    }
}
