function lru(limit){
    this.size = 0;
    (typeof limit == "number")?this.limit = limit:this.limit =10;
    this.map = {};
    this.head = null;
    this.tail = null;

}

lru.prototype.lrunode = function(key,value){
    if(typeof key!='undefined' && key!==null){
        this.key =key;
    }
    if(typeof value!='undefined' && value!==null){
        this.value = value;
    }
    this.prev = null;
    this.next = null;
}
//set Head
lru.prototype.setHead    = function(node){
    node.next  = this.head; //node.next
    node.prev = null; //node.prev
    if(this.head!==null){
        this.head.prev = node; //this.head.prev
    }

    this.head = node; //setting head as node
    if(this.tail == null){
        this.tail = node;
    }
    this.size++; //increment the size
    this.map[node.key] 
}