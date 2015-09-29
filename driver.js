
$(document).ready(function() {
  $('#deal').on('click', function (){
      deal()
  })
  $('#hit').on('click', function (){
      player.hit(deck.dealCard())
      if (player.bust){
        determineWinner()
        showPlayerCards()
        refreshBoard()
      }
      determineWinner()
      showPlayerCards()
  })
  $('#stand').on('click', function (){
      playAsDealer()
      determineWinner()
      showDealerCards()
  })
  //not working maybe needs to be in its own function instead of where we are setting the listeners
  // if (player.hand[0].value == player.hand[1].value){
  //   $('#double').on('click', function (){
  //       player.bet += player.bet*2
  //       playAsDealer()
  //       showDealerCards()
  //       determineWinner()
  //       refreshBoard()
  //       player.resetBet()
  //     })
  // }
  $('#increase-bet').on('click', function (){
      player.raiseBet()
      refreshBoard()
  })
  $('#reset-bet').on('click', function (){
      player.resetBet()
      refreshBoard()
  })
  //listenersOff()

})

deck.shuffleDeck()

var deal = function () {
  clearTable()
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.calculate()
  dealer.calculate()
  viewHand()
  determineWinnerBlackJack()
  $('#score-card').empty().append('<h2>purse</h2>')
  .append(player.purse).append('<h2>bet</h2>').append(player.bet).append('</br>')
  .append('<h2>dealer</h2>').append(dealer.hand[0].value).append('<h2>player</h2>')
  .append(player.calculate())
}

var refreshBoard = function () {
  $('#score-card').empty().append('<h2>purse</h2>')
  .append(player.purse).append('<h2>bet</h2>').append(player.bet).append('</br>')
  .append('<h2>dealer</h2>').append(dealer.calculate()).append('<h2>player</h2>')
  .append(player.calculate()).append('</br>')
}

var clearTable = function () {
  //  removing cards from player's last hand
  player.hand.splice(0,player.hand.length)
  //  removing cards from dealer's last hand
  dealer.hand.splice(0,dealer.hand.length)
  // clear the rest of the table
  $('#dealer-box').empty().append('<h1>dealer</h1>')
  $('#player-box').empty().append('<h1>player</h1>')
  refreshBoard()
}

var playAsDealer = function () {
  var i = dealer.calculate()
  while (i < 18){
    dealer.hit(deck.dealCard())
    i = dealer.calculate()
  }
}

var determineWinnerBlackJack = function () {
  if (player.blackjack() && !dealer.blackjack()) {
    player.purse += player.bet * 1.5
    refreshBoard()
    $('#score-card').append("Player Wins! BLACKJACK!")
    //listenersOff()
    }
    else if(player.blackjack() && dealer.blackjack()) {
      refreshBoard()
      $('#score-card').append("PUSH BOTH HAVE BLACK JACK")
      //listenersOff()
    //player purse stays the same
    }
    else if (dealer.blackjack() && !player.blackjack()) {
      player.purse -= player.bet
      refreshBoard()
      $('#score-card').append("Player Loses Dealer has Black Jack")
      //listenersOff()
    }
}

var determineWinner = function () {
 if (player.bust) {
    player.purse -= player.bet
    refreshBoard()
    $('#score-card').append("Player Loses By Bust")
    //listenersOff()
  }
    else if (dealer.bust) {
      player.purse += player.bet
      refreshBoard()
      $('#score-card').append("Dealer Looses By Bust")
      //listenersOff()
    }
    else if (player.calculate() < dealer.calculate()){
      refreshBoard()
      $('#score-card').append("Player Looses by Lower hand")
      player.purse -= player.bet
      //listenersOff()
    }
    else if (player.calculate() > dealer.calculate()){
      refreshBoard()
      $('#score-card').append("Dealer Looses by Lower hand")
      player.purse += player.bet
      //listenersOff()
    }
    else if (player.calculate() == dealer.calculate()){
      refreshBoard()
      $('#score-card').append("Push")
      //listenersOff()
    }
}

var viewHand = function(){
  $('#dealer-box').append("<img src='" + dealer.hand[0].source + "' />")
  $('#player-box').append("<img src='" + player.hand[0].source + "' />")
  $('#player-box').append("<img src='" + player.hand[1].source + "' />")
}

var showDealerCards = function () {
  $('#dealer-box').empty().append("<h2>dealer</h2>")
  for (var i = 0; i < dealer.hand.length; i++){
    $('#dealer-box').append("<img src='" + dealer.hand[i].source + "' />")
  }
}

var showPlayerCards = function () {
  $('#player-box').empty().append('<h2>player</h2>')
  for (var i = 0; i < player.hand.length; i++){
    $('#player-box').append("<img src='" + player.hand[i].source + "' />")
  }
}
//
// var listenersOff = function () {
//   $('#hit').off()
//   $('#stand').off()
//   $('#increase-bet').off()
//   $('#reset-bet').off()
// }
refreshBoard()
