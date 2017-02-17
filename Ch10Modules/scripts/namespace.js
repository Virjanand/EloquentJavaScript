var dayName = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return function(number) {
    return names[number];
  };
}();

console.log(dayName(3));

(function() {
  function square(x) {return x * x;}
  var hundred = 100;

  console.log(square(hundred));
})();

var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) {return names[number]; },
    number: function(name) {return names.indexOf(name);}
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };

})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday")));

function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));

var plusOne = new Function("n", "return n + 1;");
console.log(plusOne(4));

function require(name) {
  var code = new Function("exports", readFile(name));
  var exports = {};
  code(exports);
  return exports;
}

console.log(require("weekDay").name(1));
