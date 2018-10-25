//Tree
//Root- the top node in a tree.
//Child - A Node directly connected to another Node when moving away from the root.
//Parent-The converse notion of a child 
//Sibligs - A group of nodes from the same parent
//Leaf -A node with no children 
//Edge - The connection between one node and another.
//HTML DOM - Nested Elements (child and parent Relationship)
            //corespoding JS Object
//Network Routing - is the processs of selecting a path for the traffic in a network.
//Kind OF Trees
//Tree
//Binary Tree
//Binary Search Tree
//(left && right) 
//(value)
class Node{

    //constructor(value)
    constructor(value){
        this.value  = value; //value
        this.left   = null;  //left
        this.right  = null;  //right
    }


}


//Binary Search Tree
class BinarySearchTree{
    
    //constructor
    constructor(){
        this.root = null;
    }

    //insert
    insert(val){
        let newNode = new Node(val); //newNode 
        //this.root
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        //this.root
        while(true){
            if(val === current.val) return undefined;
            if(current.val > val){
            if(current.left == null ){
                    current.left = newNode;
                    return this;
            }else{
                current = current.left;
            }
        }else{
            if(current.right  == null){
                current.right = newNode;
                return this;
            }else{
                current = current.right;
            }
        }
        }
    }

    find(){

    }

    dfs(){

    }

    bfs(){

    }



}

let tree = new BinarySearchTree();

tree.insert(5);
tree.insert(2);
tree.insert(12);
tree.insert(10);
tree.insert(11);
tree.insert(14);
tree.insert(16);
console.log(tree);





