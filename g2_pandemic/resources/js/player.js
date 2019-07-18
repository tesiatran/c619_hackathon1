class Player {
  constructor(color, playerClass){
    this.cards = [];
    this.location = "Atlanta";
    this.color = color;
    this.playerClass = playerClass;
    $(playerClass).hide();
    this.renderMove();
  }

  move(targetLocation){
    $('#' + this.location + " "+this.playerClass).hide();
    this.location = targetLocation;
    this.renderMove();
  }

  renderMove(){
    $('#'+this.location+" "+this.playerClass).show();
  }
}
