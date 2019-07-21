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
  }

  populateResearch(){
    this.researchStation = researchCenterCity;
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
  }
}
