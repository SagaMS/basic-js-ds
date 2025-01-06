const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootOfTree = null; 
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {
    if(!this.rootOfTree){
      this.rootOfTree = new Node(data);
      return; 
    }else{
      let newNode = new Node(data)
      let r = this.root()
      while(r){
        if(r.data > data){
          if(!r.left){
             r.left = newNode;
             return
          }
          r = r.left
        }
        if(r.data < data){
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
    let mainR = this.root();
    while (mainR) {
      if (data === mainR.data){
         return mainR;
        }
      if(data < mainR.data){
        mainR = mainR.left;
      }else{
        mainR = mainR.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootOfTree) {
      return;
    }

    let node = this.rootOfTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }



  max() {
    if (!this.rootOfTree) {
      return;
    }

    let node = this.rootOfTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }


  
}

module.exports = {
  BinarySearchTree
};