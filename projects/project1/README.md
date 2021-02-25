# Artist's Statement

For Project 1: A night at the movies, I chose to create a small scene from the Harry Potter movies. This small visual novel represents the player being accepted at Hogwarts and going to Diagon Alley to buy their school material for the first time. 

I chose this movie and this perspective because the wizarding world that J.K. Rowling created so many years ago has never stopped fascinating me throughout the years, even to this day. I have watched the movies multiple times and I have never stopped wishing that it all be true. So naturally, any Harry Potter game has me really excited! 

Even though this may not be as interactive as an actual game, I still tried to place the user in the story as best as I could by having the narrator and main character be the user and allowing them even to pick their own pet. I used audio that contains surround sound of the environments in the movies that contain owl and magic noises, people talking, bells ringing, the music from the movie, etc., to really transport the user into the wizarding world as much as possible.

On the backend, as my program uses the dialog as the timeline, each line contains an event detected that triggers it, like entering Gringotts plays the sound of a heavy door being push and leaving the building triggers the that same heavy door closing behind the user as they return to Diagon Alley. The events being the aforementioned heavy door, paper moving, the bell ringing upon entering or exiting a shop, characters appearing as they speak, wands being pulled out of their boxes, or measurements being taken. On top of that, each setting has their own background image and associated sound which are loaded upon setting change, which is, again, defined in the timeline. 

If an immersive, open world, RPG, online, VR Harry Potter world game existed, I think I could delete my birth certificate.


# Credit given where credit due
All environment audio used was created by ASMR Weekly, to which I added music or other sound effects. 

All sound effects used were sampled from sources on YouTube.

All images used were redrawn by hand by me for bettwer quality, but the ideas do not belong to me. I recreated characters I found on Google.
Gilderoy Lockheart, the Goblin, Ollivanders and Madam Malkin were entirely drawn my me.

The Harry Potter font was taken from DaFont.com 


# Known Errors
To create the characters animation, as they become bigger, being redrawn every frame left a trail of the previous image's size. To avoid that, I had to redraw the background and the previously drawn character. However, where the characters (Harry, Ron, Hermione) do not appear in the order they were first redrawn, some characters disappear and reappear a little randomly. I looked for a global efficient way to fix it, but it seemed like with my code design, the best way to do it was to add more and different events for each of the cases where the characters appeared differently. In some cases, it seems to add a small effect when the speaker is speaking. It doesn't look terrible, just not quite right.
