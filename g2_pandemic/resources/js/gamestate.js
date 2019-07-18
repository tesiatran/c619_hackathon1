class GameState{
  constructor(event){
    this.currentEvent = event;
    this.citiesList = {
      blue: ["SanFrancisco", "Atlanta", "NewYork", "Madrid", "London"],
      yellow: ["Bogota", "Santiago", "Lagos","SaoPaulo", "Johannesburg"],
      red: ["HongKong", "Osaka", "Manila", "HoChiMinhCity", "Sydney"]};
    this.cityObjects = [];
    this.players = 2;
  }

  createPlayers(){
    this.playerOne = new Player("red");
    this.playerTwo = new Player("purple");
  }

  createCities(color){
    for ( var count = 0; count < this.citiesList[color].length; count++){
      this.cityObjects.push(new BuildCity(this.citiesList[color][count], color, this.citiesList[color][count]));
    }
  }

  renderAllCities(){
    for (var count = 0; count < this.cityObjects.length; count++){
      this.cityObjects[count].render("100px", "100px");
    }
  }
  //Calls functions to set up game
  startGame(){
    //Deal out cards to players
    //Infect cities
  }
  //Calls functions to be called after a player ends their turn
  endPlayerTurn(){

  }
  //Calls functions to be called after all player ends their turns
  endGameTurn(){

  }
}
