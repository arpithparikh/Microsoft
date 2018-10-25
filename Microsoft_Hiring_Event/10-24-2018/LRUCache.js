//Least Recently Used Cache (LRU)
//Operations supported: Get and Put
//get(key)-  Get the value of the key  if the key exists in the cache, otherwise return -1
//put(key,value)- set or insert the value if the key is already not present ,when the cache reached its capacity , it should invalidate the least recently used item before inserting a new item.

//Discarding the least recently items first, keeping track of what was used when, which is expensive if one wants to make sure the algorithm always discards the least used item.
//Age Bits for cache lines and track the least Recently Used - cache line based on age bits

//gztchan
///gztchan
 //2
//Don't use native API, for example Object.keys(hashMap) to count keys
//Don't mass up HEAD and TAIL of the list
//Adopt DoubleLinkedList to get O(1)
//Store the key just for deleting the object :)
/**
 * @param {number} capacity
 */
//
var LRUCache = function(capacity) {
    this._capacity = capacity; //capacity [0-10000]
    this._head = null;         //head
    this._tail = null;         //tail
    this._hashTable = {};      //hashTable = {} 
};

/** 
 * @param {number} key
 * @return {number}
 */
//get
LRUCache.prototype.get = function(key) {
    //this._hashTable[key]
    if (this._hashTable[key]) {
        const { value }         = this._hashTable[key]; //value 
        const { prev, next }    = this._hashTable[key]; //prev,next
        if (prev) { prev.next = next; }                 //prev
        if (next) { next.prev = prev || next.prev; }    //next
        
        if (this._tail === this._hashTable[key]) {
            this._tail = prev || this._hashTable[key];  //tail
        }
        this._hashTable[key].prev = null;               //null
        if (this._head !== this._hashTable[key]) {
            this._hashTable[key].next   = this._head;   //head
            this._head.prev             = this._hashTable[key];//hashTable[key]
        }
        this._head = this._hashTable[key];//hashTable[key]
        return value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
//put(key,value)
LRUCache.prototype.put = function(key, value) {
      //this._hashTable[key]
    if(this._hashTable[key]) {
        this._hashTable[key].value = value; //value
        this.get(key);                      //get the Key
    }else{
        this._hashTable[key] = { key, value, prev: null, next: null }; 
        if(this._head) {
            this._head.prev = this._hashTable[key];
            this._hashTable[key].next = this._head;
        }
        this._head = this._hashTable[key];
        if (!this._tail) {
            this._tail = this._hashTable[key];
        }
        this._count += 1;
    }

    //count > capacity
    if(this._count > this._capacity) {
        let removedKey = this._tail.key;//removed Key
        //prev.tail
        if (this._tail.prev) {
            this._tail.prev.next = null;
            this._tail = this._tail.prev;
            this._hashTable[removedKey].prev = null;
        }
        delete this._hashTable[removedKey]; //delete the key from the hashTable
        this._count -= 1; //decrement the counter 
    }
};

//lru Cache  with the size of 10...
let lru = new LRUCache(10); 
lru.put(1,"Roger"); //1,"Roger"
lru.put(3,"Alpha"); //3,"Alpha"
lru.put(5,"Beta"); //5,"Beta"
lru.put(2,"Theta");//2,"Theta"
lru.put(9,"Gema"); //9 ,"Gema"
lru.put(9,"Gema"); //9 ,"Gema"

//0 never used ...
//3 recently Used here 

lru.get(9); 
lru.get(1);
lru.get(5);
lru.get(1);
lru.get(1);
lru.get(3); 
lru.get(9); 

console.log(lru);

