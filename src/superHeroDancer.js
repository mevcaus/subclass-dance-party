var superHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);


  // this.color = this.$node.css({color: 'yellow'});
  //this.heacColor =
  this.$node.addClass('superHeroDancer');
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

superHeroDancer.prototype = Object.create(Dancer.prototype);
superHeroDancer.prototype.constructor = superHeroDancer;


superHeroDancer.prototype.step = function() {

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  var x = (Math.random() * 98) + 1;
  var y = (Math.random() * 90) + 8;
  this.$node.animate({
    left: '' + x + '%',
    top: '' + y + '%'
  });
};