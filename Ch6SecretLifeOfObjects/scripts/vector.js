function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.plus = function(vector2){
    var resultX = vector2.x + this.x;
    var resultY = vector2.y + this.y;

    return new Vector(resultX, resultY);
  };

  this.minus = function(vector2){
    var resultX = - vector2.x + this.x;
    var resultY = - vector2.y + this.y;

    return new Vector(resultX, resultY);
  };

}
Object.defineProperty(Vector.prototype, "length", {
  get: function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1,2));
var a = new Vector(3, 4);
var b = new Vector(2, 3);
console.log(a.minus(b));
console.log(a.length);
