class CardControl{
  constructor(){

  }

  removePlayerCard(player){
    this.displayDeck();
  }

  addDeckToPlayer(playerObject){
    var playerdeck = new Deck();
    [playerObject].shuffle();
    [playerObject].receiveCards(playerdeck)
    // playerdeck.shuffle();
    // player1hand = playerdeck.dealCards(3);
    // player2hand = playerdeck.dealCards(3);
    // player1.receiveCards(player1hand);
    // player2.receiveCards(player2hand);
    this.displayDeck();
  }

  displayDeck(){
    var p1card = null;
    var p2card = null;

    for(var index = 0; index < player1hand.length; index++){
      p1card = player1hand[index];
      $('#p1card' + (index + 1)).text(p1card);
    }

    for(var index = 0; index < player2hand.length; index++){
      p2card = player2hand[index];
      $('#p2card' + (index + 1)).text(p2card);
    }
  }
}
