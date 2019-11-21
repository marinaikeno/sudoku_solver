import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sudokuReducer from './sudokuReducer';
import solvedReducer from './solvedReducer';

export default combineReducers({
    form: formReducer,
    sudoku: sudokuReducer,
    solved: solvedReducer
});