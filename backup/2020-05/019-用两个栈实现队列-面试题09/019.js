var CQueue = function () {
  this.inStacks = [];
  this.outStacks = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStacks.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.outStacks.length) {
    return this.outStacks.pop();
  } else {
    while (this.inStacks.length) {
      this.outStacks.push(this.inStacks.pop());
    }
    return this.outStacks.pop() || -1;
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
