class ResearchStatus{
   constructor(){
      this.cities = [Atlanta, Seattle, London, Santiago, SaoPaulo, Johannesburg, HongKong, Sapporo, Sydney];
   }

   randomResearch(){
      var chosenCity = this.cities[Math.floor(Math.random() * (this.cities.length))];
      chosenCity.populateResearch();
      researchCenterCity = chosenCity;

      return researchCenterCity;
   }
}
