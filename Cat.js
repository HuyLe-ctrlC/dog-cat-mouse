var Mouse = require("./Mouse");

function Cat() {
  this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
  mouse.die();
};

module.exports = Cat;

var mickey = new Mouse("mickey");
var tom = new Cat("tom");
tom.eat(mickey);
console.log(tom);
