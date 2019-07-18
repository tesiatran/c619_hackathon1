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
   constructor(cardObj){
      this.cards = [];
      this.cardtoPush = cardObj;
   }

   dealCards(cardsToDeal){
      var cardsDealt = [];

      if(cardsToDeal <= this.cards.length){
         for(var dealIndex = 0; dealIndex < cardsToDeal; dealIndex++){
            cardsDealt.push(this.cards.pop());
         }
      } else if(cardsToDeal > this.cards.length){
         for(var dealIndex = 0; dealIndex < this.cards.length; dealIndex++){
            cardsDealt.push(this.cards.pop());
         }
      }
      return cardsDealt;
   }

   addCard(){
      this.cards.push(new Card(diseaseColor, cityName));
      return this.cards.length;
   }

   getCardCount(){
      return this.cards.length;
   }

   shuffle(){
      for(var oldIndex = this.cards.length - 1; oldIndex > 0; oldIndex--){
         var randomIndex = Math.floor(Math.random() * this.cards.length);
         var newIndex = this.cards[oldIndex];
         this.cards[oldIndex] = this.cards[randomIndex];
         this.cards[randomIndex] = newIndex;
      }
   }
}
