// function overloading

function overloadMethod(object, name, fn){

  if(!object._overload){
    object._overload = {};
  }

  if(!object._overload[name]){
    object._overload[name] = {};
  }

  if(!object._overload[name][fn.length]){
    object._overload[name][fn.length] = fn;
  }

  object[name] = function() {
    if(this._overload[name][arguments.length]){
      return this._overload[name][arguments.length].apply(this, arguments);
    }
  };
}

function Developers(){
  overloadMethod(this, "find", function(){
    console.log('call without parameter');
  });

  overloadMethod(this, "find", function(first){
    console.log('overloadMethod call with one parameter');
    console.log(first);
  });
  overloadMethod(this, "find", function(first, last){
    console.log('overloadMethod call with two parameters');
    console.log(first);
    console.log(last);
  });
}

var developers = new Developers();
developers.find();
developers.find("Vincent");
developers.find("Vincent", "Leclerc");
