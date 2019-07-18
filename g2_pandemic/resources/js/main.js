
$(document).ready(initializeApp)

// var diseaseColorArray = ["blue", "red", "yellow"];

// var blueCities = ["Atlanta", "Seattle", "London"];
// var redCities = ["HongKong", "Sapporo", "Sydney"];
// var yellowCities = ["Santiago", "SaoPaulo", "Johannesburg"];

function initializeApp(){
  var playerdeck = new Deck();
  playerdeck.shuffle();

  var player1hand = playerdeck.dealCards(3);
  var player2hand = playerdeck.dealCards(3);

  var playerOne = new Player("chartreuse", "playerOne");
  playerOne.recieveCard(player1hand);

  var shuttleCondition = {
    //get playerOne object's city location
    //compare to clicked city
    //if yes, call playerOne's move function
    //move function should call player.directflight passing in the location
  }

  console.log(playerdeck);
  console.log(player1hand);
  console.log(player2hand);
  // var shuttleCondition = {

  //   //color of city player is on === color of city clicked
  //     // move player
  //   //else return no
  // }
  var directFlight = new ActionButton("", "directFlight", "");
  directFlight.addClickHandler(test);

  var shuttleFlight = new ActionButton("", "shuttleFlight", "");
  shuttleFlight.addClickHandler(test);

  var cure = new ActionButton("", "treatDisease", "");
  cure.addClickHandler(test);


}
function test() {
  console.log("This is ", this.id)
}
