// parent module == "namespace"
var Application = Application || {};

// child module
Application.FirstModule = (function(self){

  var isInitiate = 0;

  self.init = function(){
    isInitiate = 1
    otherPrivateMethod();
  };

  function otherPrivateMethod(){
    console.log("Application.FirstModule otherPrivateMethod");
  }

  return self;
})(Application.FirstModule || {});

module.exports = Application.FirstModule;
