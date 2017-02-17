function reverseArray(array) {
  var newArray = [];
  var counter = 0;
  for(var i = array.length - 1; i >= 0 ; i--){
    newArray[counter] = array[i];
    counter++;
  }
  return newArray;
}

function niceReverseArray(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++)
    newArray.unshift(array[i]);
  return newArray;
}

function reverseArrayInPlace(array){
  var temp;
  for(var i = 0; i < Math.floor(array.length/2); i++) {
    temp = array[i];
    array[i] = array[array.length -1 -i];
    array[array.length -1 -i] = temp;
  }
}

console.log(niceReverseArray(["A", "B", "C"]));
testArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(testArray);
console.log(testArray);
