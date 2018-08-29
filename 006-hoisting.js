// hoisting

//To avoid bugs, always declare all variables at the beginning of every scope.
var top = '1 : var on top';
console.log(top);

console.log('2 : function declaration');
var method = function(){
  top = '3 : implementation';

}

method();
console.log(top);
