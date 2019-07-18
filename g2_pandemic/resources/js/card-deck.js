class Card{
   constructor(diseaseColor, cityName){
      this.diseaseColor = diseaseColor;
      this.cityName = cityName;
   }

   getDisease(){
      return this.diseaseColor;
   }

   getCity(){
      return this.cityName;
   }
}

class Deck{
   constructor(){
      this.cardDeck = ["Atlanta", "Seattle", "London", "Santiago", "Sao Paulo", "Johannesburg", "Hong Kong", "Sapporo", "Sydney"];
   }

   dealCards(cardsToDeal){
      var cardsDealt = [];

      if(cardsToDeal <= this.cardDeck.length){
         for(var dealIndex = 0; dealIndex < cardsToDeal; dealIndex++){
            cardsDealt.push(this.cardDeck.pop());
         }
      } else if(cardsToDeal > this.cardDeck.length){
         for(var dealIndex = 0; dealIndex < this.cardDeck.length; dealIndex++){
            cardsDealt.push(this.cardDeck.pop());
         }
      }
      return cardsDealt;
   }

   addCard(cardToAdd){
      this.cardDeck.push(cardToAdd);
      return this.cardDeck.length;
   }

   getCardCount(){
      return this.cardDeck.length;
   }

   shuffle(){
      for(var oldIndex = this.cardDeck.length - 1; oldIndex > 0; oldIndex--){
         var randomIndex = Math.floor(Math.random() * this.cardDeck.length);
         var newIndex = this.cardDeck[oldIndex];
         this.cardDeck[oldIndex] = this.cardDeck[randomIndex];
         this.cardDeck[randomIndex] = newIndex;
      }
   }
}
