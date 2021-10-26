var chalk = require('chalk');

function Dog(name) {
    this.name = name
  this.stomach = [];
}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
  cat.die();
};

Dog.prototype.sayHi = function () {
  console.log("Hi, I am dog. My name is " + chalk.red(this.name));
};

module.exports = Dog;

//TODO muốn merge một branch B đã hài lòng vào branch master (A)
/*
! A <-- B
*1. git checkout A (master)
*2. git merge B ()
*/

/*
?Để xóa một brach thì sử dụng cú pháp
? git branch -D <branch>
* ****************************************************************
? Để tạo một branch thì sử dụng cú pháp
? git branch -b <branch>
? ex: git branch -b feature/dog-class
*/
