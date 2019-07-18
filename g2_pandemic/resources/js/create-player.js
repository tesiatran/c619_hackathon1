class Player {
  constructor(color, playerClass){
    this.turnActive = null;
    this.cards = [];
    this.location = "Atlanta";
    this.color = color;
    this.playerClass = playerClass;
    $(playerClass).hide();
    this.renderMove();
  }
  receiveCards(inputCards){
    for (var i = 0; i < inputCards.length; i++){
      this.cards.push(inputCards[i]);
    }
  }
  move(targetLocation){
    $('#' + this.location + " "+this.playerClass).hide();
    this.location = targetLocation;
    this.renderMove();
  }


  renderMove(){
    $('#' + this.location + " " + this.playerClass).show();
  }

  directFlight(targetLocation){
    if (this.cards.includes(targetLocation)){
        this.move(targetLocation);
        this.cards.splice(this.cards.indexOf(targetLocation), 1);
    } else {
      console.log("You do not have the card");
    }
  }
}
