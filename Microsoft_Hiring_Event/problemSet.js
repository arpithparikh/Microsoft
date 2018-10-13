//Problem Set.js
//1. Given an array of integers of size N. Assume ‘0’ as invalid number and all other as valid number. Write a program that modifies the array in such a way that if next number is  valid number and is same as current number, double the current number value and replace the next number with 0. After the modification, rearrange the array such that all 0’s are shifted to the end and the sequence of the valid number or new doubled number is maintained as in the original array.
let array = [2, 2, 0, 4, 0, 8]; //Array
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