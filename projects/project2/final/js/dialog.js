let commonDialog;
let ravenclawDialog;
let gryffindorDialog;
let slytherinDialog;
let hufflepuffDialog;


function initDialog(username){
    commonDialog = [
        //1 scene: =================================================================================================================================================
        {scene:   "beginning",     char:    "mcgonagall"},
        {speaker: "ME",            message: "I cannot believe I am finally here! Hogwarts doesn't look like anything I've ever seen!"},
        {speaker: "MINERVA MCGONAGALL",       message: "Welcome to Hogwarts!", event: "appear"},
        {speaker: "MINERVA MCGONAGALL",       message: "Before the banquet begins, you must all first be sorted into your Hogwarts House. Once you are called, come forward and I shall place the sorting hat on your head."},
        //say name entered earlier
        // {speaker: "MINERVA MCGONAGALL",       message: ""},
    
        {event: "transition"},

        //inter
        {scene:   "calling",      char:    "mcgonagall"},
        {speaker: "MINERVA MCGONAGALL",       message: "Alright now, children. Form a line and when I call you, please step forward.", event: "appear"},
        {speaker: "MINERVA MCGONAGALL",       message: username + "!"}, {},
        {speaker: "MINERVA MCGONAGALL",       message: "Sit here."},
        
        

        //2 scene: =================================================================================================================================================
        {scene:   "ceremony",      char:    "hat"},
        {speaker: "SORTING HAT",   message: "Hmm... Well then, " + userName + ", why don't you tell me a bit about yourself..?", event: "appear" },
        
    
        //QUESTIONS: ===============================================================================================================================================
      
        {speaker: "SORTING HAT",      message: "What is your favorite desert?", question: "q1", event: "pick"},
        {speaker: "SORTING HAT",      message: "Pick an animal.", question: "q2" , event: "pick"},
        {speaker: "SORTING HAT",      message: "What kind of bread are you?", question: "q3", event: "pick"},
        {speaker: "SORTING HAT",      message: "What is your favorite dish?", question: "q4", event: "pick"},
        {speaker: "SORTING HAT",      message: "If clouds were cotton candy which one would you eat?", question: "q5", event: "pick"}, {},
        {speaker: "SORTING HAT",      message: "Hmm..... Mhm.. I see.... Interesting!", event:"getHouse"},
        {speaker: "SORTING HAT",      message: "Then it shall be... " + house + "!!!"},

        {event: "transition"},
    
        {event: "path"},
    
       //3 scene : =================================================================================================================================================
        {scene:   "feast",         char:    "dumbledore"},
        {speaker: "ALBUS DUMBLEDORE",    message: "Welcome! Welcome to a new year at Hogwarts! Before we begin our banquet, I would like to say a few words. And here they are: ", event: "appear"},
        {speaker: "ALBUS DUMBLEDORE",    message: "Nitwit! Blubbler! Oddment! Tweak!"},
        {speaker: "ALBUS DUMBLEDORE",    message: "Thank you!"},
    
    
        //4 scene : =================================================================================================================================================
        {scene:   "night"},
        {speaker: "ME",            message: "I thought he sounded mad, but at this moment, incredible amounts of delicious looking food appeared on all the long table accross the Great Hall!"},
        {speaker: "ME",            message: "I can't think anymore, all this food looks amazing!"},
        {speaker: "ME",            message: "This is my life now! I'm a wizard attending Hogwarts...!"},

        {event: "transition"},

        //6 scene : =================================================================================================================================================
        {scene: "classHallway"},
        {speaker: "ME",            message: "Today is the very first day in this new life! I've got classes to take about magical stuff and ... magic!"},
        {speaker: "ME",            message: "Let's see here.. What do I have for today? "},

        {event: "loadMiniGameMenu"},

        {scene: ""}


    ];
    
    //5 scenes
    ravenclawDialog = [
        {scene:   "Ravenclaw",     char:    "luna"},
        {speaker: "LUNA LOVEGOOD", message: "Hi there! " + userName + ", right? My name's Luna, it's nice to meet you. I'm a first year too!", event: "appear"},
        {speaker: "ME",            message: "It's nice to meet you too, Luna! Are you new to the wizarding world too?"},
        {speaker: "LUNA LOVEGOOD", message: "No... My shoes have magically disappeared, but I'm not concerned. They'll show up sometime - even when you least expect it."},
        {speaker: "ME",            message: "That's- I- Huh... I hope they show up soon, having shoes is pretty neat most of the time."},
        {speaker: "LUNA LOVEGOOD", message: "Thank you!"}
    ];

    gryffindorDialog = [
        {scene:   "Gryffindor",    char:    "ginny"},
        {speaker: "GINNY WEASLEY", message: "Hey, it's nice to meet you, " + userName + "! I- I'm Ginny, nice to meet you!", event: "appear"},
        {speaker: "ME",            message: "Oh it's you! I met your brother, Ron, in Diagon Alley! He told me you'd be here! So first year huh, how do you feel?"},
        {speaker: "GINNY WEASLEY", message: "I'm very excited! I have six older brothers who've all been to Hogwarts, well four are still here. But now it's my turn, too!"},
        {speaker: "ME",            message: "Wow that is one big family! I'm also very excited, I'm almost shaking! Well I can't wait to spend this new year with you!"},
        {speaker: "GINNY WEASLEY", message: "Me too!"}
        ];

    slytherinDialog = [
        {scene:   "Slytherin",     char:    "malfoy"},
        {speaker: "DRACO MALFOY",  message: "Hey, first year! I'm Draco Malfoy. Second year student.", event: "appear"},
        {speaker: "ME",            message: "It's nice to meet you Draco."},
        {speaker: "DRACO MALFOY",  message: "What's your name again?"},
        {speaker: "ME",            message: userName + "..."},
        {speaker: "DRACO MALFOY",  message: "Right... You know anyone around here?"},
        {speaker: "ME",            message: "I met Harry, Ron and Hermione in Diagon Alley last month, they were very nice!"},
        {speaker: "DRACO MALFOY",  message: "Ugh, that filthy bunch... You'll soon find out that some wizarding families are better than others. You don't wanna go making friends with the wrong sort. I can help you there."},
        {speaker: "ME",            message: "That's a bold statement, but I guess it's always better to have a friendly face around!"}
    ];

    hufflepuffDialog = [
        {scene:   "Hufflepuff",    char:    "cedric"},
        {speaker: "CEDRIC DIGGORY",message: "Heya! Newbie, welcome to Hufflepuff!", event: "appear"},
        {speaker: "ME",            message: "Hi! Thank you!"},
        {speaker: "CEDRIC DIGGORY",message: "I'm Cedric, I'm a fourth year student. And you are " + userName + ", right?"},
        {speaker: "ME",            message: "Yes that's right! It's nice to meet you, Cedric! So, you've been here for a while, huh. Everything is so new to me, I wasn't brought up in a wizarding family..."},
        {speaker: "CEDRIC DIGGORY",message: "Don't worry, you'll get used to it in no time!"},
        {speaker: "ME",            message: "Thanks for reassuring me!"}
    ];

    potionsDialog = [
        {scene:   "potions",       char:    "snape"},
        {speaker: "SEVERUS SNAPE", message: "Welcome to your potions class, students. I am Professor Snape, the potions master of Hogwarts.", event: "appear"},
        {speaker: "SEVERUS SNAPE", message: "Today, we will be learning how to make a Tonic of Excitement. It's quite simple."},
        {speaker: "SEVERUS SNAPE", message: "Drag each of the ingredients that I've provided for you in your cauldron. Do it correctly, and you'll have yourself a nice little phial of Tonic of Excitement."},
        
        {speaker: "SEVERUS SNAPE", message: "Hm... Well done " + userName + "."},

    ];
    
    charmsDialog = [
        {scene:   "charms",          char:    "flitwick"},
        {speaker: "FILIUS FLITWICK", message: "Hello children! I am Professor Flittwick and I will be your charms teacher this year!", event: "appear"},
        {speaker: "FILIUS FLITWICK", message: "Today, I'll be teaching you the levitation charm! It is a very simple spell!"},
        {speaker: "FILIUS FLITWICK", message: "Once you hear me say 'Wingardium Leviosa', repeat after me. If you get it right, the feather I've placed in front of you will levitate!"},
        {speaker: "FILIUS FLITWICK", message: "Oh, and remember every one: swish and flick!"}, 

        {speaker: "FILIUS FLITWICK", message: "Marvelous! Well done, " + userName + "!"},


    ];

    flyingDialog = [
        {scene:   "flying",          char:    "hooch"},
        {speaker: "ROLANDA HOOCH",   message: "Alright, everyone! I am Mme. Hooch, your flying teacher. Learning how to fly with a broom is essential for all witches and wizards though quite finicky, so listen to me well!", event: "appear"},
        {speaker: "ROLANDA HOOCH",   message: "To stay afloat, press the space bar on your keyboard. You must stay up for 10 seconds. If you fall, the timer will restart, and it will continue to do so until you stay up for 10 consecutive seconds!"},
        {speaker: "ROLANDA HOOCH",   message: "On your marks... And fly!"},

        {speaker: "ROLANDA HOOCH",   message: "Exceptional, " + userName + "! You're a natural!"},

    ];

    //======================================================================================================================================================================================
}