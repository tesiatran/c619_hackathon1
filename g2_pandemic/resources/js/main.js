
$(document).ready(initializeApp)

// var diseaseColorArray = ["blue", "red", "yellow"];

// var blueCities = ["Atlanta", "Seattle", "London"];
// var redCities = ["HongKong", "Sapporo", "Sydney"];
// var yellowCities = ["Santiago", "SaoPaulo", "Johannesburg"];

var cityClicked = null;
var directFlightClicked = null;
var shuttleFlightClicked = null;
var treatDiseaseClicked = null;

function initializeApp(){
   // var playerOne = new Player("red", ".playerOne");
   // var playerTwo = new Player("purple", ".playerTwo");

   // var player1 = new Player();
   // console.log(player1);
   // var player2 = new Player();

   var playerdeck = new Deck();
   playerdeck.shuffle();
   console.log(playerdeck);

   var player1hand = playerdeck.dealCards(3);
   var player2hand = playerdeck.dealCards(3);

   console.log(player1hand);
   console.log(player2hand);

  var directFlight = new ActionButton("", "directFlight", "");
  directFlight.addClickHandler(test);

  var shuttleFlight = new ActionButton("", "shuttleFlight", "");
  shuttleFlight.addClickHandler(test);

  var treatDisease = new ActionButton("", "treatDisease", "");
  treatDisease.addClickHandler(cure);



   var cityAtlanta = new City("Atlanta", "", "");
   cityAtlanta.addClickHandler();

   var citySeattle = new City("Seattle", "", "");
   citySeattle.addClickHandler();

   var cityLondon = new City("London", "", "");
   cityLondon.addClickHandler();

   var citySantiago = new City("Santiago", "", "");
   citySantiago.addClickHandler();

   var citySaoPaulo = new City("SaoPaulo", "", "");
   citySaoPaulo.addClickHandler();

   var cityJohannesburg = new City("Johannesburg", "", "");
   cityJohannesburg.addClickHandler();

   var cityHongKong = new City("HongKong", "", "");
   cityHongKong.addClickHandler();

   var citySapporo = new City("Sapporo", "", "");
   citySapporo.addClickHandler();

   var citySydney = new City("Sydney", "", "");
   citySydney.addClickHandler();


  function test() {
    console.log("This is ", this.id)
  }

  function cure(){
    playerOne.cure();
  }

}
var playerOne = new Player("red", ".playerOne");
