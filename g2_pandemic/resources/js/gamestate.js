class GameState{
  constructor(event){
    this.currentEvent = event;
    this.citiesList = {
      blue: ["San Francisco", "Atlanta", "New York", "Madrid", "London"],
      yellow: ["Bogota", "Santiago", "Lagos","Sao Paulo", "Johannesburg"],
      red: ["Hong Kong", "Osaka", "Manila", "Ho Chi Minh", "Sydney"]};
    this.cityObjects = [];
    this.players = 2;
  }

  createPlayers(){
    this.playerOne = new Player("red");
    this.playerTwo = new Player("purple");
  }

  createCities(color, containerId){
    for ( var count = 0; count < this.citiesList[color].length; count++){
      this.cityObjects.push(new BuildCity(this.citiesList[color][count], color, containerId));
    }
  }
}
