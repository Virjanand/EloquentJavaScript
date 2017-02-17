var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
             "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
  {events: ["weekend", "cycling", "break",
              "peanuts", "beer"],
     squirrel: true}
];

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

var journal = [];

// function addEntry(events, didITurnIntoASquirrel) {
//   journal.push({
//     events: events,
//     squirrel: didITurnIntoASquirrel
//   });
// }

function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}

addEntry(["work", "touched tree", "pizza",
          "running", "television"],false);
addEntry(["work", "ice cream", "cauliflower",
           "lasagna", "touched tree", "brushed teeth"],false);
addEntry(["weekend", "cycling", "break",
            "peanuts", "beer"],true);

console.log(journal);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index +=2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));

var map = {}
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
      !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
