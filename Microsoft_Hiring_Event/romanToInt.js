var romanToInt = function(s) {
    //mapper
    var mapper = {
        I: 1, //1
        V: 5, //5
        X: 10,//10
        L: 50,//50
        C: 100,//100
        D: 500,//500
        M: 1000//1000
    }
    var sArr = s.toString().split(''); //sArr (String Arr)
    var prevItem = ''; //prevItem
    //Num
    var num = sArr.reduce((pre, item) => {
        console.log(pre);
        console.log(item);
        var addend = mapper[item];
    
        if(mapper[prevItem] < mapper[item]){
            addend = mapper[item] - mapper[prevItem] * 2
        }
        prevItem = item
        return pre + addend
    }, 0)
    return num
};

console.log(romanToInt('IV'))