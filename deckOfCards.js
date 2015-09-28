// Deck object
var deck = {
  // maybe add more decks to a shoe object down the line
  deck:  [
                  {name:  "ace of spades",value: 11, source: 'img/as.png'},
                  {name:  "2 of spades",value: 2, source: 'img/2s.png'},
                  {name:  "3 of spades", value: 3, source: 'img/3s.png'},
                  {name:  "4 of spades", value: 4, source: 'img/4s.png'},
                  {name:  "5 of spades", value: 5, source: 'img/5s.png'},
                  {name:  "6 of spades", value: 6, source: 'img/6s.png'},
                  {name:  "7 of spades", value: 7, source: 'img/7s.png'},
                  {name:  "8 of spades", value: 8, source: 'img/8s.png'},
                  {name:  "9 of spades", value: 9, source: 'img/9s.png'},
                  {name:  "10 of spades", value: 10, source: 'img/10s.png'},
                  {name:  "jack of spades", value: 10, source: 'img/js.png'},
                  {name:  "queen of spades", value: 10, source: 'img/qs.png'},
                  {name:  "king of spades", value: 10, source: 'img/ks.png'},
                  {name:  "ace of clubs", value: 11, source: 'img/ac.png'},
                  {name:  "2 of clubs", value: 2, source: 'img/2c.png'},
                  {name:  "3 of clubs", value: 3, source: 'img/3c.png'},
                  {name:  "4 of clubs", value: 4, source: 'img/4c.png'},
                  {name:  "5 of clubs", value: 5, source: 'img/5c.png'},
                  {name:  "6 of clubs", value: 6, source: 'img/6c.png'},
                  {name:  "7 of clubs", value: 7, source: 'img/7c.png'},
                  {name:  "8 of clubs", value: 8, source: 'img/8c.png'},
                  {name:  "9 of clubs", value: 9, source: 'img/9c.png'},
                  {name:  "10 of clubs", value: 10, source: 'img/10c.png'},
                  {name:  "jack of clubs", value: 10, source: 'img/jc.png'},
                  {name:  "queen of clubs", value: 10, source: 'img/qc.png'},
                  {name:  "king of clubs", value: 10, source: 'img/kc.png'},
                  {name:  "ace of hearts", value: 11, source: 'img/ah.png'},
                  {name:  "2 of hearts", value: 2, source: 'img/2h.png'},
                  {name:  "3 of hearts", value: 3, source: 'img/3h.png'},
                  {name:  "4 of hearts", value: 4, source: 'img/4h.png'},
                  {name:  "5 of hearts", value: 5, source: 'img/5h.png'},
                  {name:  "6 of hearts", value: 6, source: 'img/6h.png'},
                  {name:  "7 of hearts", value: 7, source: 'img/7h.png'},
                  {name:  "8 of hearts", value: 8, source: 'img/8h.png'},
                  {name:  "9 of hearts", value: 9, source: 'img/9h.png'},
                  {name:  "10 of hearts", value: 10, source: 'img/10h.png'},
                  {name:  "jack of hearts", value: 10, source: 'img/jh.png'},
                  {name:  "queen of hearts", value: 10, source: 'img/qh.png'},
                  {name:  "king of hearts", value: 10, source: 'img/kh.png'},
                  {name:  "ace of diamonds", value: 11, source: 'img/ad.png'},
                  {name:  "2 of diamonds", value: 2, source: 'img/2d.png'},
                  {name:  "3 of diamonds", value: 3, source: 'img/3d.png'},
                  {name:  "4 of diamonds", value: 4, source: 'img/4d.png'},
                  {name:  "5 of diamonds", value: 5, source: 'img/5d.png'},
                  {name:  "6 of diamonds", value: 6, source: 'img/6d.png'},
                  {name:  "7 of diamonds", value: 7, source: 'img/7d.png'},
                  {name:  "8 of diamonds", value: 8, source: 'img/8d.png'},
                  {name:  "9 of diamonds", value: 9, source: 'img/9d.png'},
                  {name:  "10 of diamonds", value: 10, source: 'img/10d.png'},
                  {name:  "jack of diamonds", value: 10, source: 'img/jd.png'},
                  {name:  "queen of diamonds", value: 10, source: 'img/qd.png'},
                  {name:  "king of diamonds", value: 10, source: 'img/kd.png'}
                ],
      burnDeck: [],
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
