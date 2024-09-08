function isValidSudoku(board: string[][]): boolean {
    for(let i = 0; i<9; i++){
        //validate collumns
        let vals = new Set<string>()
        for(let j =0; j< 9; j++){
            const cell = board[i][j]
            if(vals.has(cell) && cell!="."){
                return false
            }
            vals.add(cell)
        }
        
        //validate rows
        vals = new Set<string>()
        for(let j = 0; j<9; j++){
            const cell = board[j][i]
            if(vals.has(cell) && cell!="."){
                return false
            }
            vals.add(cell)
        }
    }

    for(let row =0; row<3;row++){
        for(let column = 0; column <3; column++){
            if(!valid3x3(board, row, column)){
                return false
            }
        }
    }

    return true
};

function valid3x3(board: string[][], row: number, column: number): boolean{
    let vals = new Set<string>()
    for(let i = row*3; i< 3*(row+1); i++){
        for(let j = column*3; j< 3*(column+1); j++){
            const cell = board[i][j]
            if(vals.has(cell) && cell !== "."){
                return false
            }
            vals.add(cell)
        }
    }
    return true
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))


console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]))
