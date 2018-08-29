// call
console.log('call method :');

var member = {
    type: 'member',
    name: 'Vince',
    whatIsYourName: function() {
      console.log(this.type+' name : '+this.name);
    }
};

member.whatIsYourName();

var client = {
  type: 'client',
  name: 'Vincent Leclerc'
};

member.whatIsYourName.call(client);

// apply
var member = {
    type: 'member',
    name: 'Vince',
    whatIsYourName: function() {
      console.log(this.type+' name : '+this.name);
    }
};

member.whatIsYourName();

var client = {
  type: 'client',
  name: 'Vincent Leclerc'
};

member.whatIsYourName.call(client);

var fr = {
     greet: 'Bonjour',
     greetUser: function(userName) {
     console.log(this.greet + ' ' + userName+'!');
     }
};

var en = {
     greet: 'Hello'
};

console.log('call method with parameter:');
fr.greetUser.call(en,"Vince");
console.log('apply with array parameter:');
fr.greetUser.apply(en,["Vince"]);
console.log('call method with parameter:');
fr.greetUser.call(fr,"Vincent");
console.log('apply with array parameter:');
fr.greetUser.apply(fr,["Vincent"]);


// bind
console.log('bind method:');
var user = {
     greet: "Hello!",
     greetUser: function(userName) {
     console.log(this.greet + " " + userName);
     }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("Vincent");
greetBonjour("Vincent");
