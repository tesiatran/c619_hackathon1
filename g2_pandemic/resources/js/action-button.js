class ActionButton {
  constructor(color, idName, containerName) {
    this.actionColor= color
    this.domId = idName;
    this.domClass = idName
    this.containerId = containerName;
    this.targetElement = null;
    this.handleClick = this.handleClick.bind(this);
    this.addClickHandler= this.addClickHandler.bind(this);
  }
  addClickHandler(functionToAdd) {
    console.log('addClickHandler', $('#' + this.domId));
    $('#' + this.domId).on('click', functionToAdd);// if called outside bind
  }
  render(height, width){
    console.log('action render');
    var actionDiv = $('<div>');
    actionDiv.addClass("action");
    actionDiv.addClass(this.domClass);
    actionDiv.attr('id', this.domId);
    actionDiv.appendTo('#' + this.containerId);
    var style = {
      'background-color' : this.actionColor,
      'height': height,
      'width' : width
    }
    actionDiv.css(style);
    this.addClickHandler();
  }

  handleClick(){
    console.log("You have clicked " + this.domId);
  }
}
