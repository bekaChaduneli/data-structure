const LinkedList = require("./linkedList");
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.push(10);
queue.push(20);
queue.push(30);
console.log(queue.getSize());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
