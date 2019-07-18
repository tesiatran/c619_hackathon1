class ActionButton {
  constructor(color, actionName, containerName) {
    this.actionColor= color
    this.domId = actionName;
    this.domClass = actionName
    this.containerId = containerName;
    this.targetElement = null;
    this.handleClick = this.handleClick.bind(this);
    this.addClickHandler= this.addClickHandler.bind(this);
  }
  addClickHandler() {
    console.log('addClickHadler', $('#' + this.domId));
    $('#' + this.domId).on('click', this.handleClick);// if called outside bind
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

  addClickHandler(){
    $('#' + this.domId).on('click', this.handleClick);
  }

  handleClick(){
    console.log("You have clicked " + this.domId);
  }
} // card-object branch
