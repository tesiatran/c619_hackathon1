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

  // card index is 0-2, top middle or last div in card container
  removeCard(cardIndex){
    console.log('removeCard');
    this.cards.splice(cardIndex,1);
  }

  getCards(){
    console.log('getCards')
    return this.cards;
  }
  
  move(targetLocation){
    $('#' + this.location + " " + this.playerClass).addClass('noViz');
    this.location = targetLocation;
    this.renderMove();

    if(this.location === researchCenterCity.cityName){
      $('.research' + this.location).removeClass("noViz");
      // this.cure();
    } else{
      // this.treat();
    }
  }

  treat(){
    if(this.infectedCities.includes(this.location)){
      outbreakCounter--;
      $("#outbreak").text("OUTBREAK count: " + game.outbreakCount);
      this.infectedCities.splice(this.infectedCities.indexOf(this.location), 1);
      if(outbreakCounter === 0){
        $('.win').removeClass('noViz');
      }
    }
    return $('#' + this.location + " .infectBlockOne").hide();
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
