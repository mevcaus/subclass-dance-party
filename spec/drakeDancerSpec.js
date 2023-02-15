describe('drakeDancer', function() {

  var drakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    drakeDancer = new DrakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(drakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node spin', function() {
    sinon.spy(drakeDancer.$node, 'css');
    drakeDancer.step();
    expect(drakeDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(drakeDancer, 'step');
      expect(drakeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(drakeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(drakeDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should contain properties of popDancer', function() {
    expect(drakeDancer.deg).to.be.equal(0);
  });

  it('should contain properties of Dancer', function() {
    expect(Boolean(drakeDancer.top)).to.be.ok;
    expect(Boolean(drakeDancer.left)).to.be.ok;
  });
});