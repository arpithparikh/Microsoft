// Sum of Distances in Tree
// N : Number of Nodes
// Edges: Arrays of Edges
var sumOfDistancesInTree = (N,edges)=>{
    // map
    let g = new Map();
    //setting i with the Empty Array
    for(let i = 0; i < N; i++){
        g.set(i,[]);
    }
    //Build Adjancey List or Map
    for(let i = 0; i < edges.length; i++){
        g.get(edges[i][0]).push(edges[i][1]); 
        g.get(edges[i][1]).push(edges[i][0]);
    }

    let dp = Array(N).fill(0); // fill(0)
    console.log(dp);
  
    let nodes = Array(N).fill(0); // fill(0)
    console.log(nodes);
    dfs(dp, nodes, g, 0, -1) // dfs (dp,nodes,g,0,-1)
    console.log(dp);
    console.log(nodes);
    let res = Array(N).fill(0); // res
    res[0] = dp[0]; // res
    dfs2(dp, nodes, g, 0, -1, res[0], res, N);// dfs2
    return res;  //res

}

// dfs(dp,nodes,g,start,father)
function dfs(dp, nodes, g, start, father) {
    nodes[start] = 1; //nodes[start] = 1
    let neis = g.get(start);
    for (let i = 0; i < neis.length; i++) {
        if (neis[i] == father) {
            continue;
            console.log("**");
        }
        dfs(dp, nodes, g, neis[i], start); // dfs(dp,nodes,neis[i],start)      
        nodes[start] += nodes[neis[i]]; // node[start]
        dp[start] += dp[neis[i]] + nodes[neis[i]] ;
        console.log(dp[start]);
    }
}

function dfs2(dp, nodes, g, start, father, len, res, N) {
    let neis = g.get(start);
    for (let i = 0; i < neis.length; i++) { 
        if (g.get(start)[i] == father) {
            continue;
        }
        let j = neis[i];
        res[j] = dp[j] + (len - dp[j] - nodes[j]) + (N - nodes[j]);
        dfs2(dp, nodes, g, j, start, res[j], res, N);
    }
}


// Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
console.log(sumOfDistancesInTree(6,[[0,1],[0,2],[2,3],[2,4],[2,5]]));

// Sum of Distances In Tree
// Map {
//     0 => [ 1, 2 ],
//     1 => [ 0 ],
//     2 => [ 0, 3, 4, 5 ],
//     3 => [ 2 ],
//     4 => [ 2 ],
//     5 => [ 2 ]
//     }


var sumOfDistancesInTree = (N,edges)=>{



}