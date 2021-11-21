var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let len = this.stack1.length;
  for (let i = 0; i < len; i++) {
    let v = this.stack1.pop();
    this.stack2.push(v);
  }
  let first = this.stack2.pop();
  len = this.stack2.length;
  for (let i = 0; i < len; i++) {
    let v = this.stack2.pop();
    this.stack1.push(v);
  }
  return first;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let len = this.stack1.length;
  for (let i = 0; i < len; i++) {
    let v = this.stack1.pop();
    this.stack2.push(v);
  }
  let first = this.stack2[this.stack2.length - 1];
  len = this.stack2.length;
  for (let i = 0; i < len; i++) {
    let v = this.stack2.pop();
    this.stack1.push(v);
  }

  // you'd better use while loop.

  return first;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack1.length === 0) return true;
  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_3 = obj.peek();
var param_2 = obj.pop();
var param_4 = obj.empty();

console.log(param_3);
console.log(param_2);
console.log(param_4);
