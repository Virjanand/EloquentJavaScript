Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();

var map = {};
function storePhi(event, phi){
  map[event] = phi;
}

storePhi("Pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for (var name in map)
  console.log(name);
console.log("nonsense" in map);
console.log("toString" in map);

delete Object.prototype.nonsense;

Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});

for(var name in map){
  console.log(name);
}
console.log(map.hiddenNonsense);

console.log(map.hasOwnProperty("toString"));

for(var name in map){
  if(map.hasOwnProperty(name)){
    console.log(name);
  }
}

var map = Object.create(null);
map["pizza"]=0.069;
console.log("toString" in map);
console.log("pizza" in map);
