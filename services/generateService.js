class Cell {
    constructor(row, col) {
        this.id = `${row}_${col}`;
        this.val = null;
        this.row = row;
        this.col = col;
        this.isSolved = false;
    }
}

module.exports = () => {
    let result = [];
    for (let i = 0; i < 9; i++) {
        let arr = [];
        for (let j = 0; j < 9; j++) {
            let cell = new Cell(i, j);
            arr.push(cell);
        }
        result.push(arr);
    }
    return result;
}