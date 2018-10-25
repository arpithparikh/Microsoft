//Graph
class Graph{

    //constructor
    constructor(){
        this.adjacencyList  = {};//adjacencyList
    }

    //add Vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    //add Edges
    addEdges(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    //remove Edges
    removeEdges(v1  ,v2){
        this.adjacencyList[v1] =  this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] =  this.adjacencyList[v2].filter(v=>v!==v1);
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdges("Tokyo","Dallas");
graph.addEdges("Tokyo","Aspen");
graph.removeEdges("Tokyo","Aspen");
console.log(graph);
