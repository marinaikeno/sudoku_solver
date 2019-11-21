const bodyParser = require('body-parser');
const solveSudoku = require('../services/solveService');
const generateEmptySudoku = require('../services/generateService');
const updateSudoku = require('../services/updateService');


module.exports = app => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.post('/sudoku/solve', async (req, res) => {
        let board = req.body.board;
        let cells = req.body.cells;

        board = await updateSudoku(cells, board);
        board = await solveSudoku(board);
        res.send(board);
    });

    app.get('/sudoku/empty', async (req, res) => {
        const board = await generateEmptySudoku();
        res.send(board);
    });
}