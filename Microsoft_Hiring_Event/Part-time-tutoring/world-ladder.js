const wordBreak = function (s, wordDict) {
    // DFS with cache
    // cache[i] stores all break results of s.subString(i)
    let cache = new Array(s.length + 1);
    cache[s.length] = [''];
    return breakHelper(s, 0, wordDict, cache);
};
function breakHelper(s, start, wordDict, cache) {
    let cachedResult = cache[start];
    if (cachedResult) {
        return cachedResult;
    }
    let result = [];
    for (let word of wordDict) {
        if (!s.startsWith(word, start)) {
            continue;
        }
        let subResult = breakHelper(s, start + word.length, wordDict, cache);
        for (let subR of subResult) {
            result.push(word + (subR.length > 0 ? ' ' : '') + subR);
        }
    }
    cache[start] = result;
    return result;
}

