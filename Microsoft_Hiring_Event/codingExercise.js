//SIL-Push Excercise
//push
//function should take in a value and add a node to the end of the SinglyLinkedList
class Node{
    constructor(val){
        this.val    = val;
        this.next   = null;
    }

}
//Singly LinkedList
class SinglyLinkedList{
    //constructor
    constructor(){
        this.head   = null;//head == null
        this.tail   = null;//tail == null
        this.length = 0;
    }
    //push(val)
    push(val){
        let newNode=  new Node(val);
        //if there is no Head Property on the list, set the head and tail to be the newly created Node.
        //otherwise 
        if(!this.head){
            this.head = newNode;
            this.tail  = this.head;
        }else{
            this.tail.next = this.head;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //pop
    pop(){
        //head == null
        if(this.head!=null){
            return  undefined;
        }
        let current     =   this.head; //remove the current
        let newTail     =   current;   //current 
        //keep moving until there is no current to move forward
        while(current.next){
            newTail     = current;      //newTail, this is always lagging behind
            current     = current.next; //moving the current forward
        }
        this.tail       = newTail; //newTail 
        this.tail.next  = null;    //null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;            //current 
    }
    //shift , if there are no nodes , return undefined
    //store the current head property in a variable
    //set the head property to be current head's next property
    //decrement the length by 1
    //return the value of the node removed.
    shift(){

        if(this.head == 0){
            return undefined;
        }
        var currentHead = ths.head;
        this.head       = currentHead.next;
        return this;
    }


}

let linkedList = new SinglyLinkedList();
linkedList.push(3);
linkedList.pop();
console.log(linkedList);