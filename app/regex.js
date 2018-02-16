exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel : function(str) {
  return (/[AEIOUaeiou]$/).test(str);
  }
};
