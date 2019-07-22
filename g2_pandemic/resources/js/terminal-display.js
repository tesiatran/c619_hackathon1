class TerminalDisplay {
  constructor(){

  }

  winGame() {
    $('#win').removeClass('noViz');
    $('#outbreak').text('OUTBREAK CONTAINED!');
  }

  loseGame() {
    $('#win').removeClass('noViz');
    $('#outbreak').text('LEAVE THE PLANET!');
  }

  startGameMessage() {
    $('#outbreak').text('FLY TO A CITY! TREAT OR CURE THE POPULATION!');
  }

  researchMessage() {
    $('#outbreak').text('CURE FOUND! PICK AN ACTIVE CITY CARD.');
  }

  outbreakMessage() {
    $('#outbreak').text("OUTBREAKS: " + outbreakCounter);
  }

  cureMessage(cityName) {
    $('#outbreak').text(cityName + " has been CURED!");
  }
}
