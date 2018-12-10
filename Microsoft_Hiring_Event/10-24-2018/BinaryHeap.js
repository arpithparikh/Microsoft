//Binary Heaps
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

//Step1: Find the index of the item and find the parent 
 //(index -1)/2

    //bubbleUp
    bubbleUp(){
        let idx = this.values.length - 1; //idx
        const element = this.values[idx]; //element
        //idx > 0
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2); //parentidx
            let parent = this.values[parentIdx];     //parent
            if(element <= parent) break;            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //Swap the first value in the values property with the last one.
    //Pop from the values property , so you can return the value at the end.
    //Have the new root "sink down" to the correct Spot.

    //Your Parent index start at 0(the root)
    //



    //extract Max
    extractMax(){
        const max       = this.values[0];   //max
        const end       = this.values.pop();//pop 
        this.values[0]  = end;              //end
        this.sinkDown();
        return max;                         //return max
    }

    sinkDown(){
        let idx = 0;
        const length =
    }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(5);
maxBinaryHeap.insert(15);
maxBinaryHeap.insert(25);
maxBinaryHeap.insert(45);
console.log(maxBinaryHeap.extractMax())

