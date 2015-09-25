var blackjack = function () {

  //createDeck will be needed to reset game in the future
  deck.createDeck()
  deck.shuffleDeck()
  player.placeBet(player.bet)
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.hit(deck.dealCard())
  dealer.hit(deck.dealCard())
  player.calculate()

  console.log('player is holding ' + player.hand[0].name + ' and ' + player.hand[1].name)
  console.log('dealers is holding ' + dealer.hand[0].name)
  console.log('player is betting $' + player.bet)
  console.log('player has $' + player.purse)
  console.log("value of player's hand: " + player.calculate())
  //  player hand value compare to 21 if == 21 check dealer if dealer not 21 win 1.5
  //  else if > 21 bust  else ask hit or stand
  //  dealer if value under 17 hit until 17 or bust. Figure ace 1 or 11 for both somehow
}
blackjack()
