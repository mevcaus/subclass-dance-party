var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.deg = 0;

  this.$node.addClass('popDancer');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  //this.setPosition();
  // this.$node.toggle();
  this.deg += 45;
  this.$node.css('transform', 'rotate(' + this.deg + 'deg)');
  // this.$node.animate({
  //   transform: 'rotate(45deg)'
  // }, this.timeBetweenSteps
  // );
};
// div {
//   width: 80px;
//   height: 80px;
//   background-color: skyblue;
// }
// .rotated {
//   transform: rotate(45deg); /* Equal to rotateZ(45deg) */
//   background-color: pink;
// }