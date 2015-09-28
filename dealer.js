var dealer = {
  hand:       [],
  blackjackVal:   false,
  bust: false,
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
  stand: function () {

  },
  // can be shortened don't need blackjackVal will fix later
  blackjack: function () {
    if(this.hand[0].value === 11 && this.hand[1].value === 10 ){
      this.blackjackVal = true
    }
    else if(this.hand[1].value === 11 && this.hand[0].value === 10 ) {
      this.blackjackVal = true
    }
    else {
      this.blackjackVal = false
    }
    return this.blackjackVal
  }
}
