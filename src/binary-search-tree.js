const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if(this.rootOfTree){
      return this.rootOfTree;
    }else{
      return null;
    }
  }

  add(data) {
    if(!this.rootOfTree){
      this.rootOfTree = new Node(data);
      return; 
    }else{
      let r = this.root()
      while(r){
        if(r.data < data){
          if(!r.left){
             r.left = new Node(data);
             return
          }
          r = r.left
        }
        if(r.data > data){
          if(!r.right){
            r.right = new Node(data);
            return 
          }
          r = r.right;
        }
        if(r.data === data){
          return
        }
      }
    }



  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let r = this.root();
    while(r) {
      if (r.data === data) {
        return r;
      }
      if (r.left !== null && data < r.data) {
        r = r.left;
      } else {
        r = r.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let first = this.root()
    if(!first){
      return null;
    }
    
    while(first.left){
      first = first.left;
    }
    return first.data;
  }



  max() {
    let first = this.root()
    if(!first){
      return null;
    }
    
    while(first.right){
      first = first.right
    }
    return first.data;
  }

  
}

module.exports = {
  BinarySearchTree
};