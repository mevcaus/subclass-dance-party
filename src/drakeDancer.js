var DrakeDancer = function(top, left, timeBetweenSteps) {
  PopDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('drakeDancer');
};

DrakeDancer.prototype = Object.create(PopDancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;
