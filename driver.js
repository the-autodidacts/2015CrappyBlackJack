var start = function () {
  deck.shuffleDeck()
}
var deal = function () {
  
  player.placeBet(player.bet)
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.calculate()
  dealer.calculate()
  determineWinner()
  viewHand()
  if ( player.calculate() < 21)
  $('#hit').on('click', function (){
      player.hit(deck.dealCard())
    })
    else {
      $('#bottom-div').append(player.calculate()).append('<br>').append('BUST')

    }

  console.log('player is holding ' + player.hand[0].name + ' and ' + player.hand[1].name)
  console.log('dealers is holding ' + dealer.hand[0].name)
  console.log('player is betting $' + player.bet)
  console.log('player has $' + player.purse)
  console.log("value of player's hand: " + player.calculate())
}
var determineWinner = function () {
  player.blackjack()
  dealer.blackjack()
  if (player.blackjackVal && !dealer.blackjackVal) {
    console.log("player wins BLACKJACK")
    player.purse += player.bet * 1.5

  }
    else if(player.blackjackVal && dealer.blackjackVal) {
      console.log("PUSH BOTH HAVE BLACK JACK")
    //player purse stays the same
    }
    else if (dealer.blackjackVal && !player.blackjackVal) {
      console.log("Player Loses Dealer has Black Jack")
      player.purse -= player.bet
    }
}

var viewHand = function(){
  $('#dealer-box').append(dealer.hand[0].name)
  $('#player-box').append(player.hand[0].name).append('<br>').append(player.hand[1].name)
}

$('#deal').on('click', function (){
    deal()
  })
