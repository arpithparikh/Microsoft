//best Time to buy and sell the stocks in the same day 

let array  = [7,1,5,3,6,4];//array
//

//maxProfit 
function maxProfit(prices){

let maxProfit = 0; //maxProfit  
for(let i = 1;i < prices.length;i++){
    if(prices[i] > prices[i -1]){
        maxProfit += prices[i] - prices[i -1];
    }
}
return maxProfit;


}


//anagram , same number of characters in the both string , then both string are anagrams of each others.
//Input: s = "anagram", t = "nagaram"
//Output: true