var currentField;
var board = "";
var white = " ";
var black = "#";
var size = 8;
for (var i = 1; i <= size; i++) {
  for(var j = 1; j <= size; j++) {
    if ((i+j) % 2 == 0) {
      board += white;
    }
    else {
      board += black;
    }
  }
  board += "\n";
}
console.log(board);
