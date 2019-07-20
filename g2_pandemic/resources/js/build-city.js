class City extends Player{
  //Takes in a city name and a continent.
    //Example input: ("New York", "Red" "North America") would create that city's object
  constructor(name, color, container){
    super("red", ".playerOne");
    this.handleClick = this.handleClick.bind(this);
    this.cityName = name;
    this.diseaseCount = 0;
    this.diseaseType = color;
    this.diseaseCured = null;
    this.researchStation = null;
    this.containerId = container;
    this.playerCount = 0;
  }
  //Displays stats of city
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
    if (this.diseaseCured === true){
      return;
    }
    this.diseaseCount++;
    console.log("Disease spreads through "+this.cityName+"! It now has "+this.diseaseCount+" "+this.diseaseType+" points!")
  }

  // render(height, width){
  //   var cityDiv = $('<div>');
  //   cityDiv.addClass("city");
  //   cityDiv.addClass(this.diseaseType);
  //   cityDiv.attr('id', this.cityName);
  //   var style = {
  //     'background-color': this.actionColor,
  //     'height': height,
  //     'width': width
  //   };
  //   cityDiv.css(style);
  //   cityDiv.appendTo('#'+this.containerId);
  //   this.addClickHandler();
  // }

  addClickHandler(){
    $('#'+this.cityName).on('click',  this.handleClick);
  }

  handleClick(){
    playerOne.move(this.cityName);
  }
}
