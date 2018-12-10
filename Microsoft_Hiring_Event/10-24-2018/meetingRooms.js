//meeting Rooms:
//Approach 1: Priority Queues
//Sort the given meetings by their start time
//Initialize a new min-heap and add the first meeting's ending time to the heap.
//We simply need to keep track of ending times as that tells us when a meeting room will get free.
//For every meeting room check if the minimum element of the heap 
//if the room is free, then we extract the topmost element and add it back with the ending time of the current 
//meeting we are processing 