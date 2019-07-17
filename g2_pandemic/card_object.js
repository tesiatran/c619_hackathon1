class Card {
  constructor(diseaseColor, cityName) {
    this.diseaseColor = diseaseColor;
    this.cityName= cityName;
  }
  getDigitseaseColor() {
    return this.diseaseColor;
  }
  getCityName() {
    return this.faceValue;
  }
}

class Deck {
  constructor() {
    this.cardArray = [];
  }
  addCard(diseaseColor, cityName) {
    //adds a card to the deck
    //takes in a string suit and faceValue
    //makes a new card Object from the Card template
    //adds the card object to the storage in the constructor
    //returns the amount of cards currently stored
    var card = new Card(diseaseColor, cityName);
    this.cardArray.push(card);
    return this.cardArray.length;
  }
  shuffle() {
    //reorders the cards in the storage array in a random order
    //takes in nothing
    //returns nothing
    var shuffleArray = [];
    var randomPick = null;
    var randomCard = null;
    while (this.cardArray.length) {
      randomPick = Math.floor(Math.random() * this.cardArray.length);
      randomCard = this.cardArray.splice(randomPick, 1);
      shuffleArray.push(randomCard);
    }
    this.cardArray = shuffleArray.slice();
  }

  dealCards(dealAmount) {
    //deals out a number of cards
    //takes in the number of cards to deal
    //removes that many cards from the deck
    //returns an array with that many cards in it,
    //in the opposite order they were added (last-in, first-out)
    //cannot return more cards than the deck has
    if (dealAmount > this.cardArray.length) {
      dealAmount = this.cardArray.length;
    }
    var startSplice = this.cardArray.length - dealAmount;
    var endSplice = this.cardArray.length
    var theDeal = this.cardArray.splice(startSplice, endSplice);
    theDeal.reverse();
    console.log('theDeal' + theDeal)
    return theDeal;
  }
}
