const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newElement = new ListNode(value);
    if(!this.head){
        this.head = newElement; 
    }else{
        if(this.head && !this.tail){
            this.head.next = newElement ;
            this.tail = this.head.next;
            //это ховст он не на что не ссылается. как бы за ним никого нет
        }else{
            this.tail.next = newElement;
            this.tail = this.tail.next;

        }
    }
  }

  dequeue() {
    if(this.head ===null && this.tail ===null){
      return null
      //значит это пустая очередь
  }else if(this.tail ===null){
      let value = this.head.value;
      this.head = null
      return value;
  }else{
      const tempValue = this.head.value;
      this.head = this.head.next
      if(this.head === this.tail){
          //осталася один эелемент
          this.tail = null;
      }
      return tempValue;
  }
  }
}

module.exports = {
  Queue
};
