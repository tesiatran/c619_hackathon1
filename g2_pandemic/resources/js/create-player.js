class Player {
  constructor(color, playerClass){
    this.turnActive = null;
    this.cards = [];
    this.location = "Atlanta";
    this.infectedCities = ["Seattle", "SaoPaulo", "Sapporo", "London"]
    this.color = color;
    this.playerClass = playerClass;
    $('.playerOne').addClass('noViz')
    this.renderMove();
  }
  receiveCards(inputCards){
    for (var i = 0; i < inputCards.length; i++){
      this.cards.push(inputCards[i]);
    }
  }
  move(targetLocation){
    $('#' + this.location + " "+this.playerClass).addClass('noViz');
    this.location = targetLocation;
    this.renderMove();
  }

  cure(){
    if (this.infectedCities.includes(this.location)){
      outbreakCounter--;
      $("#outbreak").text("OUTBREAK count: " + outbreakCounter);
      this.infectedCities.splice(this.infectedCities.indexOf(this.location), 1);
      if (outbreakCounter == 0){
        $('.win').removeClass('noViz');
      }
    }
    return $('#'+this.location + " .infectBlockOne").hide();
  }


  renderMove(){
    $('#' + this.location + " " + this.playerClass).removeClass('noViz');
  }

  directFlight(targetLocation){
    if (this.cards.includes(targetLocation)){
        this.move(targetLocation);
        this.cards.splice(this.cards.indexOf(targetLocation), 1);
    }
  }
}
