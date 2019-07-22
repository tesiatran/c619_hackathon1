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

  // // function to be called after a player ends their turn
  // endPlayerTurn(){

  // }

  // // function to be called after all players end their turn
  // endGameTurn(){

  // }
}
