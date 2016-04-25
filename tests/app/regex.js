if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {
    expect(regexAnswers.containsNumber('abc123')).to.eql(true);
    expect(regexAnswers.containsNumber('abc')).to.eql(false);
  });

  it('you should be able to detect a repeating letter in a string', function() {
    expect(regexAnswers.containsRepeatingLetter('bookkeeping')).to.eql(true);
    expect(regexAnswers.containsRepeatingLetter('rattler')).to.eql(true);
    expect(regexAnswers.containsRepeatingLetter('ZEPPELIN')).to.eql(true);
    expect(regexAnswers.containsRepeatingLetter('cats')).to.eql(false);
    expect(regexAnswers.containsRepeatingLetter('l33t')).to.eql(false);
  });

  it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
    expect(regexAnswers.endsWithVowel('cats')).to.eql(false);
    expect(regexAnswers.endsWithVowel('gorilla')).to.eql(true);
    expect(regexAnswers.endsWithVowel('I KNOW KUNG FU')).to.eql(true);
  });

});
