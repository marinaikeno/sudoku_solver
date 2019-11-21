import { SOLVE_SUDOKU, EMPTY_SUDOKU } from './../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case SOLVE_SUDOKU:
            return true;
        case EMPTY_SUDOKU:
            return false;
        default:
            return state;
    }
}