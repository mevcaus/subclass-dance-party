var SaitamaHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);


  // this.color = this.$node.css({color: 'yellow'});
  //this.heacColor =
  this.$node.addClass('saitamaHeroDancer');
  //this.$node.prepend('<img id="saitama" src="./images/saitama1.png" />');
};
  // we plan to overwrite the step function below, but we still want the saitamaclass step behavior to work,
  // so we must keep a copy of the old version of this function

SaitamaHeroDancer.prototype = Object.create(superHeroDancer.prototype);
SaitamaHeroDancer.prototype.constructor = saitamaHeroDancer;


SaitamaHeroDancer.prototype.punch = function() {
};