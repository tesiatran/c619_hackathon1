class GameState{
  constructor(event){
    this.handleClick = this.handleClick.bind(this);
    this.currentEvent = event;
    this.cityObjects = [];
    this.players = 2;
  }

  createPlayers(){
    this.playerOne = new Player("red");
    this.playerTwo = new Player("purple");
  }
}
