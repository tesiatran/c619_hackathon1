class TerminalDisplay {
  constructor(){

  }
  winGame() {
    console.log('winGame');
    $('#win').removeClass('noViz');
    $('#outbreak').text('OUTBREAK CONTAINED!');
  }
  loseGame() {
    console.log('loseGame');
    $('#win').removeClass('noViz');
    $('#outbreak').text('LEAVE THE PLANET!');
  }
  startGameMessage() {
    console.log('startGameMessage');
    $('#outbreak').text('FLY TO A CITY! TREAT OR CURE THE POPULATION!');
  }
  researchMessage() {
    console.log('researchMessage');
    $('#outbreak').text('CURE FOUND! PICK ACTIVE CITY TEAM.');
  }
}
