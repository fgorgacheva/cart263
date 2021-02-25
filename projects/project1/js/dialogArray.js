const dialogArray = [
    //1 scene: 0-8 =================================================================================================================================================
    {speaker: "ME",         message: "I received this letter in the mail today. It looks.. old, but it's very clearly adressed to me..", event: "start"},
    {speaker: "ME",         message: "Alright, I'm opening it!"},
    {event:   "openLetter"},
    {speaker: "ME",         message: "HogWHAT? Witchcraft?! Wizardry?! I must be dreaming! "},
    {speaker: "ME",         message: "I remember my grandma telling me stories about a magic school she'd been to when she was young, but mom always said they were silly stories.."},
    {speaker: "ME",         message: "Come to think of it, sometimes I do make weird things happen.... Grandma's stories must've been real then! "},
    {speaker: "ME",         message: "Magic is real and I'M GOING TO HOGWARTS!!! "},
    {speaker: "ME",         message: "Wow... "},

    //2 scene: 9 =================================================================================================================================================
    {setting: "diagonAlley"},
    
    // 10-13
    {speaker: "ME",         message: "Diagon Alley..? Is this it? This would be easier if I knew any body else here..."},
    {speaker: "ME",         message: "Where do I start? Uniforms.. Books.. Wands.. Cauldrons..", event: "diagonAlley"},
    {event: "list"},
    {speaker: "ME",         message: "Ugh... >_<", event: "diagonAlley"},
    // 14-27
    {speaker: "HERMIONE",   message: "Hey there, stranger! You look lost. Is it your first time here?", event: "hermione"},
    {speaker: "ME",         message: "Uh.. y-yeah.. Is it obvious? hehe~"},
    {speaker: "HERMIONE",   message: "Just a little! I'm Hermione Granger, nice to meet you!"},
    {speaker: "HARRY",      message: "I'm Harry Potter!", event: "harry"},
    {speaker: "RON",        message: "And I'm Ron Weasley! Pleasure!", event: "ron"},
    {speaker: "ME",         message: "It's very nice to meet you all!"},
    {speaker: "HERMIONE",   message: "We're second year students at Hogwarts, so we know how it can be to be here for the first time, we can show you around! Do you have your list with you?"},
    {speaker: "ME",         message: "Yes, here it is.", event: "letterIn"},
    {speaker: "HERMIONE",   message: "Right! Uniforms first. For all the things you need, you can go to Madam Malkin's Robes for All Occasions. She likes purple a lot, so you can tell which sign shows her shop!"},
    {speaker: "HARRY",      message: "But wait! Have you got any wizarding currency? I didn't know the currency is different in the here world either when I got here for the first time! You've got bronze knuts, silver sickles and golden galleons."},
    {speaker: "ME",         message: "Galleons? No I don't have any..."},
    {speaker: "HARRY",      message: "Then you should go to Grigotts first to get some, or you won't be able to buy anything. It's the big bank at the end of the street! "},
    {speaker: "RON",        message: "We've got some stuff to buy ourselves, but we'll help you out with your next stop once you're done getting your uniforms!"},
    {speaker: "HERMIONE",   message: "Good luck!"},
    // 28
    {speaker: "ME",         message: "Madam Malkin's... Gringotts... This is crazy!", event: "diagonAlley"},

    //3 scene: 29-36 =================================================================================================================================================
    {setting: "gringotts"},

    {speaker: "ME",                    message: "...."},
    {speaker: "ME",                    message: "Um.. Hi- Hello! I would like to retrieve some money!"},
    {speaker: "GRINGOTTS HEAD GOBLIN", message: "Money? You've got a key?", event: "goblin"},
    {speaker: "ME",                    message: "(A key?! OH! Grandma gave me a key and told me to keep it very safe, that I'd know when to use it! This must be it!)"},
    {speaker: "ME",                    message: "I have a key! Here it is, sir!"},
    {speaker: "GRINGOTTS HEAD GOBLIN", message: "Mmh... Take what you need from your vault."},
    {speaker: "ME",                    message: "Thank you sir!", event: "pay"},

    //4 scene: 37-39 =================================================================================================================================================
    {setting: "diagonAlley", event: "closeDoor"},

    {speaker: "ME", message: "Phew! That place looked scary... I guess you'd think twice before robbing a place like this..."},
    {speaker: "ME", message: "Alright! Uniforms.. To Madam Malkin's!"},

    //5 scene: 40-47 =================================================================================================================================================
    {setting: "madamMalkins", event: "bell"},

    {speaker: "MADAM MALKIN", message: "Hello, dear!", event: "madam"},
    {speaker: "ME",           message: "Hello! I'm here to get everything that is on this list!", event: "letterIn"},
    {speaker: "MADAM MALKIN", message: "Oh~ A first year, are we? How exciting! Hop on here, dear, I will take your measurements and prepare everything for you!"},
    {speaker: "MADAM MALKIN", message: "Alrighty then~ ", event: "measureFabric"},
    {speaker: "MADAM MALKIN", message: "You're all done, dear! Here is everything you need! That'll be 20 golden galleons!"},
    {speaker: "ME",           message: "Here you go!", event: "pay"},
    {speaker: "MADAM MALKIN", message: "Thank you, dear! I hope you have an amazing school year ahead of you!"},

    //6 scene: 48-54 =================================================================================================================================================
    {setting: "diagonAlley", event: "bell"},

    {speaker: "HERMIONE", message: "Hey, I see you've got your uniforms! Ready for your next stop?", event: "hermione"},
    {speaker: "HERMIONE", message: "To get any book that you'll ever need for Hogwarts, you can go to Flourish and Blotts! It's actually right past Madam Malkin's shop!"},
    {speaker: "RON",      message: "I have to warn you though, today seems to be a meet and greet day with Gilderoy Lockheart there... The women are all crazy around him, so be careful..", event: "ron"},
    {speaker: "HERMIONE", message: "That's not true!!"},
    {speaker: "RON",      message: "Is that why you drew hearts on all of the author portraits of his books you already own?? "},
    {speaker: "HARRY",    message: "Guys, guys, come on..~ Sorry about that... Anyway, we'll see you for the next thing you need! You've got this!", event: "harry"},
    // 55-56
    {speaker: "ME",       message: "A funny bunch they are... I hope we get to be friends once school starts!", setting: "diagonAlley"},
    {speaker: "ME",       message: "Alright now, books... Gilderoy Lockheart... Is he that handsome? "},

    //7 scene: 57-68 =================================================================================================================================================
    {setting: "flourishNBlotts", event: "bell"},
    
    {speaker: "ME",                 message: "WOAH, SO MANY PEOPLE! AND FLOATING BOOKS!"},
    {speaker: "ME",                 message: "Alright I just need to get these 8 books, and I'll be right outta here!"},
    {speaker: "GILDEROY LOCKHEART", message: "Well we've got a first year, here, don't we! Unfortunate that you will not be in my Defense Against the Dark Arts class.", event: "gilderoy"},
    {speaker: "ME",                 message: "Well I don't know anything yet, I'm not from around here.."},
    {speaker: "GILDEROY LOCKHEART", message: "Well I can still sell you a signed copy of one of my books for a lower price!! It's a best seller! I'll even give you a signed photo of myself smiling on one of my famous adventures! "},
    {speaker: "ME",                 message: "Well... It's alright, I can't really afford to get that at the moment."},
    {speaker: "GILDEROY LOCKHEART", message: "You really don't want this once in a lifetime offer from the famous GILDEROY LOCKHEART?!"},
    {speaker: "ME",                 message: "Like I said, I'm not from around here. I'm afraid I haven't heard of you, sir.."},
    {speaker: "GILDEROY LOCKHEART", message: "Well... You will in good time! These 8 books then? That'll be 70 sickles!"},
    {speaker: "ME",                 message: "Here. Thank you, sir.", event: "pay"},
    {speaker: "GILDEROY LOCKHEART", message: "Alright then! I will see you around the school!"},

    //8 scene: 69-70 =================================================================================================================================================
    {setting: "diagonAlley", event: "bell"},
    
    {speaker: "ME",       message: "Isn't he a handfull... Thankfully he won't be my professor this year..."},
    // 71-77
    {speaker: "RON",      message: "You're alive!!", event: "ron"},
    {speaker: "HERMIONE", message: "You've got all your books! There are so many, right?" , event: "hermione"},
    {speaker: "HARRY",    message: "What's next for you?", event: "harry"},
    {speaker: "ME",       message: "I've got to get a wand."},
    {speaker: "HARRY",    message: "That's the most exciting part, in my opinion! You've got to go to Ollivander's. It's the first shop on your left!"},
    {speaker: "ME",       message: "It does sound really exciting, I can't wait to get it!"},
    {speaker: "HERMIONE", message: "Off you go then, can't wait to hear what chooses you!"},
    //78
    {speaker: "ME",       message: "My very own wand! I can't believe any of this...!", setting: "diagonAlley"},

    //9 scene: 79-90 =================================================================================================================================================
    {setting: "ollivanders", event: "bell"},
    
    {speaker: "OLLIVANDER", message: "Hello, hello! Come on in!"},
    {speaker: "OLLIVANDER", message: "Here to get our first wand, aren't we? Well now, let me see. Which is you wand hand?", event: "ollivander"},
    {speaker: "ME",         message: "Well, I'm right handed..."},
    {speaker: "OLLIVANDER", message: "Hold out your arm. That's it. I will take your measurements."},
    {speaker: "OLLIVANDER", message: "Every Ollivander wand has a core of a powerful magical substance. We use unicorn hairs, phoenix tail feathers, and the heartstrings of dragons. No two Ollivander wands are the same. And of course, you will never get such good results with another wizard's wand.", event: "measureWand"},
    {speaker: "OLLIVANDER", message: "Try this one. Beechwood and dragon heartstrings. Nine inches. Nice and flexible. Just take it out and give it a wave.", event: "box"},
    {speaker: "OLLIVANDER", message: "NOT THIS ONE. Try that one. Maple and phoenix feather, seven inches, quite whippy, try-" , event: "box"},
    {speaker: "OLLIVANDER", message: "NO, NO! Alright, here... Ebony, unicorn hair, eight and a half inches, springy. Go on, go on! Try!", event: "box"},
    {speaker: "OLLIVANDER", message: "This seems to be the one! The wand chooses the wizard, remember that! It'll be 7 galleons! ", event: "spell"},
    {speaker: "ME",         message: "Thank you so very much sir!", event: "pay"},
    {speaker: "OLLIVANDER", message: "We shall expect great things from you! Enjoy your beautiful wand!"},

    //10 scene: 91-92 =================================================================================================================================================
    {setting: "diagonAlley", event: "bell"},
    
    {speaker: "ME",       message: "MY WAND! IT IS MINE AND I AM ITS! I CAN'T WAIT TO USE IT!"},
    // 93-102
    {speaker: "HERMIONE", message: "Heeeeyyy!!"},
    {speaker: "HERMIONE", message: "So? Tell me, tell me! What did you get?", event: "hermione"},
    {speaker: "ME",       message: "Ebony with a unicorn hair core, eight inches and a half.. Springy!"},
    {speaker: "HERMIONE", message: "Ebony and unicorn hair core? I never would've thought! That's a great wand!"},
    {speaker: "HARRY",    message: "Congratulations!", event: "harry"},
    {speaker: "RON",      message: "Have you got anything left?", event: "ron"},
    {speaker: "ME",       message: "Yes. A cauldron, glass or crystal phials, a telescope and a set of brass scales."},
    {speaker: "HERMIONE", message: "For those, you can go to Slugs and Jigger's Apothecary! It's right there on your right!"},
    {speaker: "ME",       message: "On it!"},
    {speaker: "HERMIONE", message: "See you soon!"},
    // 103
    {speaker: "ME",       message: "Slugs and Jiggers... Sounds creepy...", setting: "diagonAlley"},

    //11 scene: 104-119 =================================================================================================================================================
    {setting: "slugsNJiggers", event: "bell"},
    
    {speaker: "ME",            message: "... "},
    {speaker: "ME",            message: "Potions sound exciting but this place gives me the creeps..."},
    {speaker: "SEVERUS SNAPE", message: "A first year huh... Do not take potions lightly. They are capable of things you can't yet phathom...", event: "snape"},
    {speaker: "ME",            message: "S-sorry, sir..."},
    {speaker: "SEVERUS SNAPE", message: "I am the potions professor at Hogwarts. Perhaps I can help you find the material you will need. If you end up a Slytherin, I would prefer if you had quality material.."},
    {speaker: "ME",            message: "That's kind of you sir."},
    {speaker: "SEVERUS SNAPE", message: "Here are the best crystal phials, cauldron, and brass scales this shop can offer. You best know your material very well before the year starts, young one. Slytherins may not embarass their house, and you may not want to be responsible for costing your house points."},
    {speaker: "ME",            message: "Yes, sir! I've got a question though..."},
    {speaker: "SEVERUS SNAPE", message: "What is it?"},
    {speaker: "ME",            message: "Thank you for helping me with my equipment, but I'm missing a telescope. I don't know where to find one..."},
    {speaker: "SEVERUS SNAPE", message: "This is the one they sell here, but it's not the best. However, I am not your astronomy professor, so I don't care. "},
    {speaker: "ME",            message: "Thank you, sir."},
    {speaker: "SEVERUS SNAPE", message: "Is that all for you? That's 10 galleons."},
    {speaker: "ME",            message: "It was kind of you to help me sir, thank you.", event: "pay"},
    {speaker: "SEVERUS SNAPE", message: "This better not have been a waste of my precious time. I expect no less than a perfect score from you."},

    //12 scene: 120-121 =================================================================================================================================================
    {setting: "diagonAlley", event: "bell"},
    
    {speaker: "ME",       message: "Oh my... That professor does not seem very pleasant... Now I'm afraid of potions class."},
    // 122-134
    {speaker: "RON",      message: "There you are! So you got the last of your stuff?", event: "ron"},
    {speaker: "ME",       message: "I did yeah..."},
    {speaker: "RON",      message: "What's wrong?"},
    {speaker: "ME",       message: "I met the potions professor in there... He's so scary..."},
    {speaker: "HARRY",    message: "No one likes Snape except Slytherins! He scares everybody, but don't worry. You'll be fine in his class, I know it!", event: "harry"},
    {speaker: "HERMIONE", message: "By the way, do you have a magical pet? You're allowed to bring one!", event: "hermione"},
    {speaker: "ME",       message: "A magical pet? No, I don't have one."},
    {speaker: "HERMIONE", message: "It says so at the bottom of your list. You can pick an owl, a cat or a toad! I have a cat named Crookshanks!"},
    {speaker: "HARRY",    message: "Hagrid, the gamekeeper at Hogwarts gifted me Hedwig. She's a snowy owl."},
    {speaker: "RON",      message: "I've got Scabbers... It's a rat, I know it's not one of the three, but he's been with the Weasleys for a while, so the school allowed it."},
    {speaker: "ME",       message: "It's hard to pick one. But where should I go to get a pet like that? "},
    {speaker: "HERMIONE", message: "At Eyelop's Owl Emporium and Magical Menagerie! It's right down on your left. Let me mark it on your list~"},
    {speaker: "RON",      message: "I hope you don't get a cat, or scabbers will have a heart attack. He's got enough of Crookshanks... "},
    // 135
    {speaker: "ME",       message: "But cats are so soft...!", setting: "diagonAlley"},

    //13 scene: 136-145 =================================================================================================================================================
    {setting: "eyelops", event: "bell"},
    
    {speaker: "EYELOP", message: "Hello there!", event: "eyelop"},
    {speaker: "ME",     message: "Hello sir, I've come to buy a magical pet! "},
    {speaker: "EYELOP", message: "Well then, which would you like? "},
    {speaker: "ME",     message: "I can only pick between an owl, a cat or a toad. But I don't know which one to go for..."},
    {speaker: "EYELOP", message: "Ah~ You're new to the magical world, aren't you? That's alright!"},
    {speaker: "EYELOP", message: "Magical owls aren't simple birds. In the wizarding world, they will be delivering your mail. They are very intelligent and they know how to fing you or the one you are sending mail to. They are also very loyal and affectionate creatures!"},
    {speaker: "EYELOP", message: "Magical Cats can detect danger and warn you of it. Or they can scout or chase what you'd want them to. They are incredible hunters so if you'd want them to retrieve things for you, a cat is the one! "},
    {speaker: "EYELOP", message: "As for toads, well... They're just toads. Although you're allowed to have one as a pet at Hogwarts, they went out of style around 1991..."},
    {speaker: "EYELOP", message: "So which one will it be? "},
    
    //*give choice* 146
    {event: "animalChoice"},
    {event:  "animalChoosing"},

    //specific animal choice dialog 
    {speaker: "EYELOP", message: "placeholder", event: "animalChosen"}, //147

    // 148-149
    {speaker: "ME",     message: "This is my very first pet and I'm excited to love him every day! I shall call him Squishy, and he shall be mine! He shall be my Squishy!", event: "pay"},
    {speaker: "EYELOP", message: "May you loyal to each other! Animals are very precious!"},
    
    //14 scene: 150-151 =================================================================================================================================================
    {setting: "diagonAlley", event: "bell"},
    
    {speaker: "ME",       message: "I am overwhelmed! Uniforms, books, cauldrons, my very own beautiful ebody wand with a unicorn hair core and my new Squishy! I've always wanted a pet, but mom never allowed it!"},
    // 152
    {speaker: "HERMIONE", message: "Hey! did you get your pet? Which one did you choose?", event: "hermione"},
    
    {speaker: "ME",       message: "placeholder", event: ""}, //153

    {speaker: "HERMIONE", message: "placeholder"}, //154
    //*if cat* 
    {speaker: "RON",      message: "placeholder", event: "ron"}, //155
    // 156-162
    {speaker: "HARRY",    message: "Looks like you got everything you needed!", event: "harry"},
    {speaker: "HERMIONE", message: "We just finished getting all of our stuff as well! "},
    {speaker: "RON",      message: "You seem to have some Galleons left! You could visit Florean Fortescue's Ice Cream Parlour For some of the best ice cream around. Or you can check out Gambol and Japes Wizarding Joke Shop! There's tons of funny trinkets there for jokes and pranks. My brothers Fred and George even see it as a mandatory supply shop for school!", event: "ron"},
    {speaker: "HERMIONE", message: "Don't you dare pull any pranks if you end up in Gryffindor or you'll lose all the points I work hard for. We've already got two much on our hands with Fred and George! "},
    {speaker: "HARRY",    message: "Well pranksters or not, we still love them! "},
    {speaker: "HERMIONE", message: "Alright, that's true..."},
    {speaker: "HERMIONE", message: "Anyway, we're really glad to have been able to help you out! I hope to see you around once school starts! Have a great summer! "},
    // 163
    {speaker: "RON",      message: "By the way, my little sister, Ginny, is also starting at Hogwarts this year. If you end up in Gryffindor, you could be each other's first friends. It's always nice to have a friendly face around when you start something big like this! Anyway, it was nice meeting you!", event: "onlyRon"},
    
    //15 scene: 164-166 =================================================================================================================================================
    {speaker: "ME", message: "All this... It must be a dream, I can't believe my own eyes!", setting: "diagonAlley", setting: "diagonAlley"},
    {speaker: "ME", message: "Floating books and quills, broomsticks, messagin owls, potions, goblins, wands... MAGIC!! It's all so crazy..."},
    {speaker: "ME", message: "Hogwarts... Here I come! See you September 1st!"},

    {setting: "end"} //167
];