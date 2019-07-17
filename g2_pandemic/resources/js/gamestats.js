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

  incrementOutbreak(){
    this.outbreakCount++;
    console.log("An outbreak has occured, the total number of outbreaks is now "+this.outbreakCount);
  }

  updateCures(diseaseName){
    this.cureFound[diseaseName] = true;
  }

  addTurn(){
    this.turnCount++;
  }
}
