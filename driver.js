// Game object instance
var blackjack = function(){
  deck.createDeck()
  deck.shuffleDeck()
  console.log(deck.deck)
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  console.log(player.hand)
  console.log(dealer.hand[0])
}

// Deck object
var deck = {
  deck: [],
  deckValues:   [
                  {value:1},
                  {value:2},
                  {value:3},
                  {value:4},
                  {value:5},
                  {value:6},
                  {value:7},
                  {value:8},
                  {value:9},
                  {value:10},
                  {value:11},
                  {value:12},
                  {value:13},
                ],

  deckSuits:    [
                  {suit:'heart'},
                  {suit:'diamond'},
                  {suit:'spade'},
                  {suit:'club'},
                ],
  createDeck:   function (){
    for (i in this.deckValues){
      for (j in this.deckSuits){
        this.deck.push(this.deckValues[i].value + " " + this.deckSuits[j].suit)
      }
    }
  },
  shuffleDeck:  function (){
    while (i < 120){
      var j = Math.floor(Math.random()*52)
      var k = Math.floor(Math.random()*52)
      this.swapCards( j, k)
      i++;
    }
  },
  swapCards: function(j, k){

    var temp      = this.deck[j];
    this.deck[j]  = this.deck[k];
    this.deck[k]  = temp;
  },
  dealCard: function(){
    if (this.deck.length < 12){
      return alert("not enough cards must shuffle or start a new game");
    }else{
      return this.deck.pop();
    }
  },
  //  translate value of card into a numeric and pull suit string to create new object
  translateCard: function() {
    var str = this.deck[this.deck.length -1].substring()
    var cardInt = parseInt(this.deck[this.deck.length - 1].substring(0,2));
    return cardInt;
  }
}
//  player object
var player = {
  hand:       [],
  purse:      1000,
  minimumBet: 25,

  raiseBet: function (amount) {

  },
  hit: function (card) {
    this.hand.push(card)
  },
  stand: function () {

  },
  split: function (card, bet) {

  },
}

//  dealer object
var dealer = {
  hand:       [],

  hit: function (card) {
    this.hand.push(card)
  },
  stand: function () {

  },
}
