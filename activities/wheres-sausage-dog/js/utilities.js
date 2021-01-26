class Utilities{

    static startScreen(font, img, doggos){
        background(191, 244, 255);

        for (let i = 0; i < doggos.length; i ++){
            this.animateDoggo(doggos[i],img);
        }

        fill(255);
        textSize(150);
        text('Where\'s Sausage Dog?', width/2, height/4);

        if(frameCount % 60 < 30){
            fill(42, 66, 161);
            textSize(50);
            text('press SPACE to start!', width/2, height/2);
        }

    }

    static createDoggos(){ 
        let doggos = Array.from(Array(20));
        return doggos.map(() => {
            var dog = {
                x: random(0, width - 100),
                y: random(0, height - 100),
                w: 100,
                h: 100,
                vx: 3,
                vy: 4
            };
            return dog;
        });

    }

    static animateDoggo(dog, img) {
        //when dog hits any side of the canvas, reverse direction
        dog.vx *= ((dog.x + dog.w > width  || dog.x < 0) ? -1 : 1);
        dog.vy *= ((dog.y + dog.h > height || dog.y < 0) ? -1 : 1);

        dog.x = dog.x + dog.vx;
        dog.y = dog.y + dog.vy;

        //draw the dog
        image(img, dog.x, dog.y, dog.w, dog.h);
    }

    static setupGame(numAnimals, animalImages, animals, triggerEndScreen){
        //create the 100 animals
        for(let i = 0; i < numAnimals; i++){
            let x = random(0, width);
            let y = random(0, height);
            let image = random(animalImages);
            let animal = new Animal(x, y, image);
            animals.push(animal);
        }

        sausageDog = new SausageDog (random(0, width), random(0,height), sausageDogImg, triggerEndScreen);
    }

    static drawGame(){
        background(191, 244, 255);

        for(let i = 0; i < animals.length; i++){
            animals[i].update();
        }

        sausageDog.update();
    }

    static setupEndScreen(){
        let confettiColor = [], confetti = [];



        confettiColor = [color('#f542a1'), color('#5007ed'), color('#8ee864')];
        for (let i = 0; i < 100; i++) {
            confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1), confettiColor);
        }

        return {
            confettiColor,
            confetti
        };
    }

    static drawEndScreen(stuff){
        //background();

        let confetti = stuff.confetti;
        let confettiColor = stuff.confettiColor;
        let winImg = stuff.img;

        for (let i = 0; i < confetti.length / 2; i++) {
            confetti[i].confettiDisplay();
        
            if (confetti[i].y > height) {
              confetti[i] = new Confetti(random(0, width), random(-height, 0), random(0, 1), confettiColor);
            }
          }
        
          for (let i = int(confetti.length / 2); i < confetti.length; i++) {
            confetti[i].confettiDisplay();
        
            if (confetti[i].y > height) {
              confetti[i] = new Confetti(random(0, width), random(-height, 0), random(0, 1), confettiColor);
            }
          }
    }




}