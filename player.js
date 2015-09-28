var player = {
  hand:       [],
  purse:      1000,
  bet:        25,
  bust:       false,
  blackjack: function () {
    if(this.hand[0].value === 11 && this.hand[1].value === 10 ){
      return true;
    }
    else if(this.hand[1].value === 11 && this.hand[0].value === 10 ) {
      return true;
    }
    else {
      return false;
    }
  },
  calculate:  function () {
    var value = 0
    for (var i = 0; i < this.hand.length; i++) {
      value  += this.hand[i].value
      }
    for (var i = 0; i < this.hand.length; i++) {
      if (this.hand[i].name.indexOf('ace') === 0 && value > 21){
        value -=10
      }
    }
    return value;
  },
  raiseBet: function () {
    this.bet += 25
    return this.bet
  },
  resetBet: function () {
    this.bet = 25
    return this.bet
  },
  //  Takes card of deck and pushes to player hand gets value of player hand
  hit: function (card) {
    this.hand.push(card)
    if (this.calculate() > 21) {
      this.bust = true
    }
    else {
      this.bust = false
    }
    return this.bust
  },
  split: function (card, bet) {

  }
}
