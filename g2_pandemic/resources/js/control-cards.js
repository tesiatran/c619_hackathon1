class ControlCards {
  constructor(){
  }
  displayCards() {
    var p1card = null;
    var p2card = null;
    for (var index = 0; index < player1hand.length; index++) {
        p1card = player1hand[index];
        $('#player1Card' + (index + 1)).text(p1card);
    }
    for (var index = 0; index < player2hand.length; index++) {
        p2card = player2hand[index];
        $('#player2Card' + (index + 1)).text(p2card);
    }
  }
  replaceCard(){
    console.log('replaceCard')
    player1hand.pop();
    player1.removeCard();
    player1.receiveCards(playerdeck.dealCards(1));
    this.displayCards();
  }
}
