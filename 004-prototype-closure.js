// Prototype + Closure
function Circle(_diameter) {

  this.getDimensions = function () {
    return { diameter : _diameter };
  };

  this.setDimension = function (diam) {
    _diameter = diam;
  };

}

var oCircle1 = new Circle(40);
var dimensions3 = oCircle1.getDimensions();
console.log('get access diameter: '+dimensions3.diameter);
console.log('direct access diameter: '+oCircle1.diameter);
