function arrayToList (array) {
  var list = {};
  if (array.length == 0)
    return null;
  list.value = array.shift();
  list.rest = arrayToList(array);
  return list;
};

function arrayToList2 (array) {
  var list = {};
  for (var i = array.length - 1; i >= 0; i--){
    var tempList = list;
    if (i < array.length -1)
      list = {value: array[i], rest: tempList};
    else {
      list = {value: array[i], rest: null}
      }
  }
  return list;
};

function listToArray (list) {
  var array = [];
  rest = list;
  while (rest != null) {
    array.push(rest.value);
    rest = rest.rest;
  }
  return array;
}

function prepend(elementToAdd, list) {
  return {value: elementToAdd,
          rest: list
         };
}

function nth(list, number) {
  var tempList = list;
  for (var i = 0; i < number; i++){
    if(tempList.rest == null)
      return undefined;
    tempList = tempList.rest;
  }
  return tempList.value;
}

function nth2(list, number) {
  var counter = number;
  for (var node = list; node; node = node.rest){
    if(counter == 0)
      return node.value;
    counter--;
  }
  return undefined;
}

function nthRecursive(list, number) {
    if (number == 0)
      return list.value;
    else {
      if (list.rest == null){
        return undefined;
      }
      else
        return nthRecursive(list.rest, number - 1);
    }
}


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: null
  }
}

console.log(list);
console.log(arrayToList([10, 20]));
console.log(arrayToList2([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(40, arrayToList2([10, 20])));
console.log(nthRecursive(arrayToList2([10, 20, 30]), 2));
console.log(nth2(arrayToList2([10, 20, 30]), 0));
