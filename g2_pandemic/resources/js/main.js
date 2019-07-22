
$(document).ready(initializeApp)

var cityClicked = null;
var directFlightClicked = null;
var shuttleFlightClicked = null;
var treatDiseaseClicked = null;

var player1 = new Player();
var player2 = new Player();

var playerdeck = new Deck();
var citydeck = new Deck();

var gameControlCards = new ControlCards();
var player1hand = null;
var player2hand = null;

var p1card1 = null;

var Atlanta = new City("Atlanta", "");
var Seattle = new City("Seattle", "");
var London = new City("London", "");
var Santiago = new City("Santiago", "");
var SaoPaulo = new City("SaoPaulo", "");
var Johannesburg = new City("Johannesburg", "");
var HongKong = new City("HongKong", "");
var Sapporo = new City("Sapporo", "");
var Sydney = new City("Sydney", "");

var directFlight = new ActionButton("", "directFlight", "");
var shuttleFlight = new ActionButton("", "shuttleFlight", "");
var treat = new ActionButton("", "treatDisease", "");

var game = new GameStats();
$('.playerICContainer.player_1').on('click', game.cureCity(this));

var researchStatus = new ResearchStatus();

var researchCenterCity = researchStatus.randomResearch();

var outbreakCounter = (4);

var cureCounter = null;

function initializeApp(){
   debugger;
   playerdeck.shuffle();

   var treatDisease = new ActionButton("", "treatDisease", "");
   treatDisease.addClickHandler(treat);

   player1hand = playerdeck.dealCards(3);
   player2hand = playerdeck.dealCards(3);
   player1.receiveCards(player1hand);
   player2.receiveCards(player2hand);
   // dealToPlayer(player1, 3, playerdeck);
   // dealToPlayer(player2, 3, playerdeck);

   Atlanta.addClickHandler();
   Seattle.addClickHandler();
   London.addClickHandler();
   Santiago.addClickHandler();
   SaoPaulo.addClickHandler();
   Johannesburg.addClickHandler();
   HongKong.addClickHandler();
   Sapporo.addClickHandler();
   Sydney.addClickHandler();

  function treat(){
    playerOne.treat();
  }

   directFlight.addClickHandler();
   shuttleFlight.addClickHandler();
   gameControlCards.displayCards();

// function displayCards() {
//    for (var index = 0; index < player1hand.length; index++) {
//       p1card = player1hand[index];
//       $('#player1Card' + (index + 1)).text(p1card);
//    }

//    for (var index = 0; index < player2hand.length; index++) {
//       p2card = player2hand[index];
//       $('#player2Card' + (index + 1)).text(p2card);
//    }
// }
   // for(var index = 0; index < player1hand.length; index++){
   //    p1card = player1hand[index];
   //    $('#player1Card' + (index + 1)).text(p1card);
   // }

   // for(var index = 0; index < player2hand.length; index++){
   //    p2card = player2hand[index];
   //    $('#player2Card' + (index + 1)).text(p2card);
   // }

   $("#outbreak").text("OUTBREAKS: " + outbreakCounter);
   $('.playerHandContainer .player_1').on('click', function(){
      var target = $(this).text();
      game.cureCity(target);
   });
}

var playerOne = new Player("red", ".playerOne");
