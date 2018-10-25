//LRU Cache todo

//LRU Cache



//Implementtion using the HashTable and Doubly_LinkedList 
var LRUCache = (capacity)=>{
    this.capacity   = capacity;
    this._head      = null;
    this._tail      = null;
    this.hashTable  = {};
}

//get(key)
LRUCache.prototype.get = function(key){

    //Step1 : When the new hit happens , assign the "hit-node" as head of the Doubly LinkedList 
    //Step2 : return -1 if the key not found in the hashTable 
    
    if(this.hashTable[key]){
        const {value}       =  this.hashTable[key]; //value
        const {prev,next}   =  this.hashTable[key]; //prev,next
        //prev
        if(prev){
            prev.next = next;                       //prev.next = next;
        }
        //next
        if(next){
            next.prev = prev || next.prev;          //next.prev = prev
        }

        //tail == hashTable[key]
        if(this._tail == this._hashTable[key]){
                    
        }



    }
    
    return -1;




}

//put(key,value)
LRUCache.prototype.put = function(key,value){

    //Step1: Check hashTable has the value, assign the latest value to the key 
    //Step2: if the hashTable not have the key exist, assigg the object to 
    //Step3: if the head already exist , assign recent node as prev Node    
    //Step4: and set head.next  = this.head
    //Step5: if there is no tail exist in the node then update tail with recently hit / added node  
    //Step6: Update the Counter with increment of 1.
    //Step7: if the counter > capacity , remove the least used element from the hashTable and take the tail.prev as temp node and update the tail property of the Node.  

    //if the key is already exist in the hashTable , has with corresponding queue node as Value
    if(this.hashTable[key]){
        this.hashTable[key].value = value; //value
        this.get(key); //get the value from the Key
    }else{
        //assing the prev, and next, if the key and value pair not found in the HashTable 
        this.hashTable[key] = {key,value,prev:null,next:null};
        //if the head already exist in the doubly [LinkedList] then ....
        if(this._head){
            this._head.prev =   this.hashTable[key]; //head.prev
            this._head.next =   this._head; //_head.next to head
        }
        //update the this._head with most recently used key and value pair 
        this._head = this._hashTable[key];
        //if the tail already exist in the doubly [linkedList]
        if(!this._tail){
            this._tail =  this._hashTable[key]; //update tail
        }
        this._count +=  1; //increment counter by 1.
        //Lets Talk about the Capacity of the LRU 
        if(this._count > this.capacity){
            let potentiallyRemovedNode =  this._tail.key; //|| _tail.key ||\\
            let prevNodeToStore        = this._tail.prev; //prev Node 
            if(this._tail.prev){
                this._tail.prev.next                = null; //prev.next  =  null , so basiclly we're removing the Node as Next
                this._tail                          =  prevNodeToStore;//prev Node To Store
                this._hashTable[removedKey].prev    = null;
            }
            delete this.hashTable[potentiallyRemovedNode]; //removed Node
            this._count -=1; //count
        }
    }
}