
$(document).ready(initializeApp)

// var diseaseColorArray = ["blue", "red", "yellow"];

// var blueCities = ["Atlanta", "Seattle", "London"];
// var redCities = ["HongKong", "Sapporo", "Sydney"];
// var yellowCities = ["Santiago", "SaoPaulo", "Johannesburg"];

var cityClicked = null;
var directFlightClicked = null;
var shuttleFlightClicked = null;
var treatDiseaseClicked = null;

var player1 = new Player();
var player2 = new Player();

var playerdeck = new Deck();
var citydeck = new Deck();

var player1hand = null;
var player2hand = null;

var p1card1 = null;

var cityAtlanta = new City("Atlanta", "", "");
var citySeattle = new City("Seattle", "", "");
var cityLondon = new City("London", "", "");
var citySantiago = new City("Santiago", "", "");
var citySaoPaulo = new City("SaoPaulo", "", "");
var cityJohannesburg = new City("Johannesburg", "", "");
var cityHongKong = new City("HongKong", "", "");
var citySapporo = new City("Sapporo", "", "");
var citySydney = new City("Sydney", "", "");

var directFlight = new ActionButton("", "directFlight", "");
var shuttleFlight = new ActionButton("", "shuttleFlight", "");
var cure = new ActionButton("", "treatDisease", "");

var outbreakCounter = (4);

// var cureCounter = null;

function initializeApp(){
   playerdeck.shuffle();

   var treatDisease = new ActionButton("", "treatDisease", "");
   treatDisease.addClickHandler(cure);

   player1hand = playerdeck.dealCards(3);
   player2hand = playerdeck.dealCards(3);

   player1.receiveCards(player1hand);
   player2.receiveCards(player2hand);

   cityAtlanta.addClickHandler();
   citySeattle.addClickHandler();
   cityLondon.addClickHandler();
   citySantiago.addClickHandler();
   citySaoPaulo.addClickHandler();
   cityJohannesburg.addClickHandler();
   cityHongKong.addClickHandler();
   citySapporo.addClickHandler();
   citySydney.addClickHandler();

  function cure(){
    playerOne.cure();
  }

   directFlight.addClickHandler();
   shuttleFlight.addClickHandler();

   for(var index = 0; index < player1hand.length; index++){
      p1card = player1hand[index];
      $('#p1card' + (index + 1)).text(p1card);
   }

   for(var index = 0; index < player2hand.length; index++){
      p2card = player2hand[index];
      $('#p2card' + (index + 1)).text(p2card);
   }

   $("#outbreak").text("OUTBREAK count: " + outbreakCounter);
}

var playerOne = new Player("red", ".playerOne");
