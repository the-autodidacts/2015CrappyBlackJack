var start = function () {
  deck.shuffleDeck()
}
var deal = function () {

  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.calculate()
  dealer.calculate()
  determineWinnerBlackJack()
  viewHand()
  console.log('player is holding ' + player.hand[0].name + ' and ' + player.hand[1].name)
  console.log('dealers is holding ' + dealer.hand[0].name)
  console.log('player is betting $' + player.bet)
  console.log('player has $' + player.purse)
  console.log("value of player's hand: " + player.calculate())
}
var playAsDealer = function () {
  var i = dealer.calculate()
  while (i < 18){
    dealer.hit(deck.dealCard())
    i = dealer.calculate()
  }
}
var determineWinnerBlackJack = function () {
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
var determineWinner = function () {
 if (player.bust) {
    console.log("Player Loses By Bust")
    player.purse -= player.bet
  }
    else if (dealer.bust) {
      console.log("Dealer Looses By Bust")
      player.purse += player.bet
    }
    else if (player.calculate() < dealer.calculate()){
      console.log("Player Looses by Lower hand")
      player.purse -= player.bet
    }
    else if (player.calculate() > dealer.calculate()){
      console.log("Dealer Looses by Lower hand")
      player.purse += player.bet
    }
    else if (player.calculate() == dealer.calculate()){
      cosole.log("Push")
    }
}

var viewHand = function(){
  $('#dealer-box').append(dealer.hand[0].name)
  $('#player-box').append(player.hand[0].name).append('<br>').append(player.hand[1].name)
}

var setListeners = function () {
  $('#deal').on('click', function (){
      deal()
  })
  $('#hit').on('click', function (){
      player.hit(deck.dealCard())
      if (player.bust){
        determineWinner()
        $('#bottom-div').append(player.calculate()).append('<br>').append('BUST')
      }
  })
  $('#stand').on('click', function (){
      playAsDealer()
      determineWinner()
  })
  $('#increase-bet').on('click', function (){
      player.raiseBet()
  })
  $('#reset-bet').on('click', function (){
      player.resetBet()
  })
}
setListeners()
start()
