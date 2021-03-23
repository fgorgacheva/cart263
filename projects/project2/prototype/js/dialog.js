const commonDialog = [
    //1 scene: =================================================================================================================================================
    {scene:   "beginning",     char:    "mcgonagall"},
    {speaker: "ME",            message: "I cannot believe I am finally here! Hogwarts doesn't look like anything I've ever seen!"},
    {speaker: "MINERVA MCGONAGALL",       message: "Welcome to Hogwarts!", event: "appear"},
    {speaker: "MINERVA MCGONAGALL",       message: "Before the banquet begins, you must all first be sorted into your Hogwarts House. Once you are called, come forward and I shall place the sorting hat on your head."},
    //say name entered earlier
    // {speaker: "MINERVA MCGONAGALL",       message: ""},


    //2 scene: =================================================================================================================================================
    {scene:   "ceremony",      char:    "hat"},
    {speaker: "SORTING HAT",   message: "Tell me now, which house would you like to be sorted in?", event: "appear"},
    

    //QUESTIONS: ===============================================================================================================================================
    {event:   "pick"},
    {speaker: "SORTING HAT",   message: "I see... Interesting choice. As it is written, so it shall be done."},
    //write name of house & say it with the voice thing
    // {speaker: "SORTING HAT",   message: ""},

    {event: "path"},

   //3 scene : =================================================================================================================================================
    {scene:   "feast",         char:    "dumbledore"},
    {speaker: "ALBUS DUMBLEDORE",    message: "Welcome! Welcome to a new year at Hogwarts! Before we begin our banquet, I would like to say a few words. And here they are: ", event: "appear"},
    {speaker: "ALBUS DUMBLEDORE",    message: "Nitwit! Blubbler! Oddment! Tweak!"},
    {speaker: "ALBUS DUMBLEDORE",    message: "Thank you!"},


    //4 scene : =================================================================================================================================================
    {scene:   "end"},
    {speaker: "ME",            message: "I thought he sounded mad, but at this moment, incredible amounts of delicious looking food appeared on all the long table accross the Great Hall!"},
    {speaker: "ME",            message: "I can't think anymore, all this food looks amazing!"},
    {speaker: "ME",            message: "This is my life now! I'm a wizard attending Hogwarts... I sure do hope nothing bad happens!"},


    //5 scene : =================================================================================================================================================
    {scene:   "plotTwist"},
    {speaker: "ME",            message: "Well ... "},

];

const ravenclawDialog = [
{scene:   "Ravenclaw",     char:    "luna"},
{speaker: "LUNA LOVEGOOD", message: "Hi there! My name's Luna, it's nice to meet you. I'm a first year too!", event: "appear"},
{speaker: "ME",            message: "It's nice to meet you too, Luna! Are you new to the wizarding world too?"},
{speaker: "LUNA LOVEGOOD", message: "No... My shoes have magically disappeared, but I'm not concerned. They'll show up sometime - even when you least expect it."},
{speaker: "ME",            message: "That's- I- Huh... I hope they show up soon, having shoes is pretty neat most of the time."},
{speaker: "LUNA LOVEGOOD", message: "Thank you!"}
];


const gryffindorDialog = [
// {scene:   "Gryffindor",    char:    "ginny"},
{speaker: "GINNY WEASLEY", message: "Hey! I- I'm Ginny, nice to meet you!", event: "appear"},
{speaker: "ME",            message: "Oh it's you! I met your brother, Ron, in Diagon Alley! He told me you'd be here! So first year huh, how do you feel?"},
{speaker: "GINNY WEASLEY", message: "I'm very excited! I have six older brothers who've all been to Hogwarts, well four are still here. But now it's my turn, too!"},
{speaker: "ME",            message: "Wow that is one big family! I'm also very excited, I'm almost shaking! Well I can't wait to spend this new year with you!"},
{speaker: "GINNY WEASLEY", message: "Me too!"}
];

const slytherinDialog = [
{scene:   "Slytherin",     char:    "malfoy"},
{speaker: "DRACO MALFOY",  message: "Hey, first year! I'm Draco Malfoy. Second year student.", event: "appear"},
{speaker: "ME",            message: "It's nice to meet you Draco."},
{speaker: "DRACO MALFOY",  message: "You know anyone around here?"},
{speaker: "ME",            message: "I'm afraid not, no."},
{speaker: "DRACO MALFOY",  message: "You'll soon find out that some wizarding families are better than others. You don't wanna go making friends with the wrong sort. I can help you there."},
{speaker: "ME",            message: "That's a bold statement, but I guess it's always better to have a friendly face around!"}
];

const hufflepuffDialog = [
{scene:   "Hufflepuff",    char:    "cedric"},
{speaker: "CEDRIC DIGGORY",message: "Heya! Newbie, welcome to Hufflepuff!", event: "appear"},
{speaker: "ME",            message: "Hi! Thank you!"},
{speaker: "CEDRIC DIGGORY",message: "I'm Cedric, I'm a fourth year student."},
{speaker: "ME",            message: "It's nice to meet you Cedric! So, you've been here for a while, huh. Everything is so new to me, I wasn't brought up in a wizarding family..."},
{speaker: "CEDRIC DIGGORY",message: "Don't worry, you'll get used to it very quickly!"},
{speaker: "ME",            message: "Thanks for reassuring me!"}
];
