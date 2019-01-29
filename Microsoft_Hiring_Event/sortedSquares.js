// var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


/* 
Your previous Plain Text content is preserved below:

Welcome to your interviewing.io interview.

Once you and your partner have joined, a voice call will start automatically.

Use the language dropdown near the top right to select the language you would like to use.

You can run code by hitting the 'Run' button near the top left.

Enjoy your interview!


Squares of a Sorted Array

input:  [-4,-1,0,3,10]
Output: [0,1,9,16,100]


'i' where min(input) = input[i]
lo <- i - 1
hi <- i
compare abs(input[lo]) VS abs(input[hi])

i <- (lo if abs(lo) > abs(hi)) : hi

input: [(negatives)...., 0, .....(positives)]
negatives: [-4, -1]
positives: [0, 3, 10]

 */


function sortedSquares(input) {
  let firstNonNegativeIndex = -1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      firstNonNegativeIndex = i;
      break;
    }
  }
  
  const output = new Array(input.length);
  
  // if firstNonNegativeIndex is <= 0
  // then either there are NO negatives, or there are ONLY negatives.
  if (firstNonNegativeIndex <= 0) {
    for (let i = 0; i < input.length; i++) {
      const value = input[i];
      const square = value * value;
      if (value < 0) {
        output[input.length - i - 1] = square;
      }
      else {
        output[i] = square;
      }
    }
  }
  else {
    // if firstNonNegativeIndex is > 0 then there are both negatives and positives
    // two pointers, which spread away from each other
    let insertIdx = 0;
    let hi = firstNonNegativeIndex;
    let lo = firstNonNegativeIndex - 1;
    while (lo > -1 || hi < input.length) {
      let loAbsVal = Number.MAX_SAFE_INTEGER;
      let hiAbsVal = Number.MAX_SAFE_INTEGER;
      
      if (lo > -1) {
        loAbsVal = Math.abs(input[lo]);
      }
      
      if (hi < input.length) {
        hiAbsVal = Math.abs(input[hi]);
      }
      
      let min;
      
      // Precedence does not make a difference here
      if (loAbsVal < hiAbsVal) {
        lo--;
        min = loAbsVal;
      }
      // If equal, hi will take precedence
      else {
        hi++;
        min = hiAbsVal;
      }
      
      output[insertIdx++] = min * min;
    }
  }
  
  return output;
}



// [2551113321]   [4 to 16]

// [255.111.33.21,255.111.3.321]
// [2.1.3.1]

// [255, 251, 221, ...]   // 3 digit (array?)

// [22, ...] // 2 digit

// [2,5,5,1,1,1,3,3,2,1] // 1 digit

console.log(sortedSquares([0, 1, 2, 3, 4, 5])); // [ 0, 1, 4, 9, 16, 25 ]
console.log(sortedSquares([-5, -4, -3, -2, -1])); // [ 1, 4, 9, 16, 25 ]
console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]


// new ArrayList<String>(100);
// new Array(100);
// array = new Array()











