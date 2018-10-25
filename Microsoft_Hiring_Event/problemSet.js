//Problem Set.js
//1. Given an array of integers of size N. Assume ‘0’ as invalid number and all other as valid number. Write a program that modifies the array in such a way that if next number is  valid number and is same as current number, double the current number value and replace the next number with 0. After the modification, rearrange the array such that all 0’s are shifted to the end and the sequence of the valid number or new doubled number is maintained as in the original array.
let array = [2, 2, 0, 4, 0, 8]; //
//GFG(array)
function GFG(array){
    for(let i = 1 ; i < array.length -1;i++){
       let current = array[i-1];    //current
       let next    = array[i];      //next
         if(current == next){       //current  ==  next
             array[i-1] = current*2;//current*2 
             array[i] = 0;          //0
         }
    }
    console.log(array);             //array as log
    //shift 0 to end 
    let nonZeros    = [];          
    let zeros       = [];
    for(let i = 0 ; i < array.length ;i++){
        if(array[i] == 0){
            zeros.push(array[i])
        }else{
            nonZeros.push(array[i]);
        }
    }
    console.log([...nonZeros,...zeros]);
}
GFG(array); //Function Call

//2.Given a Binary Tree of size N, your task is to complete the function minLeafSum(), that should return the sum of all the leaf nodes that are at minimum level of the given binary tree.
//function takes a single argument as Input , the reference pointer to the root of the binary Tree

//Property of Binary Tree
//root,left,right nodes 
//Node Class
class Node{

    //constructor
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }


}

class TreeNode {

    constructor(){
        this.root = null;

    }
    //insert
    insert(val){
        let newNode = new Node(val);    //newNode
        //this.root == null
        if(this.root == null){
            this.root = newNode; //newNode
            return this; //return this;
        }else{
            let current =  this.root;
            while(true){
                if(val < current.val){
                    if(current.left == null){
                        current.left = new Node(val);
                        return this;
                    }else{
                        current = current.left;
                    }
                }else{
                    if(current.right == null){
                        current.right = new Node(val);
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }

    //Left Node at min Level
    minLevel(root,level = 0){

        this.minLevel


    }


}

let treeNode = new TreeNode();
treeNode.insert(1);
treeNode.insert(2);
treeNode.insert(3);
treeNode.insert(4);
treeNode.insert(5);
treeNode.insert(7);
treeNode.insert(2);
treeNode.insert(8);


console.log(treeNode);



//find the combination of the array

//[1,2,3]
//

//123
//132
//213
//231
//312
//321

function combination(array,n){

    let result = [];

    for(let i = 0; i <n;i++){

        let number = array[i]; //
        let subArray = array.splice(i,1); //remove element from the index

       result.push(...helper(number,subArray,[]));
    }

   


}

//helper
function helper(number,subArray,array){


    if(subArray.length == 0){
        return array;
    }

    //subArray
    for(let  i = 0 ; i < subArray.length; i++){

    }



}


function permutateWithoutRepetitions(permutationOptions) {
    if (permutationOptions.length === 1) {
      return [permutationOptions];
    }
    // Init permutations array.
    const permutations = [];
    // Get all permutations for permutationOptions excluding the first element.
    const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));
  
    // Insert first option into every possible position of every smaller permutation.
    const firstOption = permutationOptions[0];
  
    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
      const smallerPermutation = smallerPermutations[permIndex];
      // Insert first option into every possible position of smallerPermutation.
      for(let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
        const permutationPrefix = smallerPermutation.slice(0, positionIndex);   //permutationPrefix
        const permutationSuffix = smallerPermutation.slice(positionIndex);      //permutationSuffix
        permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));//firstOption, permutationSuffix
      }
    }
    return permutations;
}




  let permutationOptions = [1,2,3]
  console.log(permutateWithoutRepetitions(permutationOptions));
  //[ [ 1, 2, 3 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 1, 3, 2 ],[ 3, 1, 2 ],[ 3, 2, 1 ] ]