class GameState{
  constructor(event){
    this.handleClick = this.handleClick.bind(this);
    this.currentEvent = event;
    this.cityObjects = [];
    this.playerArray = [];
    this.currentPlayer = 0;
    this.players = 2;
  }

  createPlayer(name){
    var player = new Player(name);
    this.playerArray.push(player);
    var domElement = player.render();
    $(".allPlayersContainer").append(domElement);
  }
}
