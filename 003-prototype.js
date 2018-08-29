// Prototype
function Rectangle(x, y) {
  this._length = x;
  this._breadth = y;
}

Rectangle.prototype.getDimensions = function () {
  return { length : this._length, breadth : this._breadth };
};

Rectangle.prototype.setDimensions = function (len, bred) {
  this._length = len;
  this._breadth = bred;
};

var oRectangle1 = new Rectangle();
oRectangle1.setDimensions(20,10);

var oRectangle2 = new Rectangle();
oRectangle2.setDimensions(30,20);

oRectangle1.setDimensions(10,5);

var dimensions1 = oRectangle1.getDimensions();
console.log('length 1 : ' + dimensions1.length);
console.log('breadth 1 : ' + dimensions1.breadth);

var dimensions2 = oRectangle2.getDimensions();
console.log('length 2 : ' + dimensions2.length);
console.log('get access breadth 2 : ' + dimensions2.breadth);

//public access
console.log('direct access breadth 2 : ' + oRectangle2._breadth);
oRectangle2._breadth = 99;
console.log('direct set breadth 2 : ' + oRectangle2._breadth);
