/*
&     queue object (FIFO)
*/

class Stack{
  constructor(){
    this.arr = [];
    this.cursor = 0;
  }
  push(val){
    this.arr[this.cursor] = val;
    this.cursor++;
  }
  pop(){
    if(this.curcor===0){
      return;
    }
    this.cursor--;
    return this.arr[this.cursor];
  }
  size(){
    return this.cursor;
  }
}

const queue = {
  head: new Stack(),
  tail: new Stack(),
  push: function(val){
    this.head.push(val);
  },
  pop: function(){
    if(this.head.size() + this.tail.size() === 0){
      return;
    }
    if(this.tail.size() != 0){
      return this.tail.pop();
    }else{
      while(this.head.size() != 0){
        this.tail.push(this.head.pop());
      }
      return this.tail.pop();
    }
  }
}

/*
*     queue.add(val) - add element with value of val to queue
*     
*     queue.pop() - get and delete first element from queue
!     return undefined if queue size == 0
*/

/* 
&     sample of use
*/ 

console.log(queue.pop());
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());
console.log(queue.pop());
queue.push(5);
queue.push(6);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());