//merge Ranges
let meetings =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

console.log(mergeRanges(meetings));


function mergeRanges(meetings) {

    // sort by start times, slice will return a shallow copy of the array, not affecting original array
    var sortedMeetings = meetings.slice().sort(function(a, b) {
        return a.startTime > b.startTime ? 1 : -1;
    });

    // initialize mergedMeetings with the earliest meeting
    var mergedMeetings = [sortedMeetings[0]];

    for (var i = 1; i < sortedMeetings.length; i++) {

        var currentMeeting    = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // if the current and last meetings overlap, use the latest end time
        // objects, and arrays (which are objects) all are passed by reference. thus change will be recorded.
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

        // add the current meeting since it doesn't overlap
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
}


//find Pair (array has been given)
//sum given
function findPair(array,sum){
    let first = 0; //value at zero Index
    let last  =  array.length-1;

    while(first <= last){

        if(array[first] + array[last] == sum){
            return [array[first],array[last]]
        }

        if(array[first] + array[last] < sum){

            first++;

        }

        if(array[first] + array[last] > sum){
            last--;
        }

    }

    return -1;

}

let array = [1,2,4,4];
let sum = 3;

console.log(findPair(array,sum))