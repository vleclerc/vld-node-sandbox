// currying

//base function
function sum1(x, y, z) {
  return x + y + z;
}
console.log('classic function:');
console.log(sum1(1, 2, 3));

//currying function :
function sum2(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
console.log('currying function:');
console.log(sum2(1)(2)(3));


// accumulator :
function _sum3(x, y, z) {
  return x + y + z;
}
function sum3(x) {
  return (y) => {
    return (z) => {
      return _sum3(x, y, z);
    };
  };
}
console.log('accumulator:');
console.log(sum3(1)(2)(3));

// wrapper :
function curry(fn) {
  return (x) => {
    return (y) => {
      return (z) => {
        return fn(x, y, z);
      };
    };
  };
}
const sum4 = curry((x, y, z) => {
  return x + y + z;
});
console.log('wrapper:');
console.log(sum4(1)(2)(3));

/*
todo : read there articles
https://hackernoon.com/currying-in-js-d9ddc64f162e
https://codeburst.io/currying-in-javascript-ba51eb9778dc
*/
