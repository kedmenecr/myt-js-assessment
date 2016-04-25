if ( typeof window === 'undefined' ) {
  require('../../app/async');
  var expect = require('chai').expect;
}

describe('async behavior', function() {
  it('you should understand how to use promises to handle asynchronicity', function(done) {
    var flag = false;
    var finished = 0;
    var total = 2;

    function finish(done) {
      if (++finished === total) { done(); }
    }

    asyncAnswers.async(true).then(function(result) {
      flag = result;
      expect(flag).to.eql(true);
      finish(done);
    });

    asyncAnswers.async('success').then(function(result) {
      flag = result;
      expect(flag).to.eql('success');
      finish(done);
    });

    expect(flag).to.eql(false);
  });

});
