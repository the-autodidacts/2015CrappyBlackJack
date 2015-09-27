var dealer = {
  hand:       [],
  blackjackVal:   false,

  calculate:  function () {
    var value = 0
    for (var i = 0; i < this.hand.length; i++) {
      value  += this.hand[i].value
      debugger
      if (this.hand[i].name.indexOf('ace') === 0 && value < 11){
        value +=10
      }
    }
    return value;
  },
  hit: function (card) {
    this.hand.push(card)
  },
  stand: function () {

  },
  // can be shortened don't need blackjackVal will fix later
  blackjack: function () {
    if(this.hand[0].value === 1 && this.hand[1].value === 10 ){
      this.blackjackVal = true
    }
    else if(this.hand[1].value === 1 && this.hand[0].value === 10 ) {
      this.blackjackVal = true
    }
    else {
      this.blackjackVal = false
    }
    return this.blackjackVal
  }
}
