var fisrtModule = require('./firstModule.js');

// parent module == "namespace"
var Application = Application || {};

// child module extended
Application.ExtendedModule = (function(fisrtModule){

  // public method extended
  fisrtModule.otherPublicMethod = function(){
    console.log("Application.FirstModule otherPublicMethod extended");
  };

  return fisrtModule;
})(fisrtModule || {})

module.exports = Application.ExtendedModule;
