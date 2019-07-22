class ActionButton{
  constructor(color, idName, containerName){
    this.actionColor= color
    this.domId = idName;
    this.domClass = idName
    this.containerId = containerName;
    this.targetElement = null;
    this.addClickHandler= this.addClickHandler.bind(this);
  }

  addClickHandler(functionToAdd){
    $('#' + this.domId).on('click', functionToAdd);
  }

  render(height, width){
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

}
