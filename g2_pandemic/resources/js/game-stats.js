class GameStats{
  constructor(){
    this.outbreakCount = null;
    //Recieves list of cured cities.
    this.uncuredCities = [cityLondon, citySeattle,cityAtlanta,citySaoPaulo,citySantiago,cityJohannesburg,cityHongKong,citySapporo,citySydney];
    this.cities = this.uncuredCities;
    this.curedCities = {};
    this.turnCount = null;
  }
  getOutbreaks(){
    return this.outbreakCount;
  }

  incrementOutbreak(){
    this.outbreakCount++;
  }

  decrementOutbreak(){
    this.outbreakCount--;
    console.log("The total number of outbreaks is now "+this.outbreakCount);
  }

  getCured(){
    return this.curedCities;
  }
  addResearchStation(){
  }

  cureCity(cityName){
    if (this.uncuredCities.includes(cityName)){
      this.cities[this.cities.indexOf(cityName)].diseaseCured = true;
      this.uncuredCities.splice(this.uncuredCities.indexOf(cityName), 1);
    }
  }

  randomOutbreak(){
    var chosenCity = this.uncuredCities[Math.floor(Math.random() * this.uncuredCities.length)];
    chosenCity.addDisease();
  }

  addOutBreak(city){
    city.addDisease();
  }

  updateCures(diseaseName){
    this.curedCities[diseaseName] = true;
  }

  getTurnCount(){
    return this.turnCount;
  }

  addTurn(){
    this.turnCount++;
  }
  checkOutbreaks(){
    if (outbreakCounter === 0){
      //win
    } else if (outbreakCounter === 9){
      //lose
    }
  }
}
