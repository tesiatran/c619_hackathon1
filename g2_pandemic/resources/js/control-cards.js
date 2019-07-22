class ControlCards {
  constructor(){

  }

  displayCards() {
    var p1card = null;
    var p2card = null;
    var playerOneHand = player1.getCards();
    var playerTwoHand = player2.getCards();

    for (var index = 0; index < playerOneHand.length; index++) {
        p1card = playerOneHand[index];
        $('#player1Card' + (index + 1)).text(p1card);
    }

    for (var index = 0; index < playerTwoHand.length; index++) {
        p2card = playerTwoHand[index];
        $('#player2Card' + (index + 1)).text(p2card);
    }
  }

  replaceCard(cardIndex){
    player1.removeCard(cardIndex);
    player1.receiveCards(playerdeck.dealCards(1));
    this.displayCards();
  }
}
