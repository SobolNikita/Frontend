/*
&     binary search tree object (No balance)
*/

/*
TODO array item = [value, leftChild, rightChild, cnt]
*/

const binaryTree = {
  arr: [],
  cursor: 0,
  add: function(val){
    if(this.arr.length==0){
      this.arr[this.cursor++] = {
        value: val,
        left: undefined,
        right: undefined,
        cnt: 1
      }
      return;
    }
    let cur = 0;
    while(this.arr[cur].value !== val){
      if(this.arr[cur].value > val){
        if(this.arr[cur].left != undefined){
          cur = this.arr[cur].left;
        }else{
          break;
        }
      } else{
        if(this.arr[cur].right != undefined){
          cur = this.arr[cur].right;
        }else{
          break;
        }
      }
    }
    if(val === this.arr[cur].value){
      this.arr[cur].cnt++;
      return;
    }
    if(this.arr[cur].value > val){
      this.arr[cur].left = this.cursor;
      cur = this.cursor;
    } else{
      this.arr[cur].right = this.cursor;
      cur = this.cursor;
    }
    this.cursor++;
    this.arr[cur] = {
      value: val,
      left: undefined,
      right: undefined,
      cnt: 1
    }

  },
  count: function(val){
    let cur = 0;
    //console.log(cur)
    while(this.arr[cur]!==undefined && this.arr[cur].value!==val){
      if(this.arr[cur].value > val){
        cur = this.arr[cur].left;
      }else{
        cur = this.arr[cur].right;
      }
    }
    //console.log(this.arr[cur]!==undefined, cur, this.arr[cur])
    if(this.arr[cur]!==undefined && this.arr[cur].value===val){
      return this.arr[cur].cnt;
    }
    return 0;
  }
}

/*
*     binaryTree.add(val) - add value val to tree
*     
*     binaryTree.count(val) - count of elements with value of val
*/

/* 
&     sample of use
*/ 

binaryTree.add(5);
console.log(binaryTree.count(0)); //0
console.log(binaryTree.count(5)); //1
binaryTree.add(5);
console.log(binaryTree.count(5)); //2
binaryTree.add(-1);
binaryTree.add(5);
binaryTree.add(-8);
binaryTree.add(7);
console.log(binaryTree.count(1)); //0
console.log(binaryTree.count(5)); //3
console.log(binaryTree.count(-1));//1
console.log(binaryTree.count(-8));//1
console.log(binaryTree.count(7)); //1
binaryTree.add(-8);
console.log(binaryTree.count(-8));//2
console.log(binaryTree.count(0)); //0