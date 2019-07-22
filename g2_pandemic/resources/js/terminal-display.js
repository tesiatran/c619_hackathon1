class TerminalDisplay {
  constructor(){

  }
  winGame() {
    $('#win').removeClass('noViz');
    $('#success')[0].play();
    $('#outbreak').text('OUTBREAK CONTAINED!');
  }
  loseGame() {
    $('#win').removeClass('noViz');
    $('#outbreak').text('LEAVE THE PLANET!');
    $('#loseGame')[0].play();
  }
  startGameMessage() {
    $('#outbreak').text('FLY TO A CITY! TREAT OR CURE THE POPULATION!');
  }
  researchMessage() {
    $('#outbreak').text('CURE FOUND! PICK ACTIVE CITY TEAM.');
  }
  outbreakMessage() {
    $('#outbreak').text("OUTBREAKS: " + outbreakCounter);
  }
  cureMessage(cityName) {
    $('#outbreak').text(cityName + " has been CURED!");
  }
}
