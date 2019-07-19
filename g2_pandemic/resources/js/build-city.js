class City extends Player{
  constructor(name, color, container){
    super("red", ".playerOne");
    this.handleClick = this.handleClick.bind(this);
    this.cityName = name;
    this.diseaseCount = 0;
    this.diseaseType = color;
    this.researchStation = null;
    this.containerId = container;
    this.playerCount = 0;
  }

  cityStatus(){
    console.log(this.cityName+ ' has '+this.diseaseCount+ ' number of '+this.diseaseType+' points');
    if (this.researchStation){
      console.log("There is a research station in this city");
    } else {
      console.log("There is no research station in this city");
    }
    console.log("There are "+this.playerCount+" player(s) in this city");
  }

  buildResearch(){
    this.researchStation = true;
    console.log("You have built a research station!");
  }

  addDisease(){
    this.diseaseCount++;
    console.log("Disease spreads through "+this.cityName+"! It now has "+this.diseaseCount+" "+this.diseaseType+" points!")
  }

  addClickHandler(){
    $('#'+this.cityName).on('click',  this.handleClick);
  }

  handleClick(){
    playerOne.move(this.cityName);
  }
}
