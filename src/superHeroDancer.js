var superHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.stopped = false;

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
  var that = this;
  if (!this.stopped) {
    var x = (Math.random() * 98) + 1;
    var y = (Math.random() * 90) + 8;
    this.$node.animate({
      left: '' + x + '%',
      top: '' + y + '%'
    });
    this.top = y;
    this.left = x;

    window.dancers.forEach((dancer, index) => {
      if (dancer !== that) {
        that.interact.call(that, dancer);
      }
    });

    Dancer.prototype.step.call(this);
  }

  this.$node.hover(
    function() {
      that.stopped = true;
    });

  // , function() {
  //   that.stopped = false;
  //   Dancer.prototype.step.call(that);
  // }

};

superHeroDancer.prototype.interact = function(dancer) {
  var bodyHeight = $('body').height();
  var bodyWidth = $('body').width();
  var x = this.left - ((dancer.left / bodyWidth) * 100);
  var y = this.top - ((dancer.top / bodyHeight) * 100);

  var distance = Math.sqrt(x * x + y * y);

  if (Math.abs(distance) < 10) {
    this.stopped = true;
  }

};