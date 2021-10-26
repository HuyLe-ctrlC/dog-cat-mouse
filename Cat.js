var Mouse = require("./Mouse");

function Cat() {
  this.stomach = [];
  this.dead = false;
}

Cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
  mouse.die();
};

Cat.prototype.die = function () {
  this.dead = true;
}

module.exports = Cat;

var mickey = new Mouse("mickey");
var tom = new Cat("tom");
tom.eat(mickey);
console.log(tom);
