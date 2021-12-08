// 배열 1개로 스택 3개를 만들어라?
let arr = [];

class Stack {
  constructor(size, numberOfStack = 3) {
    this.capacity = size;
    this.arr = Array.from(size * NumberOfStack, () => null);
    this.size = Array.from(numberOfStack, () => 0);
  }

  push(stackNum, val) {
    let curr = this.size[stackNum];
    if (curr < 10) {
      this.arr[stackNum][curr] = val;
    }
  }
  pop(stackNum) {}
  isEmpty(stackNum) {
    return this.size[stackNum];
  }
}
