/*

&     stack object(LIFO)

*/


const stack = {
  arr: [],
  cursor: 0,
  pop: function(){
    if(this.curcor===0){
      return;
    }
    this.cursor--;
    return this.arr[this.cursor];
  },
  push: function(val){
    this.arr[this.cursor] = val;
    this.cursor++;
  }
}

/*
*     stack.pop() - get the top element in stack and delete it
!     return undefined if stack size == 0
*
*     stack.push(val) - push the value val in stack
*/

/* 
&     sample of use
*/

console.log(stack.pop());
stack.push(5);
stack.push(7);
stack.push(-8);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
stack.push(-1);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());