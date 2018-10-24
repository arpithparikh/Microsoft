//Logger
var Logger = function() {
    this.messages   = {}; //message
    this.TIME_LIMIT = 10; //timeLimit
};

/**
 * Should Print Timestamp
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 * Should Print Message
 */
//should Print message (timestamp,message)
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    //this.messages.hasOwnProperty(message){}
    if ( !this.messages.hasOwnProperty(message) ) {
        // add to map & return true
        this.messages[message] = timestamp; //timestamp
        return true;                        //return true
    }
        
    if (this.messages.hasOwnProperty(message) && timestamp - this.messages[message] >= this.TIME_LIMIT) {
        // update map & return true
        this.messages[message] = timestamp; //update map and return true
        return true; //return true;
    }
    
    return false; //return false;
};


var a = new Logger();
// logging string "foo" at timestamp 1
console.log(a.shouldPrintMessage(1, "foo"))
console.log(a.shouldPrintMessage(20, "foo"))