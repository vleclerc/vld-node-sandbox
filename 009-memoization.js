// memoization

function memoizeFunction(func) {
  var cache = {};
  return function() {
    var key = arguments[0];
    if(cache[key]) {
      return cache[key];
    }
    else {
      var val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  }
}
function classic(func){
  return function() {
    var val = func.apply(this, arguments);
    return val;
  }
}

console.log('memoization');

console.log('ex with fibonacci:');

var fibonacci_1 = classic(function(n) {
     console.log(n);
     return (n === 0 || n === 1) ? n : fibonacci_1(n - 1) + fibonacci_1(n - 2);
});

var fibonacci_2 = memoizeFunction(function(n) {
     console.log(n);
     return (n === 0 || n === 1) ? n : fibonacci_2(n - 1) + fibonacci_2(n - 2);
});

console.log('without memoize');
fibonacci_1(4,false);
console.log('with memoize');
fibonacci_2(4,true);
