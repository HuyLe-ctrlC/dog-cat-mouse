function Dog() {
  this.stomach = [];
}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
  cat.die();
};

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

