class Utilities{

    static displayInformation(){
        let profile = `** CONFIDENTIAL! DO NOT DISTRIBUTE! **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Colors: ${spyProfile.colors}
Cape: ${spyProfile.cape}
Password: ${spyProfile.password}`;

    push();
    textFont('Courier, monospace');
    textSize(30);
    textAlign(TOP, LEFT);
    fill(0);
    textStyle(BOLD);
    text(profile, 200, 300);
    pop();
    }
    
    static generateSpyProfile() {
        //ask for input
        console.log("Test");
        spyProfile.name = prompt('Hero!! What is your name?');
    
        //generatet the info
        spyProfile.alias = `The ${random(instrumentData.instruments)}`;
        spyProfile.secretWeapon = random(objectData.objects);
        let card = random(tarotData.tarot_interpretations);
        spyProfile.password = random(card.keywords);

        let color1 = random(colors.colors);
        let color2 = random(colors.colors);
        spyProfile.colors = `${color1.color}, ${color2.color}`;
        spyProfile.cape = random(cape);
    
        //save the info
        localStorage.setItem('spy-profile-data', JSON.stringify(spyProfile));
    }

    static deleteProfile(){
        localStorage.clear();
        spyProfile = {
            name: '*REDACTED*',
            alias: '*REDACTED*',
            secretWeapon: '*REDACTED*',
            colors: '*REDACTED*',
            cape: '*REDACTED*',
            password:'*REDACTED*'
        };

        Utilities.generateSpyProfile();
    }
}