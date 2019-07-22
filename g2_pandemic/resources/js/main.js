
$(document).ready(initializeApp)

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
   'Sap': Sapporo,
   'Syd': Sydney
};
var gameTerminalDisplay = new TerminalDisplay();
var directFlight = new ActionButton("", "directFlight", "");
var shuttleFlight = new ActionButton("", "shuttleFlight", "");
var treat = new ActionButton("", "treatDisease", "");

var game = new GameStats();
$('.playerICContainer.player_1').on('click', game.cureCity(this));

var researchStatus = new ResearchStatus();

var researchCenterCity = researchStatus.randomResearch();
var foundResearch = false;
var researchLocation = null;
var outbreakCounter = 0;

var cureCounter = null;

function initializeApp() {
   playerdeck.shuffle();

   var treatDisease = new ActionButton("", "treatDisease", "");
   treatDisease.addClickHandler(treat);

   player1hand = playerdeck.dealCards(3);
   player2hand = playerdeck.dealCards(0);
   player1.receiveCards(player1hand);
   player2.receiveCards(player2hand);

   Atlanta.addClickHandler();
   Seattle.addClickHandler();
   London.addClickHandler();
   Santiago.addClickHandler();
   SaoPaulo.addClickHandler();
   Johannesburg.addClickHandler();
   HongKong.addClickHandler();
   Sapporo.addClickHandler();
   Sydney.addClickHandler();

   function treat() {
      playerOne.treat();
   }

   directFlight.addClickHandler();
   shuttleFlight.addClickHandler();
   gameControlCards.displayCards();
   gameTerminalDisplay.startGameMessage();

   $('.playerHandContainer .player_1').on("click", handleCardClick);
}
function handleCardClick(event) {
   if (foundResearch) {
      var targetCard = $(event.target);
      var cardData = targetCard.attr('data-card');
      var cardName = targetCard.text();
      cardName = cardName.slice(0, 3);
      var cityToCure = cityList[cardName];
      cityToCure.cureCity();
      gameControlCards.replaceCard(cardData);
      var style = {
         'border-radius': '15px',
         'color': 'rgb(6, 245, 54)',
         'border-width': '3px',
         'border-style': 'solid'
      }
      $('#high')[0].play();
      $('.' + cardName).css(style);
      foundResearch = false;
      researchCenterCity = researchStatus.randomResearch();
      $('.research' + researchLocation).addClass("noViz");
      cureCounter++
      if (cureCounter===4) {
         gameTerminalDisplay.winGame();
      }
   }
}

var playerOne = new Player("red", ".playerOne");
