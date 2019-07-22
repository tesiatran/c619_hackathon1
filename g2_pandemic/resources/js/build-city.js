class City extends Player{
  constructor(name, color){
    super("red", ".playerOne");
    this.handleClick = this.handleClick.bind(this);
    this.cityName = name;
    this.diseaseCount = 0;
    this.diseaseType = color;
    this.diseaseCured = null;
    this.researchStation = null;
    this.playerCount = 0;
    this.cityCured = false;
  }

  populateResearch(){
    this.researchStation = researchCenterCity;
  }
  cureCity(){
    this.cityCured = true;
  }
  getCureStatus(){
    return this.cityCured;
  }
  addDisease(){
    if(this.diseaseCured === true){
      return;
    }
    this.diseaseCount++;
  }

  addClickHandler(){
    $('#'+this.cityName).on('click',  this.handleClick);
  }

  handleClick(){
    playerOne.move(this.cityName);
    for (var i=0; i<3; i++){
      var randomCity = Math.floor(Math.random() * 9);
      var randomBlock = Math.floor(Math.random() * 4);
      var cityArray = ["Atlanta", "Seattle", "London", "Santiago", "SaoPaulo",
        "Johannesburg", "HongKong", "Sapporo", "Sydney"];
      var infectArray = ['infectBlock1', 'infectBlock2', 'infectBlock3', 'infectBlock4']
      var targetInfect = '.' + cityArray[randomCity] + '.' + infectArray[randomBlock];
      $(targetInfect).removeClass('noViz');
    }
    outbreakCounter++;
    if (outbreakCounter >20) {
      gameTerminalDisplay.loseGame();
    }
  }
}
