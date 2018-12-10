//Regular Expression (0 Debt)
//regular Expression

//regex Match :
//string: 
//Recursive Match
var isMatch = function(s, p) {

  console.log(s,p);

  //edge case
    if (p === '') return s === '';

    //if the first character and pattern pattern mataches or pattern is . and s is not empty 
    var matchFirst = function(s, p) {
      return p[0] === s[0] || (p[0] === '.' && s !== '');
    };

    //a*
    if(p[1] !== '*') {
        return matchFirst(s, p) && isMatch(s.slice(1), p.slice(1));
    }
      while (matchFirst(s, p)) {
        if (isMatch(s, p.slice(2))) {
          return true;
        }
        s = s.slice(1);
      }
      return isMatch(s, p.slice(2));
  };
console.log(isMatch("acbc","a*bc"))

//DP Solution
var isMatchDP = function(s, p) {
    var dp = [[]], i, j; //
    dp[0][0] = true;
    for(i = 0; i <= s.length; ++i){
      dp.push([]); //adding column to get access, since we can't define the boolean Array
      for(j = 1; j <= p.length; ++j){
        if(p[j-1] !== '*'){
          dp[i][j] = i > 0 && dp[i-1][j-1] && (s[i-1] === p[j-1] || p[j-1] === '.'); //if no * 
        } else {
          dp[i][j] = dp[i][j-2] || i > 0 && dp[i-1][j] && (s[i-1] === p[j-2] || p[j-2] === '.'); //if *
        }
      }
    }

    return dp[s.length][p.length] ? true : false;

}

//console.log(isMatchDP("abc","abc"));


