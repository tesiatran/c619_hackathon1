class GameStats{
  constructor(){
    this.outbreakCount = null;
    //Recieves list of cured cities.
    this.uncuredCities = [London,Seattle,Atlanta,SaoPaulo,Santiago,Johannesburg,HongKong,Sapporo,Sydney];
    this.cities = [...this.uncuredCities];
    this.curedCities = [];
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

  cureCity(cityName){
    if (this.uncuredCities.includes(cityName) && eval(playerOne.location).researchStation == true){
      this.cities[this.cities.indexOf(cityName)].diseaseCured = true;
      this.curedCities.push(eval(cityName));
      this.uncuredCities.splice(this.uncuredCities.indexOf(cityName), 1);
    }
  }

  randomOutbreak(){
    var chosenCity = this.uncuredCities[Math.floor(Math.random() * this.uncuredCities.length)];
    chosenCity.addDisease();
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
