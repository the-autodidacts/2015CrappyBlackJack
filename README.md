# blackjack
1.  Black Jack is a simple html and css black jack game that uses javascript and jquery to its dynamic content management.

2.  The approach taken to build the game started by developing the key components of a black jack.
I started by thinking of everything on the table as an object.

  The objects implemented in the game are a dealer object, a player object, a deck object and a driver class that runs the entire thing.


3.  Unsolved problem. The biggest problem that i have is that cards keep disappearing from the deck when deal is called. Also the $('#hit').on('click') listener continues to hit until I bust with out terminating the game. I suspect both problem are related to event listners but I have not been able to target the problem. The game works as it should from console.    ----This problem was fixed and the hit button now takes the proper action --- however the determine blackjackWinner() function in the driver stopped working. 

4.  User Stories
