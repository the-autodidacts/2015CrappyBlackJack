var dealer = {
  hand:       [],

  calculate:  function () {
    var value = 0
    for (var i = 0; i < this.hand.length; i++) {
      value  += this.hand[i].value
    }
    return value;
  },

  hit: function (card) {
    this.hand.push(card)
  },
  stand: function () {

  }
}
