
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
var cityList = {
   'Atl': Atlanta,
   'Sea': Seattle,
   'Lon': London,
   'San': Santiago,
   'Sao': SaoPaulo,
   'Joh': Johannesburg,
   'Hon': HongKong,
   'Sapporo': Sapporo,
   'Sydney' : Sydney
};
var gameTerminalDisplay = new TerminalDisplay();
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
   playerdeck.shuffle();

   var treatDisease = new ActionButton("", "treatDisease", "");
   treatDisease.addClickHandler(treat);

   player1hand = playerdeck.dealCards(3);
   player2hand = playerdeck.dealCards(0);
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
   gameTerminalDisplay.startGameMessage();
   // $("#outbreak").text("OUTBREAKS: " + outbreakCounter);
   // $('.playerHandContainer .player_1').on('click', function(){
   //    game.cureCity(eval($(this).text()));
   // });
   $('.playerHandContainer .player_1').on("click", handleCardClick);
}
function handleCardClick(event) {
   var targetCard = $(event.target);
   var cardData = targetCard.attr('data-card');
   var cardName = targetCard.text();
   cardName = cardName.slice(0,3);
   var cityToCure = cityList[cardName];
   cityToCure.cureCity();
   console.log('cityToCure ', cityToCure);
   gameControlCards.replaceCard(cardData);
   var style = {
      'border-radius': '15px',
      'color': 'rgb(6, 245, 54)',
      'border-width': '3px',
      'border-style': 'solid'
   }
   $('.' + cardName).css(style);
}

var playerOne = new Player("red", ".playerOne");
