class GameState{
  constructor(event){
    this.handleClick = this.handleClick.bind(this);
    this.currentEvent = event;
    this.citiesList = {
      blue: ["Seattle", "Atlanta","London"],
      yellow: ["Santiago","SaoPaulo", "Johannesburg"],
      red: ["HongKong", "Osaka", "Sapporo","Sydney"]};
    this.cityObjects = [];
    this.players = 2;
  }
