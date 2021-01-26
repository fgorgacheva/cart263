// confetti by slow_izzm on P5.JS editor
// https://editor.p5js.org/slow_izzm/sketches/H1fhGJSaX
// i added comments all around to show my understanding of the piece of code 

class Confetti {
    constructor(x, y, s, color) {
        //the x and y would spawn them at random place but above the window, so it seems like they are falling from a higher place
        this.x = x;
        this.y = y;
        this.speed = s; //determines how fast the conffettis fall, all getting a different speed
        this.time = random(0, 100); //time affects the way that the conffetti rotates on itself on its way down
        this.color = random(color); //set color
        this.amp = random(2, 30); // determines the amplitude of the wiggle
        this.phase = random(0.5, 2); //affects how the confetti wiggles on its way down
        this.size = random(width / 25, height / 50); //how big the piece will be
        this.form = round(random(0, 1)); //to decide between ellipse or rectangle
    }
  
    confettiDisplay() {
        
        fill(this.color);
        noStroke();

        push();
        translate(this.x, this.y);
        //behavior of the wiggle by multiplying the amplitude by function of sin, and the speed by funtion of cos
        translate(this.amp * sin(this.time * this.phase), this.speed * cos(2 * this.time * this.phase));
        //ensures the confetti rotate on their own centers
        rotate(this.time);
        rectMode(CENTER);
        //this makes the confetti scale so it looks like it's rotating in 3D
        scale(cos(this.time / 4), sin(this.time / 4));
        //decide whether to generate a rectangle or an ellipse
        if (this.form === 0) {
            rect(0, 0, this.size, this.size / 2);
        } else {
            ellipse(0, 0, this.size);
        }
        pop();
    
        //makes the behavior (above code) dynamic, with this, nothing works, except the shapes falling down
        this.time = this.time + 0.1;
    
        //the behavior doesn't seem to change with or without this one, so i'm not 100% sure what it does
        this.speed += 1 / 200;
    
        //this makes the conffetti pieces fall down the window by combining the y coordinate and the speed they should fall at
        this.y += this.speed;
    }
  }