// Game object instance
var blackjack = function () {

     //createDeck will be needed to reset game in the future
  deck.createDeck()
  deck.shuffleDeck()
  // can `for each` down the line when adding more players
  player.placeBet(player.bet)
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.calculate()

  // var handValue = 0
  // for (var i in player.hand) {
  //   handValue += player.hand[i].value
  //   if
  // }


  console.log('player is holding ' + player.hand[0].name + ' and ' + player.hand[1].name)
  console.log('dealers is holding ' + dealer.hand[0].name)
  console.log('player is betting $' + player.bet)
  console.log('player has $' + player.purse)
  console.log("value of player's hand: " + player.calculate())
  //  player hand value compare to 21 if == 21 check dealer if dealer not 21 win 1.5
  //  else if > 21 bust  else ask hit or stand

  //  dealer if value under 17 hit until 17 or bust. Figure ace 1 or 11 for both somehow
}
  // New to be able to create deck
  var reset = function () {
    deck.newDeck = deck.deck
    player.hand = []
    dealer.hand = []
  }

// Deck object
var deck = {
  // maybe add more decks to a shoe object down the line
  deck:  [
                  {name:  "ace of spades",value: 1, suit: 'spade'},
                  {name:  "2 of spades",value: 2, suit: 'spade'},
                  {name:  "3 os spades", value: 3, suit: 'spade'},
                  {name:  "4 of spades", value: 4, suit: 'spade'},
                  {name:  "5 of spades", value: 5, suit: 'spade'},
                  {name:  "6 of spades", value: 6, suit: 'spade'},
                  {name:  "7 of spades", value: 7, suit: 'spade'},
                  {name:  "8 of spades", value: 8, suit: 'spade'},
                  {name:  "9 of spades", value: 9, suit: 'spade'},
                  {name:  "10 of spades", value: 10, suit: 'spade'},
                  {name:  "jack of spades", value: 10, suit: 'spade'},
                  {name:  "queen of spades", value: 10, suit: 'spade'},
                  {name:  "king of spades", value: 10, suit: 'spade'},
                  {name:  "ace of clubs", value: 1, suit: 'clubs'},
                  {name:  "2 of clubs", value: 2, suit: 'clubs'},
                  {name:  "3 os clubs", value: 3, suit: 'clubs'},
                  {name:  "4 of clubs", value: 4, suit: 'clubs'},
                  {name:  "5 of clubs", value: 5, suit: 'clubs'},
                  {name:  "6 of clubs", value: 6, suit: 'clubs'},
                  {name:  "7 of clubs", value: 7, suit: 'clubs'},
                  {name:  "8 of clubs", value: 7, suit: 'clubs'},
                  {name:  "9 of clubs", value: 9, suit: 'clubs'},
                  {name:  "10 of clubs", value: 10, suit: 'clubs'},
                  {name:  "jack of clubs", value: 10, suit: 'clubs'},
                  {name:  "queen of clubs", value: 10, suit: 'clubs'},
                  {name:  "king of clubs", value: 10, suit: 'clubs'},
                  {name:  "ace of hearts", value: 1, suit: 'heart'},
                  {name:  "2 of hearts", value: 2, suit: 'heart'},
                  {name:  "3 os hearts", value: 3, suit: 'heart'},
                  {name:  "4 of hearts", value: 4, suit: 'heart'},
                  {name:  "5 of hearts", value: 5, suit: 'heart'},
                  {name:  "6 of hearts", value: 6, suit: 'heart'},
                  {name:  "7 of hearts", value: 7, suit: 'heart'},
                  {name:  "8 of hearts", value: 7, suit: 'heart'},
                  {name:  "9 of hearts", value: 9, suit: 'heart'},
                  {name:  "10 of hearts", value: 10, suit: 'heart'},
                  {name:  "jack of hearts", value: 10, suit: 'heart'},
                  {name:  "queen of hearts", value: 10, suit: 'heart'},
                  {name:  "king of hearts", value: 10, suit: 'heart'},
                  {name:  "ace of diamonds", value: 1, suit: 'diamond'},
                  {name:  "2 of diamonds", value: 2, suit: 'diamond'},
                  {name:  "3 os diamonds", value: 3, suit: 'diamond'},
                  {name:  "4 of diamonds", value: 4, suit: 'diamond'},
                  {name:  "5 of diamonds", value: 5, suit: 'diamond'},
                  {name:  "6 of diamonds", value: 6, suit: 'diamond'},
                  {name:  "7 of diamonds", value: 7, suit: 'diamond'},
                  {name:  "8 of diamonds", value: 7, suit: 'diamond'},
                  {name:  "9 of diamonds", value: 9, suit: 'diamond'},
                  {name:  "10 of diamonds", value: 10, suit: 'diamond'},
                  {name:  "jack of diamonds", value: 10, suit: 'diamond'},
                  {name:  "queen of diamonds", value: 10, suit: 'diamond'},
                  {name:  "king of diamonds", value: 10, suit: 'diamond'}
                ],

      gameDeck:  [],
//can't push into gameDeck copying functions is and issue
  createDeck:   function(){
    for ( i = 0; i < this.deck.length; i++){
      var temp = {}
      temp = this.deck[i]
      // console.log(temp);
      this.gameDeck.push(temp)
    }
    console.log(this);
  },
  shuffleDeck: function () {
    for (var i = 0; i < 120 ; i++) {
      var j = Math.floor(Math.random()*52)
      var k = Math.floor(Math.random()*52)
      this.swapCards (j, k)
    }
  },
  swapCards: function (j, k) {
    var temp      = this.deck[j];
    this.deck[j]  = this.deck[k];
    this.deck[k]  = temp;
  },
  dealCard: function(){
    if (this.deck.length < 8){
      return alert("not enough cards must shuffle or start a new game");
    }else{
      return this.deck.pop()
    }
  }
}

//  dealer object
var dealer = {
  hand:       [],

  calculate:  function () {
    var value = 0
    for (i = 0; i < this.hand.length; i ++){
      value  += this.hand[i].value
    }
      return value;
  },
  hit: function (card) {
    this.hand.push(card)
  },
  stand: function () {

  },
}
blackjack();
