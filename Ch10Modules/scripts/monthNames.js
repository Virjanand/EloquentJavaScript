console.log("MonthNames:");

(function (exports) {
  names = ["January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December"];
  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };

})(this.month = {});

console.log(month.name(2));

console.log(month.number("November"));
