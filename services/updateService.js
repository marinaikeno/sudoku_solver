module.exports = (cells, board) => {
    cells.forEach(cell => {
        const row = cell.row;
        const col = cell.col;
        const val = cell.val;

        board[row][col].val = val;
    });

    return board;
}