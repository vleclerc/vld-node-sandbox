// Closure
var aClosure = (function () {
  var _counter = 0;
  return function () {
    _counter += 1;
    console.log('A private variable ' + _counter);
    return _counter;
  }
})();

aClosure();
aClosure();
aClosure();
