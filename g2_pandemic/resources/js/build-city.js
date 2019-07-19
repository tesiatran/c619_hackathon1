class City extends Player{
  //Takes in a city name and a continent.
    //Example input: ("New York", "Red" "North America") would create that city's object
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
