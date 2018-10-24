var islandPerimeter = function(grid) {
    var perimeter = 0;
    if(!grid.length){
        return perimeter;
    }
    
    function getPerim(row, col){
        let perimToReturn = 0;
        //Check all four sides

        //Top
        if(!(grid[row - 1] && grid[row - 1][col])){
            perimToReturn++;
        }
        
        //Bottom
        if(!(grid[row + 1] && grid[row + 1][col])){
            perimToReturn++;
        }
        
        //Left
        if(!grid[row][col - 1]){
            perimToReturn++;
        }
        
        //Right
        if(!grid[row][col + 1]){
            perimToReturn++;
        }
        
        return perimToReturn;
    }
    
    var numRows = grid.length;
    var numColumns = grid[0] && grid[0].length;
    for(let row = 0; row<numRows; row++){
        for(let col = 0; col <numColumns; col++){    
            if(grid[row][col]){
                perimeter+=getPerim(row,col); //getPerim(row,col)
            }
        }
    }
    
    return perimeter;
};
console.log("here");
let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
console.log(islandPerimeter(grid))