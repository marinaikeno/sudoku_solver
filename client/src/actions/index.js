import axios from 'axios';
import { reset } from 'redux-form';
import { SOLVE_SUDOKU, EMPTY_SUDOKU } from './types';

export const solveSudoku = formValues => async (dispatch, getState) => {
    let cells = [];
    const board = getState().sudoku;

    for (let key in formValues) {
        const row = Number(key[0]);
        const col = Number(key[2]);
        const val = Number(formValues[key]);

        const cell = {
            row,
            col,
            val
        };
        cells.push(cell);
    }

    const response = await axios.post('/sudoku/solve', { board, cells });

    dispatch({ type: SOLVE_SUDOKU, payload: response.data });
};

export const emptySudoku = () =>  async (dispatch) => {
    const response = await axios.get('/sudoku/empty');
    
    dispatch(reset("sudoku"));
    dispatch({ type: EMPTY_SUDOKU, payload: response.data });
}