// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //this.position = [top, left];
  this.timeBetweenSteps = timeBetweenSteps;
  // this.css = this.$node.css({color: 'black',
  //   height: 0,
  //   width: 0
  // });
  this.step();
  this.setPosition(top, left);
  // this.head = 'grey';
  //this.shape = 'circle';
};

// Dancer.prototype.createDancer = function() {
//   var styleSettings = {
//     position = this.position;

//   };
//   this.$node.css(styleSettings);
// }

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(index) {
  //Will need to change top property to get spacing
  this.setPosition(40 + index * 50, 0);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

