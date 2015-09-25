var player = {
  hand:       [],
  purse:      1000,
  bet:        25,
  bust:       false,

  calculate:  function () {
    var value = 0
    for (i = 0; i < this.hand.length; i ++){
      value  += this.hand[i].value
    }
      return value;
  },
  raiseBet: function (amount) {
    this.bet += amount
    return this.bet
  },
  resetBet: function () {
    this.bet = 25
    return this.bet
  },
  placeBet: function () {
    this.purse -= this.bet
    return this.purse
  },
  //  Takes card of deck and pushes to player hand gets value of player hand
  hit: function (card) {
    this.hand.push(deck.dealCard())
    if (this.calculate() > 21) {
      this.bust = true
    }
    else {
      this.bust = false
    }
    return this.bust
  },
  stand: function () {

  },
  split: function (card, bet) {

  }
}

//  dealer object
