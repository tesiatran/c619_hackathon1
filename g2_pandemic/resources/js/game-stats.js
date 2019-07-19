class GameStats{
  constructor(){
    this.outbreakCount = null;
    this.cureFound = {
      red: false,
      blue: false,
      yellow: false
    };
    this.turnCount = null;
  }
  getOutbreaks(){
    return this.outbreakCount;
  }
  incrementOutbreak(){
    this.outbreakCount++;
    console.log("An outbreak has occured, the total number of outbreaks is now "+this.outbreakCount);
  }

  decrementOutbreak(){
    this.outbreakCount--;
    console.log("The total number of outbreaks is now "+this.outbreakCount);
  }

  getCured(){
    return this.cureFound;
  }

  updateCures(diseaseName){
    this.cureFound[diseaseName] = true;
  }

  getTurnCount(){
    return this.turnCount;

  }
  addTurn(){
    this.turnCount++;
  }
}
