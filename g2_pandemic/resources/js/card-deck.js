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
      this.cards = [];
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

      for(var colorIndex = 0; colorIndex < diseaseColorArray.length - 1; colorIndex++){
         diseaseColor = diseaseColorArray[colorIndex];

         if(colorIndex === 0){
            for(var cityIndex = 0; cityIndex < redCitiesArray.length - 1; cityIndex++){
               cityName = redCitiesArray[cityIndex];
            }
         } else if(colorIndex === 1){
            for(var cityIndex = 0; cityIndex < blueCitiesArray.length - 1; cityIndex++){
               cityName = blueCitiesArray[cityIndex];
            }
         } else if(colorIndex === 2){
            for(var cityIndex = 0; cityIndex < yellowCitiesArray.length - 1; cityIndex++){
               cityName = yellowCitiesArray[cityIndex];
            }
         }
      }

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
