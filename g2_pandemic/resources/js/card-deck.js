class Card{
   constructor(diseaseColor, cityName){
      this.diseaseColor = null;
      this.cityName = null;
   }

   getDisease(){
      var diseaseColorArray = ["red", "blue", "yellow"];

      // var randomNum = Math.floor(Math.random() * 2);
      // this.diseaseColor = diseaseColorArray[randomNum];

      this.getCity();

      return this.diseaseColor;
   }

   getCity(){
      var redCities = ["HongKong", "Osaka", "Manila", "HoChiMinhCity", "Sydney"];
      var blueCities = ["SanFrancisco", "Atlanta", "NewYork", "Madrid", "London"];
      var yellowCities = ["Bogota", "Santiago", "SaoPaulo", "Lagos", "Johannesburg"];

         if(this.diseaseColor === "red"){
            for(var cityIndex = 0; cityIndex < redCities.length - 1; cityIndex++){
               this.cityName = redCities[cityIndex];

               var index = redCities.indexOf[cityIndex];
               redCities = redCities.splice(index);

            }
         } else if(this.diseaseColor === "blue"){
            for(var cityIndex = 0; cityIndex < blueCities.length - 1; cityIndex++){
               this.cityName = blueCities[cityIndex];

               var index = blueCities.indexOf[cityIndex];
               blueCities = blueCities.splice(index);

            }
         } else if(this.diseaseColor === "yellow"){
            for(var cityIndex = 0; cityIndex < yellowCities.length - 1; cityIndex++){
               this.cityName = yellowCities[cityIndex];

               var index = yellowCities.indexOf[cityIndex];
               yellowCities = yellowCities.splice(index);

            }

         }
      return this.cityName;
   }
}

class Deck{
   constructor(){
      this.cardDeck = [];
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
