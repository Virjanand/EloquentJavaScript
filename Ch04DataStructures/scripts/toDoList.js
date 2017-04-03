var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}

function whatIsNext(){
  return todoList.shift();
}

function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

rememberTo("eat");
console.log(todoList)

console.log(whatIsNext());
console.log(todoList);
rememberTo("eat");
rememberTo("brush teeth");
urgentlyRememberTo("call dentist");
console.log(todoList);
console.log(whatIsNext());
