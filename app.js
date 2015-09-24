
var deck = {
  deck: [],
  deckValues:   [
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
                  {value:14},
                ],

  deckSuits:    [
                  {suit:'heart'},
                  {suit:'diamond'},
                  {suit:'spade'},
                  {suit:'club'},
                ],
  createDeck:   function (){
    var deck = []

    for (i in this.deckValues){
      for (j in this.deckSuits){
        this.deck.push(this.deckValues[i].value, this.deckSuits[j].suit)
      }
    }
  }
  shuffleDeck:  function (){

  }
}
