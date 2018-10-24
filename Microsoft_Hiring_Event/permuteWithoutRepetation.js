/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */


 //we need to get all permutation except the first Element 
//Permutate Without Repetitions
function permutateWithoutRepetitions(permutationOptions) {

    //length === 1
    if (permutationOptions.length === 1) {
      return [permutationOptions]; //permutation Options
    }
  
    //Init permutations array.
    const permutations = [];
  
    //Get all permutations for permutationOptions excluding the first element.
    const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));
  
    //Insert first option into every possible position of every smaller permutation.
    const firstOption = permutationOptions[0];
    //console.log(firstOption);
  
    //parmIndex=0,smallerPermutations.length,permIndex++
    for(let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
      const smallerPermutation = smallerPermutations[permIndex];    //smallerPermutation
  
      // Insert first option into every possible position of smallerPermutation.
      for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
        const permutationPrefix = smallerPermutation.slice(0, positionIndex); //smaller Permutation with position Index
        console.log(permutationPrefix);
        console.log("*****")
        const permutationSuffix = smallerPermutation.slice(positionIndex);//smaller Permutation with position Index
        console.log(permutationSuffix);
        permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
      }
    }
  
    return permutations;
  }

console.log(permutateWithoutRepetitions([1,2,3]));


