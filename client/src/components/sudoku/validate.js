export const  validate = (formValues) => {
    let cells = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    }
    for (let key in formValues) {
        const row = Number(key[0]);
        const col = Number(key[2]);
        const val = Number(formValues[key]);

        if (cells[val].length) {
            const gridSize = 3;
            const topLeftRow = Math.floor(row / gridSize) * gridSize;
            const topLeftCol = Math.floor(col / gridSize) * gridSize;

            for (const cell of cells[val]) {
                if (cell.row == row || cell.col == col) {
                    return false;
                }

                for (let i = 0; i < gridSize; i++) {
                    for (let j = 0; j < gridSize; j++) {
                        if (cell.row == topLeftRow + i && cell.col == topLeftCol + j) {
                            return false;
                        }
                    }
                }
            }
        }

        cells[val].push({ row, col });
    }
    
    return true;
}