//check Binray Tree is BST or Not
//Node Class
class Node{
    //constructor with Value
    constructor(value){
        this.val = value;
        this.left   = null;
        this.right  = null;
    }

}

class BST{

    constructor(){
        this.root = null;
    }

    insert(val){

        let newNode =  new Node(val);

        if(this.root == null){
            this.root = newNode
            return this;
        }else{
            let current  =  this.root;
            while(current){
                if(current.val > val){
                    //check if there is left node exist
                    if(!current.left){
                        current.left = newNode
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(current.val < val){
                    if(!current.right){
                        current.right = newNode
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }

    validBST(){
        
    }

}

let bst = new BST();
bst.insert(5);
bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(25);

console.log(bst);