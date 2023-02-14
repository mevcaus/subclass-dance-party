describe('saitamaDancer', function() {

  var saitamaDancer, clock, drakeDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    saitamaDancer = new SaitamaHeroDancer(10, 20, timeBetweenSteps);
    window.dancers.push(saitamaDancer);

  });

  it('should have a jQuery $node object', function() {
    expect(saitamaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node spin', function() {
    sinon.spy(saitamaDancer.$node, 'hover');
    saitamaDancer.step();
    expect(saitamaDancer.$node.hover.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(saitamaDancer, 'step');
      expect(saitamaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(saitamaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(saitamaDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should contain properties of superHeroDancer', function() {
    console.log(saitamaDancer.stopped);
    expect(typeof(saitamaDancer.stopped)).to.be.equal('boolean');
  });

  it('should contain properties of Dancer', function() {
    expect(Boolean(saitamaDancer.top)).to.be.ok;
    expect(Boolean(saitamaDancer.left)).to.be.ok;
  });
});