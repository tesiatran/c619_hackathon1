
$(document).ready(initializeApp)

// var diseaseColorArray = ["blue", "red", "yellow"];

// var blueCities = ["Atlanta", "Seattle", "London"];
// var redCities = ["HongKong", "Sapporo", "Sydney"];
// var yellowCities = ["Santiago", "SaoPaulo", "Johannesburg"];

function initializeApp(){
   
}

var playerdeck = new Deck();
playerdeck.shuffle();

var player1hand = playerdeck.dealCards(3);
var player2hand = playerdeck.dealCards(3);

console.log(playerdeck);
console.log(player1hand);
console.log(player2hand);
