//console.log(sayHello('Kitty'));

function sayHello(name){
    if (name !== '')
        return `Hello ${name}`;
    return 'Hello, there!';
}



/* TEST FOR ABOVE FUNCTION */
let assert = require("chai").assert;//
describe('Challenge', function() {
  it('should say hello', function() {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
  it('should handle blank input', function() {
    assert.equal(sayHello(""), "Hello there!");
  });
});

//console.log(trailing_zeros_factorial(10));

describe('Challenge2', function() {
  it('should return 2 zeros for 10', function() {
    assert.equal(trailing_zeros_factorial(10), 2);
  });
});



function trailing_zeros_factorial(n) {
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

/*console.log(palindromeChainLength(10));

function palindromeChainLength(n){
  let count = 0, revrs = 0;
  while(n != (revrs = parseInt(n.toString().split('').reverse().join('')))) {
      n += revrs;
      count++;
    }
  return count;
}

  */


var palindromeChainLength = function (n) {
    var chain = 0;
    var find = function (num) {
        var s = num + '';
        var s_rev = s.split('').reverse().join('');
        if (s_rev == s)
            return chain;
        chain++;
        return find(+s_rev + num); 
    };
    return find(n);
};