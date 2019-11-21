module.exports = (sudoku) => {
    solveCell(0, 0, sudoku);
    return sudoku;
}

// function that checks placement returns true if it doesn't break board
function canPlaceValue(sudoku, row, col, val) {
    // checks if val can be placed in sudoku[row][col] without breaking the board

    // check if it satisfies the column (vertical)
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[i][col].val === val) {
            return false;
        }
    }

    // check if it satisfies the row
    for (let i = 0; i < sudoku[row].length; i++) {
        if (sudoku[row][i].val === val) {
            return false;
        }
    }

    // check if it satisfies the subgrid
    // subgrid is 3x3 grid
    // need to find its top left row and col 
    const gridSize = 3;
    const topLeftRow = Math.floor(row / gridSize) * gridSize;
    const topLeftCol = Math.floor(col / gridSize) * gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (sudoku[topLeftRow + i][topLeftCol + j].val === val) {
                return false;
            }
        }
    }

    return true;
}

// goes through each cell and backtracks each possible value until grid is filled and solved
function solveCell(row, col, sudoku) {
    // base case
    if (col === sudoku[row].length) {
        // if col reaches the end, proceed to the next row
        col = 0;
        row++;

        // if we've gone through every row, return true
        if (row === sudoku.length) return true;
    }

    // if the cell already has a value, skip
    if (sudoku[row][col].val) {
        return solveCell(row, col + 1, sudoku);
    }

    // if cell doesn't have value, proceed to testing possible values from 1-9
    for (let val = 1; val <= 9; val++) {
        if (canPlaceValue(sudoku, row, col, val)) { // checks if current val can be placed in the cell
            // if it meets condition, fill cell with val
            sudoku[row][col].val = val;
            sudoku[row][col].isSolved = true;
            // using recursion, checks if all the remaining cells meets the condition with this value placement
            // returns true if it does
            if (solveCell(row, col + 1, sudoku)) {
                return true;
            }
            // if val didn't end up meeting condition, set it back to null
            sudoku[row][col].val = null;

        }
    }

    return false;
}