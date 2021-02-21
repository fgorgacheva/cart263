const dialogArray = [
    //1 scene: 0-6 =================================================================================================================================================
    {setting: "firstSetting", speaker: "ME", message: "I received this letter in the mail today. It looks.. old, but it's very clearly adressed to me.. "},
    {speaker: "ME", message: "Alright, I'm opening it!"},
    {speaker: "ME", message: "HogWHAT? Witchcraft?! Wizardry?! I must be dreaming! "},
    {speaker: "ME", message: "I remember my grandma telling me stories about a magic school she'd been to when she was young, but mom always said they were silly stories.."},
    {speaker: "ME", message: "Come to think of it, sometimes I do make weird things happen.... Grandma's stories must've been real then! "},
    {speaker: "ME", message: "Magic is real and I'M GOING TO HOGWARTS!!! "},
    {speaker: "ME", message: "Wow... "},

    //2 scene: 7-8 9-22 23 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "Diagon Alley..? Is this it? This would be easier if I knew any body else here..."},
    {speaker: "ME", message: "Where do I start? Uniforms.. Books.. Wands.. Cauldrons.."},
    // 9-22
    {speaker: "HERMIONE", message: "Hey there, stranger! You look lost. Is it your first time here? "},
    {speaker: "ME", message: "Uh.. y-yeah.. Is it obvious? hehe~"},
    {speaker: "HERMIONE", message: "Just a little! I'm Hermione Granger, nice to meet you! "},
    {speaker: "HARRY", message: "I'm Harry Potter!"},
    {speaker: "RON", message: "And I'm Ron Weasley! Pleasure!"},
    {speaker: "ME", message: "It's very nice to meet you all!"},
    {speaker: "HERMIONE", message: "We're second year students at Hogwarts, so we know how it can be to be here for the first time, we can show you around! Do you have your list with you?"},
    {speaker: "ME", message: "Yes, here it is."},
    {speaker: "HERMIONE", message: "Right! Uniforms first. For all the things you need, you can go to Madam Malkin's Robes for All Occasions. She likes purple a lot, so you can tell which sign shows her shop!"},
    {speaker: "HARRY", message: "But wait! Have you got any galleons? I didn't know the currency is different in the wizarding world either when I came here last year!"},
    {speaker: "ME", message: "Galleons? No I don't have any..."},
    {speaker: "HARRY", message: "Then you should go to Grigotts first to get some, or you won't be able to buy anything. It's the big bank at the end of the street! "},
    {speaker: "RON", message: "We've got some stuff to buy ourselves, but we'll help you out with your next stop once you're done getting your uniforms!"},
    {speaker: "HERMIONE", message: "Oh and I've marked the name of the shop on your list in case you don't remember it! Good luck!"},
    // 23
    {speaker: "ME", message: "Madam Malkin's... Gringotts... This is crazy!"},

    //3 scene: 24-30 =================================================================================================================================================
    {setting: "gringotts", speaker: "GOBLIN", message: "...."},
    {speaker: "ME", message: "Um.. Hi- Hello! I would like to retrieve some mone- galleons? Galleons!"},
    {speaker: "GOBLIN", message: "You've got a key?"},
    {speaker: "ME", message: "(A key?! OH! Grandma gave me a key and told me to keep it very safe, that I'd know when to use it! This must be it!)"},
    {speaker: "ME", message: "I have a key! Here it is, sir!"},
    {speaker: "GOBLIN", message: "Mmh... And how much would you like to take today? "},
    {speaker: "GOBLIN", message: "Here you go."},

    //4 scene: 31-32 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "Phew! That place looked scary... I guess you'd think twice before robbing a place like this..."},
    {speaker: "ME", message: "Alright! Uniforms.. To Madam Malkin's! "},

    //5 scene: 33-37 =================================================================================================================================================
    {setting: "madamMalkins", speaker: "MADAM", message: "Hello, dear! "},
    {speaker: "ME", message: "Hello! I'm here to get everything that is on this list! "},
    {speaker: "MADAM", message: "Oh~ A first year, are we? How exciting! Hop on here, dear, I will take your measurements and prepare everything for you!"},
    {speaker: "MADAM", message: "Alrighty then~ "},
    {speaker: "MADAM", message: "You're all done, dear! Here is everything you need! That'll be 300 Galleons!"},
    //*if not enough money* 38
    {speaker: "MADAM", message: "Oh, dear, it seems you don't have enough. Run back to Gringotts quickly, I will keep your stuff here until you're back!"},
    //*if enough money* 39
    {speaker: "MADAM", message: "Thank you, dear! I hope you have an amazing school year ahead of you!"},

    //6 scene: 40-45 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "HERMIONE", message: "Hey, I see you've got your uniforms! Ready for your next stop?"},
    {speaker: "HERMIONE", message: "To get any book that you'll ever need for Hogwarts, you can go to Flourish and Blotts! It's actually right past Madam Malkin's shop! Let me mark it for you! "},
    {speaker: "RON", message: "I have to warn you though, today seems to be a meet and greet day with Gilderoy Lockheart there... The women are all crazy around him, so be careful.."},
    {speaker: "HERMIONE", message: "THAT'S NOT TRUE! "},
    {speaker: "RON", message: "Is that why you drew hearts on all of the author portraits of his books you already own?? "},
    {speaker: "HARRY", message: "Guys, guys, come on.. hehe~ Sorry about that... Anyway, we'll see you for the next thing you need! You've got this!"},
    // 46-47
    {speaker: "ME", message: "A funny bunch they are... I hope we get to be friends once school starts!"},
    {speaker: "ME", message: "Alright now, books... Gilderoy Lockheart... Is he that handsome? "},

    //7 scene: 48-56 =================================================================================================================================================
    {setting: "flourishNBlotts", speaker: "ME", message: "WOAH, SO MANY PEOPLE! AND FLOATING BOOKS! "},
    {speaker: "ME", message: "Alright I just need to get these 8 books, and I'll be right outta here!"},
    {speaker: "GILDEROY", message: "Well we've got a first year, here, don't we! Unfortunate that you will not be in my Defense Against the Dark Arts class. "},
    {speaker: "ME", message: "Well I don't know anything yet, I'm not from around here.."},
    {speaker: "GILDEROY", message: "Well I can still sell you a signed copy of one of my books for a lower price!! It's a best seller! I'll even give you a signed photo of myself smiling on one of my famous adventures! "},
    {speaker: "ME", message: "Well... It's alright, I can't really afford to get that at the moment."},
    {speaker: "GILDEROY", message: "You really don't want this once in a lifetime offer from the famous GILDEROY LOCKHEART?!"},
    {speaker: "ME", message: "Like I said, I'm not from around here. I'm afraid I haven't heard of you, sir.."},
    {speaker: "GILDEROY", message: "Well... You will in good time! These 8 books then? That'll be 200 Galleons!"},
    //*if no money* 57
    {speaker: "GILDEROY", message: "It seems you don't have enough, however. That's alright, I'll keep an eye on your books until you come back!"},
    //*if enough money* 58
    {speaker: "GILDEROY", message: "Alright then! I will see you around the school!"},

    //8 scene: 57 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "Isn't he a handfull... Thank god he won't be my teacher this year..."},
    // 58-64
    {speaker: "RON", message: "You're alive!!"},
    {speaker: "HERMIONE", message: "You've got all your books! There are so many, right?"},
    {speaker: "HARRY", message: "What's next for you? "},
    {speaker: "ME", message: "I've got to get a wand."},
    {speaker: "HARRY", message: "That's the most exciting part, in my opinion! You've got to go to Ollivander's. It's the first shop on your left!"},
    {speaker: "ME", message: "It does sound really exciting, I can't wait to get my very own wand! "},
    {speaker: "HERMIONE", message: "Off you go then, can't wait to hear what you got! "},
    //65
    {speaker: "ME", message: "My very own wand! I can't believe any of this...!"},

    //9 scene: 66-74 =================================================================================================================================================
    {setting: "ollivanders", speaker: "OLLIVANDER", message: "Hello, hello! Come on in! "},
    {speaker: "OLLIVANDER", message: "Here to get our first wand, aren't we? Well now, let me see. Which is you wand hand?"},
    {speaker: "ME", message: "Well, I'm right handed..."},
    {speaker: "OLLIVANDER", message: "Hold out your arm. That's it. I will take your measurements."},
    {speaker: "OLLIVANDER", message: "Every Ollivander wand has a core of a powerful magical substance. We use unicorn hairs, phoenix tail feathers, and the heartstrings of dragons. No two Ollivander wands are the same. And of course, you will never get such good results with another wizard's wand."},
    {speaker: "OLLIVANDER", message: "Try this one. Beechwood and dragon heartstrings. Nine inches. Nice and flexible. Just take it out and give it a wave."},
    {speaker: "OLLIVANDER", message: "NOT THIS ONE. Try that one. Maple and phoenix feather, seven inches, quite whippy, try-"},
    {speaker: "OLLIVANDER", message: "NO, NO! Alright, here... Ebony, unicorn hair, eight and a half inches, springy. Go on, go on! Try!"},
    {speaker: "OLLIVANDER", message: "This seems to be the one! The wand chooses the wizard, remember that! It'll be 90 Galleons, little one! "},
    //*if not enough money* 75
    {speaker: "OLLIVANDER", message: "But you don't have enough, little one! Fret not! The wand has chosen you, and will wait for your return!"},
    //*if enough money* 76
    {speaker: "OLLIVANDER", message: "We shall expect great things from you, little one! Enjoy your beautiful wand!"},

    //10 scene: 77 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "MY WAND! IT IS MINE AND I AM ITS! I CAN'T WAIT TO USE IT! "},
    // 78-87
    {speaker: "HERMIONE", message: "Heeeeyyy!! "},
    {speaker: "HERMIONE", message: "So? Tell me, tell me! What did you get? "},
    {speaker: "ME", message: "Ebony with a unicorn hair core, eight inches and a half.. Springy! "},
    {speaker: "HERMIONE", message: "Ebony? I never would've thought! That's a great wand!"},
    {speaker: "HARRY", message: "Congratulations! "},
    {speaker: "RON", message: "Have you got anything left? "},
    {speaker: "ME", message: "Yes. A cauldron, glass or crystal phials, a telescope and a set of brass scales."},
    {speaker: "HERMIONE", message: "For those you can go to Slugs and Jigger's Apothecary! I've marked it on your list, but it's right on your right! "},
    {speaker: "ME", message: "Right on it! "},
    {speaker: "HERMIONE", message: "See you soon!"},
    // 88
    {speaker: "ME", message: "Slugs and Jiggers... That sounds creepy..."},

    //11 scene: 89-101 =================================================================================================================================================
    {setting: "slugsNJiggers", speaker: "ME", message: "... "},
    {speaker: "ME", message: "Potions sound exciting but this place gives me the creeps..."},
    {speaker: "SNAPE", message: "A first year huh... Do not take potions lightly. They are capable of things you can't yet phathom... "},
    {speaker: "ME", message: "S-sorry, sir..."},
    {speaker: "SNAPE", message: "I am the potions teacher at Hogwarts. Perhaps I can help you find the material you will need. If you end up a Slytherin, I would prefer if you had quality material.."},
    {speaker: "ME", message: "That's kind of you sir."},
    {speaker: "SNAPE", message: "Here are the best crystal phials, cauldron, and brass scales this shop can offer. You best know your material very well before the year starts, young one. Slytherins may not embarass their house, and you may not want to be responsible for costing your house points."},
    {speaker: "ME", message: "Yes, sir! I've got a question though..."},
    {speaker: "SNAPE", message: "What is it?"},
    {speaker: "ME", message: "Thank you for helping me with my equipment, but I'm missing a telescope. I don't know where to find one..."},
    {speaker: "SNAPE", message: "This is the one they sell here, but it's not the best. However, I am not your astronomy teacher, so I don't care. "},
    {speaker: "ME", message: "Thank you, sir."},
    {speaker: "SNAPE", message: "Is that all for you? That's 150 Galleons."},
    //*if not enough money* 102
    {speaker: "SNAPE", message: "Seems you don't have enough for that. You're lucky I have business here, but don't waste my time."},
    //*if enough money* 103
    {speaker: "SNAPE", message: "You better be on your best behavior when the year starts. I helped you get great equipment, I expect no less than a perfect score from you."},

    //12 scene: 104 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "Oh my... That teacher does not seem very pleasant... Now I'm afraid of potions class. "},
    // 105-117
    {speaker: "RON", message: "Oh it's you again! So you got the last of your stuff?"},
    {speaker: "ME", message: "I did yeah... "},
    {speaker: "RON", message: "What's wrong?"},
    {speaker: "ME", message: "I met the potions teacher in there... He's so scary..."},
    {speaker: "HARRY", message: "No one likes Snape except Slytherins! He scares everybody, but don't worry. You'll be fine in his class, I know it!"},
    {speaker: "HERMIONE", message: "Hey, do you have a magical pet? You're allowed to bring one! "},
    {speaker: "ME", message: "A magical pet? No, I don't have one."},
    {speaker: "HERMIONE", message: "Look at the bottom of your list. You can pick an owl, a cat or a toad! I have a cat named Crookshanks!"},
    {speaker: "HARRY", message: "Hagrid, the gamekeeper at Hogwarts gifted me Hedwig. She's a snowy owl."},
    {speaker: "RON", message: "I've got Scabbers... It's a rat, I know it's not one of the three, but he's been with the Weasleys for a while, so the school allowed it."},
    {speaker: "ME", message: "It's hard to pick one. But where should I go to get a pet like that? "},
    {speaker: "HERMIONE", message: "At Eyelop's Owl Emporium and Magical Menagerie! It's right down on your left. Let me mark it on your list~"},
    {speaker: "RON", message: "I hope you don't get a cat, or scabbers will have a heart attack. He's got enough of Crookshanks... "},
    // 118
    {speaker: "ME", message: "But cats are so soft...!"},

    //13 scene: 119-127 =================================================================================================================================================
    {setting: "eyelops", speaker: "EYELOP", message: "Hello there! "},
    {speaker: "ME", message: "Hello sir, I've come to buy a magical pet! "},
    {speaker: "EYELOP", message: "Well then, which would you like? "},
    {speaker: "ME", message: "I can only pick between an owl, a cat or a toad. But I don't know which one to go for..."},
    {speaker: "EYELOP", message: "Ah~ You're new to the magical world, aren't you? That's alright!"},
    {speaker: "EYELOP", message: "Magical owls aren't simple birds. In the wizarding world, they will be delivering your mail. They are very intelligent and they know how to fing you or the one you are sending mail to. They are also very loyal and affectionate creatures!"},
    {speaker: "EYELOP", message: "Magical Cats can detect danger and warn you of it. Or they can scout or chase what you'd want them to. They are incredible hunters so if you'd want them to retrieve things for you, a cat is the one! "},
    {speaker: "EYELOP", message: "As for toads, well... They're just toads. Although you're allowed to have one as a pet at Hogwarts, they went out of style around 1991..."},
    {speaker: "EYELOP", message: "So which one will it be? "},
    //*give choice* 128
    {speaker: "EYELOP", message: "Amazing choice! To each their own and I hope you will be loyal to each other! "},
    //*if no money* 129
    {speaker: "EYELOP", message: "You don't have enough for it at the moment, though. I'll have them ready to go by the time you're back!"},
    //*if money* 130
    {speaker: "EYELOP", message: "May you keep each other warm during the coldest nights! "},
    
    //14 scene: 131 =================================================================================================================================================
    {setting: "diagonAlley", speaker: "ME", message: "I am overwhelmed with excitment! Uniforms, books, cauldrons, my very own beautiful ebody wand with a unicorn hair inside and my new pet! I've always wanted a pet, but mom never let me!"},
    // 132-133
    {speaker: "HERMIONE", message: "Hey! did you get your pet? Which one did you choose? "},
    {speaker: "HERMIONE", message: "Oh my! It's a beautiful ___ !"},
    //*if cat* 134
    {speaker: "RON", message: "I'm sorry, Scabbers..."},
    // 135-141
    {speaker: "HARRY", message: "Looks like you got everything you needed!"},
    {speaker: "HERMIONE", message: "We just finished getting all of our stuff as well! "},
    {speaker: "RON", message: "You seem to have some Galleons left! You could visit Florean Fortescue's Ice Cream Parlour For some of the best ice cream around. Or you can check out Gambol and Japes Wizarding Joke Shop! There's tons of funny trinkets there for jokes and pranks. My brothers Fred and George even see it as a mandatory supply shop for school!"},
    {speaker: "HERMIONE", message: "Don't you dare pull any pranks if you end up in Gryffindor or you'll lose all the points I work hard for. We've already got two much on our hands with Fred and George! "},
    {speaker: "HARRY", message: "Well pranksters or not, we still love them! "},
    {speaker: "HERMIONE", message: "Alright, that's true..."},
    {speaker: "HERMIONE", message: "Anyway, we're really glad to have been able to help you out! I hope to see you around once school starts! Have a great summer! "},
    // 142
    {speaker: "RON", message: "By the way, my little sister, Ginny, is also starting at Hogwarts this year. If you end up in Gryffindor, you could be each other's first friends. It's always nice to have a friendly face around when you start something big like this! Anyway, it was nice meeting you!"},
    
    //15 scene: 143-145 =================================================================================================================================================
    {setting: "lastSetting", speaker: "ME", message: "All this... It must be a dream, I can't believe my own eyes!"},
    {speaker: "ME", message: "Floating books and quills, broomsticks, messagin owls, potions, goblins, wands... MAGIC!! It's all so crazy..."},
    {speaker: "ME", message: "Hogwarts... Here I come! See you September 1st!"}
];