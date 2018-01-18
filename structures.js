class Stack {
  constructor(string) {
    this.stack = string.split("");
  }
  push(el) {
    this.stack[this.stack.length] = el;
  }
  pop() {
    let result = this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    return result;
  }
  peek() {
    return this.stack[0];
  }
  empty() {
    return this.stack.length === 0;
  }
  length() {
    return this.stack.length;
  }
}

let x = new Stack("Hello");
console.log(x);
let y = x.length();
let z = "";
for (let i = 0; i < y; i++) {
  z += x.pop();
}
console.log(z);

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(el) {
    this.queue[this.queue.length] = el;
  }
  dequeue() {
    let result = this.queue[0];
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length = this.queue.length - 1;
    return result;
  }
  peek(num) {
    if (num === 0) {
      return this.queue[0];
    } else if (num === 1) {
      return this.queue[this.queue.length - 1];
    }
    return "not valid";
  }
  empty() {
    return this.queue.length === 0;
  }
}

let a = new Queue();
let c = "Hello";
for (let i = 0; i < c.length; i++) {
  a.enqueue(c[i]);
}
let b = "";
for (let i = 0; i < y; i++) {
  b += a.dequeue();
}
console.log(b);
