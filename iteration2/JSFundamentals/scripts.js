//Use this file to implement Part One of your project


//console.log("animal");

var animal = {};

animal.username = "dog";
animal["tagline"] = "bark";

var noises = [];



var animal2 = {
  'username' : "dino",
  'tagline' : "rawr",
  'noises' : []
};

var counter = 0;
for (var key in animal2) {
  if (key === 'username') {
    //console.log("hi my name is " + animal2[key]);
  } else if (key === 'tagline') {
    //console.log("i like to say " + animal2[key]);
  }
  counter++;
}
//console.log(counter);


//ARRAYS
var noiseArray = ["meow", "bark", "woof", "baaaaaah"];
noiseArray.unshift("tweet");
noiseArray.push("glub");
noiseArray[0] = "switcharoo";
noiseArray[6] = "end add bracket";

animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = {
  username : 'Daffyduck',
  tagline : 'Yippieee',
  noises : ['qucack', 'honk', 'sneeze', 'growl']
};

var lolers = {
  username : 'lol',
  tagline : 'laugh out loud',
  noises : ['lel', 'kek', 'l0l', 'hah']
};
var stevie = {
  username : 'mentor',
  tagline : 'im bulking',
  noises : ['bench', 'squat', 'deadlift', 'ohp']
};
animals[animals.length] = quackers;
//console.log(animals.length);
animals.unshift(lolers);
animals.push(stevie);
//console.log(animals);


//FUNCTIONS
var AnimalTestUser = function(username) {
  var object = {};
  //var argsArray = Array.prototype.slice.call(arguments, 0);
  object.username = username;
  if (arguments.length > 1) {
    //delete argsArray['0'];
    //argsArray.shift()
    object.otherArgs = Array.prototype.slice.call(arguments, 1);

  }
  //object.otherArgs = argsArray;
  //console.log(arguments);
  return object;
}

var testSheep = AnimalTestUser('Cottonball');
//console.log(testSheep);

var testSheep1 = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep1); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }


var AnimalCreator = function(username, species, tagline, noises) {
  var animalobject = {
    "username" : username,
    "species" : species,
    "tagline" : tagline,
    "noises" : noises,
    "friends" : []
  }
  return animalobject;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
var cow = AnimalCreator('Betsy', 'cow', 'You cant milk those', ['moo', 'mooo', 'eungeh']);
var chicken = AnimalCreator('Rooster', 'chicken', 'im a big chicken', ['caw', 'cockadoodledoo', 'kokkio']);

var addFriend = function(original, friend) {
  original.friends.push(friend.username);
}


var myFarm = [sheep, cow, chicken];

addFriend(sheep,cow);
addFriend(cow, chicken);
addFriend(chicken, cow);

var addMatchesArray = function(farm) {
  for (var i = 0; i< farm.length; i++) {
    farm[i].matches = [];
  }
}

var giveMatches = function(farm) {
  for (var i = 0; i<farm.length; i++) {
    farm[i].matches.push(farm[i].friends[0]);
  }
}



//NESTED
var friends = [];

friends.push(animals[0].username);
friends.push(animals[1].username);

var relationships = {};
relationships.friends = friends;
console.log(relationships.friends.length);
var matches = [];
relationships.matches = matches;
relationships.matches.push(relationships.friends[0]);

for (var i =0; i < animals.length; i++) {
  animals[i].relationships = relationships;
}

var add = function () {
  var sum = 0;
  for (var i =0; i< arguments.length; i++) {
    sum += arguments[i];
  }
  alert("sum is " + sum);
  return sum;
}

console.log(add(3,4,5));








// OR var AnimalMaker = function(name) {}
function AnimalMaker(name) {
  return {
    speak: function () {
      console.log("my name is ", name);
    },
    name: name
  };
}

var AnimalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];


for (var name in AnimalNames){
  farm.push(AnimalMaker(AnimalNames[name]));
  farm[name].speak();

}
