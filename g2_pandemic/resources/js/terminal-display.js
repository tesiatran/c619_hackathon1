class TerminalDisplay{
  constructor(){

  }

  winGame(){
    $('#win').removeClass('noViz');
    $('#success')[0].play();
    $('#outbreak').text('YOU WON! OUTBREAK CONTAINED!');
  }

  loseGame(){
    $('#win').removeClass('noViz');
    $('#outbreak').text('YOU LOST! LEAVE THE PLANET!');
    $('#loseGame')[0].play();
  }

  startGameMessage(){
    $('#outbreak').text('CLICK ON A CITY TO FLY TO IT! FIND THE CURE TO TREAT THE POPULATION!');
  }

  researchMessage(){
    $('#outbreak').text('CURE FOUND! PICK AN ACTIVE CITY CARD.');
  }

  outbreakMessage(){
    $('#outbreak').text("OUTBREAKS: " + outbreakCounter);
  }

  cureMessage(cityName){
    $('#outbreak').text(cityName + " has been SAVED!");
  }
}
