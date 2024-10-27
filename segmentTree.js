/*
&     Segment tree object (simple version)
*
*
*
*     Segment tree description:
*
*     Array [1, 2, ..., n]
*     Update arr[i] = O(logn)
*     Get sum/max/min/etc. from l to r = O(logn)
*/

const segmentTree = {
  arr : [],
  siz: 0,
  tree: [],
  buildlr: function(l, r, v){
    if(l==r){
      if(l < arr.length){
        this.tree[v] = arr[l];
      }else{
        this.tree[v] = 0;
      }
      return;
    }
    let m = Math.floor((l+r)/2);
    this.buildlr(l, m, 2*v+1);
    this.buildlr(m+1, r, 2*v+2);
    this.tree[v] = this.tree[2*v+1]+this.tree[2*v+2];
  },
  build: function (arrVal, n){
    this.arr = arrVal;
    this.siz = Math.pow(2, Math.ceil(Math.log2(n)));
    this.tree = new Array(2*this.siz-1);
    this.buildlr(0, this.siz-1, 0);
  },
  getSumlr: function(l, r, tl, tr, v){
    if(tr < l || tl > r){
      return 0;
    }
    if(tl >= l && tr <= r){
      return this.tree[v];
    }
    let m = Math.floor((tl+tr)/2);
    return this.getSumlr(l, r, tl, m, 2*v+1)+this.getSumlr(l, r, m+1, tr, 2*v+2);
  },
  getSum: function(l, r){
    l--;
    r--;
    return this.getSumlr(l, r, 0, this.siz-1, 0);
  },
  updatelr: function(idx, l, r, v, newValue){
    if(l==r){
      this.tree[v] = newValue;
      return;
    }
    let m = Math.floor((l+r)/2);
    if(idx <= m){
      this.updatelr(idx, l, m, 2*v+1, newValue);
    }else{
      this.updatelr(idx, m+1, r, 2*v+2, newValue);
    }
    this.tree[v] = this.tree[2*v+1]+this.tree[2*v+2];
  },
  update: function(idx, newValue){
    idx--;
    this.arr[idx] = newValue;
    this.updatelr(idx, 0, this.siz-1, 0, newValue);
  }
}

/*
*     segmentTree.build(arr, n) - create segment tree
*     for array arr of length of n. After this you can use
*     other operations
*
*     segmentTree.getsum(l, r) - get sum of elements of arr
*     from l to r (1 <= l <= r <= n)
*
*     segmentTree.update(idx, newValue) - arr[idx] = newValue.
*     1 <= idx <= n
*
*/

/* 
&     sample of use
*/ 

let n = 5;
let arr = [1, 2, 3, 4, 5]
segmentTree.build(arr, n);
console.log('array: ', arr);
console.log('sum l=1 r=3: ', segmentTree.getSum(1, 3));
console.log('sum l=3 r=5: ', segmentTree.getSum(3, 5));
console.log('sum l=3 r=3: ', segmentTree.getSum(3, 3));
console.log('sum l=1 r=5: ', segmentTree.getSum(1, 5));
console.log('update first elem = 5');
segmentTree.update(1, 5);
console.log('update second elem = -4');
segmentTree.update(2, -4);
console.log('update third elem = 7');
segmentTree.update(3, 7);
console.log('update fourth elem = 0');
segmentTree.update(4, 0);
console.log('update fifth elem = 2');
segmentTree.update(5, 2);
console.log('array after update: ', arr);
console.log('sum l=1 r=3: ', segmentTree.getSum(1, 3));
console.log('sum l=3 r=5: ', segmentTree.getSum(3, 5));
console.log('sum l=3 r=3: ', segmentTree.getSum(3, 3));
console.log('sum l=1 r=5: ', segmentTree.getSum(1, 5));