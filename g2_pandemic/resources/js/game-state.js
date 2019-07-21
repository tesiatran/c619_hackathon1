class GameState{
  constructor(event){
    this.handleClick = this.handleClick.bind(this);
    this.currentEvent = event;
    // this.citiesList = {
    //   // blue: ["Seattle", "Atlanta","London"],
    //   // yellow: ["Santiago","SaoPaulo", "Johannesburg"],
    //   // red: ["HongKong", "Osaka", "Sapporo","Sydney"]};
    this.cityObjects = [];
    this.players = 2;
  }

  createPlayers(){
    this.playerOne = new Player("red");
    this.playerTwo = new Player("purple");
  }

  // // Calls functions to be called after a player ends their turn
  // endPlayerTurn(){

  // }
  // // Calls functions to be called after all player ends their turns
  // endGameTurn(){

  // }
}
