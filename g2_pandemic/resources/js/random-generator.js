class CityStatus{
   constructor(){
      this.cities = [cityAtlanta, citySeattle, cityLondon, citySantiago, citySaoPaulo, cityJohannesburg, cityHongKong, citySapporo, citySydney];
      this.diseaseDot = null;
      this.researchCenter = null;
   }

   generateResearchCenter(){
      var chosenCity;

      for(var researchIndex = 0; researchIndex < this.cities.length; researchIndex++){

         var randomIndex = Math.floor(Math.random() * (this.cities.length - 1));
         chosenCity = this.cities[randomIndex];

      }
   }
}
