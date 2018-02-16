if ( typeof window === 'undefined' ) {
  require('../../app/functions');
  var expect = require('chai').expect;
}

describe('functions', function() {
  var sayItCalled = false;
  var sayIt = function(greeting, name, punctuation) {
        sayItCalled = true;
        return greeting + ', ' + name + (punctuation || '!');
      };

  beforeEach(function () {
    sayItCalled = false;
  });

  call_me.apply(this, args);
  var result = functionsAnswers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
    expect(result).to.eql('Hello, Ellie!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to change the context in which a function is called', function() {
    var speak = function() {
          return sayIt(this.greeting, this.name, '!!!');
        };
    var obj = {
          greeting : 'Hello',
          name : 'Rebecca'
        };

    var result = functionsAnswers.speak(speak, obj);
    expect(result).to.eql('Hello, Rebecca!!!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to return a function from a function', function() {
    expect(functionsAnswers.functionFunction('Hello')('world')).to.eql('Hello, world');
    expect(functionsAnswers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
  });

  it('you should be able to use closures', function () {
    var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
    var square = function (x) { return x * x; };

    var funcs = functionsAnswers.makeClosures(arr, square);
    expect(funcs).to.have.length(arr.length);

    for (var i = 0; i < arr.length; i++) {
      expect(funcs[i]()).to.eql(square(arr[i]));
    }
  });

  it('you should be able to use arguments', function () {
    var a = Math.random();
    var b = Math.random();
    var c = Math.random();
    var d = Math.random();

    expect(functionsAnswers.useArguments(a)).to.eql(a);
    expect(functionsAnswers.useArguments(a, b)).to.eql(a + b);
    expect(functionsAnswers.useArguments(a, b, c)).to.eql(a + b + c);
    expect(functionsAnswers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
  });

});
