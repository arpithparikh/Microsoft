//This is an LRU (least recently used) cache implementation in JavaScript.
//It’s very efficient and uses two data structures to manage the elements. A doubly-linked list and a map gives us the following:
//API:
//lru(limit)
//Initialize LRU cache with default limit being 10 items

//get(key)
//Retrieve a single entry from the cache

//set(key,value)
//change or add a new value in the cache
//we overwrite the entry if it already exist 

//remove(key)
//Remove a single entry from the cache 

//removeAll()
//Reset the entrie cache 
//Argument limt is optional to be reset 

//forEach(function(){})
//Traverse through the cache elements using a callback function
//Retruns args[node element , element number , cache instance ] for the callback function to use.


//toJSON()
//Returns a JSON representation of the cache 

//toString()
//Returns a String representation of the cache

//JAVASCRIPT
//lru
function lru(limit){
    this.size = 0 ;
    (typeof limit == "Number")?this.limit = limit:this.limit = 10;
    this.map ={};
    this.head = null;
    this.tail = null;
}

lru.prototype.lruNode = function(key,va)