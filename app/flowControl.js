exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function (num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    function calculate(num) {
      if (Number.isInteger(num)) {
        if (num % 3 === 0 && num % 5 === 0) {
          return 'fizzbuzz'
        } else if (num % 3 === 0) {
          return 'fizz';
        } else if (num % 5 === 0) {
          return 'buzz';
        } else {
          return num;
          console.log(num);
        }
      } else {
        return false;
      }
    }
    // if we dont' return the fucntion it will stop at 2.
    // it will check if it is an number and then break out 
    return calculate(num);
  }
}
