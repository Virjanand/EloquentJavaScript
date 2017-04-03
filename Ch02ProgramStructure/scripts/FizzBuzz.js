for (var i = 1; i <= 100; i++) {

  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

for (var i = 1; i <= 100; i++) {

  var fizzbuzz = "";
  if (i % 3 == 0) {
    fizzbuzz += "Fizz";
  }
  if (i % 5 == 0) {
    fizzbuzz += "Buzz";
  }
  if (output = (fizzbuzz || i)) {
    console.log(output);
  }
  
}
