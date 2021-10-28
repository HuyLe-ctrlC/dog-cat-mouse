//TODO Học hàm setTimeout và clearTimeout
//!----> setTimeout sẽ làm một hàm gì đó sau khoảng thời gian quy định
//*syntax setTimeout(fn, ms) // milliseconds
//?có thể tạo hàm ở ngoài rồi truyền vô
var done = function () {
  console.log("FINISH");
};
console.log("Start");
//!bên dưới là truyền thẳng hàm vào bên trong
// var timeoutId = setTimeout(function () {
//   console.log("Finish");
// }, 2000);
//!tạo hàm ở ngoài rồi truyền vô
var timeoutId = setTimeout(done, 2000);
// clearTimeout(timeoutId);//*xóa timeout
console.log("Just a minute");

var Dog = require("./Dog");
var Mouse = require("./Mouse");
var Cat = require("./Cat");

var cat = new Cat("TOM");
var mouse = new Mouse("JERRY");
var dog = new Dog();
cat.eat(mouse);

try {
  cat.eat(dog);
} catch (error) {
  console.log('ERROR when cat eat dog');
}

console.log(cat);
