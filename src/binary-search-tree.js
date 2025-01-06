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
    return this.find(data);
  }

  find(data) {
    let r = this.root();
    while(r) {
      if (r.data === data) {
        return r;
      }
      if (r.left !==null && data < r.data) {
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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};