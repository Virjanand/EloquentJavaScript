function every(array, condition){
  for (i = 0; i < array.length; i++) {
    if (condition(array[i]) == false){
      return false;
    }
  }
  return true;
}

function some(array, condition){
  for (i = 0; i < array.length; i++) {
    if (condition(array[i]) == true){
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([1, 3, 4], isNaN));
