var MinStack = function () {
  this.val = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.val.length === 0) this.val.push([val, val]);
  else {
    let min = this.val[this.val.length - 1][1];
    if (min > val) this.val.push([val, val]);
    else this.val.push([val, min]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.val.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.val[this.val.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.val[this.val.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
