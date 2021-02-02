class SausageDog extends Animal {
    constructor(x, y, image, endScreen) {
        super(x, y, image);

        this.found = false;
        this.rotation = 0.25;

        this.endScreen = endScreen;
    }


    update(){
        super.update();

        if(this.found){
            this.angle += this.rotation;
        }
    }


    mousePressed(){
        if( super.mouseOver(mouseX, mouseY) ) {
            this.found = true; 
            this.endScreen();
        }
    }
}
