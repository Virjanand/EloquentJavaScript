/*function canYouSpotTheProblem() {
  //"use strict"
  for(counter = 0; counter < 10; counter++)
    console.log("Happy happy");
}

canYouSpotTheProblem();

"use strict"
function Person(name) {this.name = name;}
var ferdinand = new Person("Ferdinand");
console.log(name);
console.log(ferdinand);
*/
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector (this.x + other.x, this.y + other.y);
}

function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);

  if (p1.x !== 10) return "fail: x property";
  if (p1.y != 20) return "fail: y property";
  if (p2.x != -10) return "fail: negative x property";
  if (p3.x != 0) return "fail: x from plus";
  if (p3.y != 25) return "fail: y from plus";
  return "everything ok";
}
console.log(testVector());

function numberToString(n, base){
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    console.log(n);
    result = String(n % base) + result;
    n = Math.floor(n / base);
  }while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));

function promptNumber(question){
  var result = Number(prompt(question, ""));
  if (isNaN(result)) return null;
  else return result;
}
console.log(promptNumber("How many trees do you see?"));

function promptDirection(question){
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

function look() {
  if(promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong:" + error);
}

var context = null;
/*
function withContext(newContext, body){
  var oldContext = context;
  context = newContext;
  var result = body();
  context = oldContext;
  return result;
}
*/
function withContext(newContext, body){
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

try {
  withContext(5, function(){
    if (context < 10)
      throw new Error("Not enough context!");
  });
} catch(e) {
  console.log("Ignoring: " + e);
}
console.log(context);

/*for (;;) {
  try {
    var dir = promtDirection("Where?"); // <- typo!
    console.log("You chose", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
*/

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

for (;;) {
  try {
    var dir = promtDirection("Where?"); // <- typo!
    console.log("You chose", dir);
    break;
  } catch (e) {
    if(e instanceOf InputError)
      console.log("Not a valid direction. Try again.");
    else
      throw e;
  }
}

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length -1];
}
