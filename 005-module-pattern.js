// The module pattern
var firstModule = require('./module/firstModule');
var firstModuleExtended = require('./module/extendedModule');

// one module, one functionality ex:
var Logger = (function(){
    var self = {};

    //private attribute
    var logger = new Array();

    //private method
    function displayLog(log){
        console.log(log.module + " : " + log.message);
    }
    //public methods
    self.log = function(moduleName, msg){
        var log = {module: moduleName, message: msg};
        displayLog(log);
        logger.push(log);
    };
    self.showAll = function(){
        for(var i = 0; i < logger.length; i++)
            displayLog(logger[i]);
    };

    return self;
})();

var OtherModule = (function(){
    var self = {};
    var isInitiate = 0;

    self.init = function(){
      isInitiate = 1
      otherPrivateMethod();
      OtherModule.Events.init();
    };

    function otherPrivateMethod(){
      Logger.log("OtherModule", "OtherModule is ready!");
    }

    return self;
})();

// under module
OtherModule.Events = (function(){
    var self = {};

    self.init = function(){
        OtherModule.isInitiate = 2;
        otherPrivateMethod();
    };

    function otherPrivateMethod(){
      Logger.log("OtherModule.Events", "OtherModule.Events is ready!");
    }

    return self;
})();

OtherModule.init();

// call external module
firstModule.init();

// call external extended module
firstModuleExtended.otherPublicMethod();
