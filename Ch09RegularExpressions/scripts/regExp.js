var re1 = new RegExp("abc");
var re2 = /abc/;

var eighteenPlus = /eighteen\+/;

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

console.log("+");
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

console.log("?");
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

console.log("readable date-time");
var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));

console.log("cartoonCrying");
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boooohooooohoooo"));

console.log("Execute");
var match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

console.log("string match");
console.log("one two 100".match(/\d+/));

console.log("more matches");
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

console.log("Date time");
console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));

function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2])-1,
                  Number(match[1]));
}
console.log(findDate("30-1-2003"));

console.log("Limit matching");
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

console.log("Choice");
var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

console.log("Replace");
console.log("papa".replace("p", "m"));
console.log("Borubudur".replace(/[ou]/, "a"));
console.log("Borubudur".replace(/[ou]/g, "a"));

console.log("Switch first and last name");
console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
  .replace(/([\w]+), ([\w]+)/g, "$2 $1"));

var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str){
  return str.toUpperCase();
}));

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) //only one left, remove the 's'
    unit = unit.slice(0, unit.length -1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

console.log("Greed");
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g,"");
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10; // ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));

console.log("non greedy");
function stripComments2(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g,"");
}
console.log(stripComments2("1 /* a */+/* b */ 1"));

console.log("Dynamic regex");
var name = "harry";
var text = "Harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

var name2 = "dea+hl[]rd";
var text2 = "This dea+hl[]rd guy is super annoying.";
var escaped = name2.replace(/[^\w\s]/g, "\\$&");
var regexp2 = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text2.replace(regexp2, "_$1_"));

console.log("Search");

console.log("  word".search(/\S/));
console.log("     ".search(/\S/));

console.log("lastIndex");
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex);

var digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));
console.log("Banana".match(/an/g));

console.log("Looping over matches");
var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
