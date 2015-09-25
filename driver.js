var blackjack = function () {

  //createDeck will be needed to reset game in the future
  deck.createDeck()
  deck.shuffleDeck()
  player.placeBet(player.bet)
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())

  player.blackjack()
  dealer.blackjack()

  // seeing if anyone is immediately out.
  if (player.blackjackVal && !dealer.blackjackVal) {
    console.log("player wins BLACKJACK")
    //add money to player purse
  }
    else if(player.blackjackVal && dealer.blackjackVal) {
      console.log("PUSH BOTH HAVE BLACK JACK")
    //player purse stays the same
    }
    else if (dealer.blackjackVal && !player.blackjackVal) {
      console.log("Player Loses Dealer has Black Jack")

    }

  player.calculate()

  console.log('player is holding ' + player.hand[0].name + ' and ' + player.hand[1].name)
  console.log('dealers is holding ' + dealer.hand[0].name)
  console.log('player is betting $' + player.bet)
  console.log('player has $' + player.purse)
  console.log("value of player's hand: " + player.calculate())
}
blackjack()
