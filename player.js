var player = {
  hand:       [],
  purse:      1000,
  bet:        25,

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
  hit:    function (card) {
    this.hand.push(card)
  },
  stand:  function () {

  },
  split:  function (card, bet) {

  }
}

//  dealer object
