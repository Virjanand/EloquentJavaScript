function range(start, end, step) {
  if (step == undefined)
    step = 1;
  var result = [];
  lengthResult = (end - start)/step;
  for (var i = 0; i <= lengthResult; i++)
    result[i] = start + step * i;
  return result;
}

console.log(range(0, 2));

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
    result += array[i];
  return result;
}

console.log(sum(range(1,10)));
