## Want to conquer random selection? See if you can work out this one.

# The situation

There is a 60 drawer card filing cabinet, each drawer is labelled with a number: 1-60. A volunteer grabs 60 cards and writes the number 1 on the first card, 2 on the second, 3 on the third and so on until he writes 60 on the final, sixtieth card and places them randomly in each of the sixty drawers, face up. He then slips away and leaves the country.

# The challenge

There are 60 contestants, each assigned to wear a shirt that has an integer: 1 - 60 on it. Each one must go individually, into the room with the filing cabinet and select any 30 drawers. (No contestant should ever touch a card, just look at them.) If any of these drawers has his number (of his shirt) written on its card, he gets to go to the winners room, if not he leaves the contest. He must close the drawers behind him for the next contestant and cannot communicate in any way what he saw in the drawers. If all 60 can reach the winner's room they get a **million dollars each!!**

# Simulation

Attempt '1A': Write code to simulate the above challenge with each contestant picking drawers randomly.

Answer to '1A': Run the scenario 100,000 times(sorry that this may take some time to complete depending on how well written your code is, what language you are using and, of course, how powerful your computer is), the answer should be the percentage of times they win the million dollars for all 100000 attempts, **remove any decimals from the answer**, meaning if the percentage of times they won the million dollars was 14.999 percent the answer we want is: 14 (this is true for all future answers).

# Attempt to  beat randomness

Attempt '1B': Obviously in the above scenario the odds are really, really slim for success. Is there anything the contestants can do to increase their chances of winning? Why not instead of picking 30 random drawers they start by picking the drawer that matches the number on their shirt. If that matches then great! If not (which is extremely likely) they open up the drawer of the number written on the card in the drawer they had just selected. Continue this chain for all 30 attempts. Think doing it this way will achieve better results than the random selection? Let's call doing it this way the **new method** and give it a shot.

Answer to '1B': Run the scenario this time using the new method 100,000 times and see how successful they are at winning the million dollars in terms of percentage. As always, Don't forget to chop off the decimal points.


# Let's reduce the number of attempts

Attempt '2A': We should use the same randomness as in 1A but this time they can only check **20** of the 60 drawers as opposed to the earlier 30.

Anser '2A': Again run it 100,000 times and give us the percentage.

# Now let's use the new method

Attempt '2B': With the same 20 guesses as in 2A but this time use the new method.

Answer '2B': Run it 100, 000 times with this scenario and your answer will be the percentage(with decimals chopped off).

# One last go around but with increased odds

Attampt '3A': Use the same random selecting as in 1A and 2A but this time with 45 attempts per the 60 participant. Think those millions will start piling up?

Answer '3A': Run it 100,000 times and this answer is that percentage.

# And now for the finale - with the new method

Attempt '3B': Same 45 guesses per participant as in 3A but this time let's see how good those odds are with the new method.

Answer '3B': Run it 100,000 times and let's get that percentage in the required format.

Ok so provide the **MD5 hash** of 1A,1B,2A,2B,3A,3B -including just commas and whole integers (please **NO** spaces or percentage signs, and make sure you **chopped off all decimals!!!**) for your answer.
Good Luck!


