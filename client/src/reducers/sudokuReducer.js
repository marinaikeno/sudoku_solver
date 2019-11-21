import { SOLVE_SUDOKU, EMPTY_SUDOKU } from './../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SOLVE_SUDOKU:
            return [...action.payload];
        case EMPTY_SUDOKU:
            return [...action.payload];
        default:
            return state; 
    }
}