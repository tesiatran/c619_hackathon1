class Player{
  constructor(color, playerClass){
    this.turnActive = null;
    this.cards = [];
    this.location = "Atlanta";
    this.infectedCities = [];
    this.color = color;
    this.researchStation = researchCenterCity;
    this.playerClass = playerClass;
    $('.playerOne').addClass('noViz')
    this.renderMove();
  }

  receiveCards(inputCards){
    for(var i = 0; i < inputCards.length; i++){
      this.cards.push(inputCards[i]);
    }
  }

  removeCard(cardIndex){
    this.cards.splice(cardIndex,1);
  }

  getCards(){
    return this.cards;
  }

  move(targetLocation){
    $('#' + this.location + " " + this.playerClass).addClass('noViz');
    this.location = targetLocation;
    this.renderMove();

    if(this.location === researchCenterCity.cityName){
      $('.research' + this.location).removeClass("noViz");
      foundResearch = true;
      researchLocation = this.location;
      gameTerminalDisplay.researchMessage();
      $('#cureFound')[0].play();
    } else{
      $('#low')[0].play();
    }
  }

  treat(){
    if(this.infectedCities.includes(this.location)){
      outbreakCounter--;
      $("#outbreak").text("OUTBREAKS : " + game.outbreakCount);
      gameTerminalDisplay.outbreakMessage();
      this.infectedCities.splice(this.infectedCities.indexOf(this.location), 1);
      if(outbreakCounter === 0){
        $('.win').removeClass('noViz');
        gameTerminalDisplay.winMessage();
      }
    }
    return $('#' + this.location + " .infectBlockOne").addClass('noViz');
  }

  discoverCure(target){
    if(player1hand.includes(target)){
      game.cureCity(target);
    }
  }

  renderMove(){
    $('#' + this.location + " " + this.playerClass).removeClass('noViz');
  }

  directFlight(targetLocation){
    if(this.cards.includes(targetLocation)){
        this.move(targetLocation);
        this.cards.splice(this.cards.indexOf(targetLocation), 1);
    } else{

    }
  }
}
