const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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
      return this.rootOfTree = new Node(data);
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

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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