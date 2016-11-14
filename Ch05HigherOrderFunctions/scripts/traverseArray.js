var array = [1, 2, 3];
for (var i = 0; i < array.length; i++){
  var current = array[i];
  console.log(current);
}

function logEach(array) {
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

logEach(array);

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//forEach(["Wampeter", "Foma", "Granfalloon"], alert);

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number){
  sum += number;
});
console.log(sum);

numbers.forEach(function(number){
  sum += number;
});
console.log(sum);
