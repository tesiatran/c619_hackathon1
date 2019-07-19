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
