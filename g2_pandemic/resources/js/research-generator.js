class ResearchStatus{
   constructor(){
      this.cities = [cityAtlanta, citySeattle, cityLondon, citySantiago, citySaoPaulo, cityJohannesburg, cityHongKong, citySapporo, citySydney];
   }

   randomResearch(){
      var chosenCity = this.cities[Math.floor(Math.random() * (this.cities.length))];
      chosenCity.populateResearch();
   }
}
