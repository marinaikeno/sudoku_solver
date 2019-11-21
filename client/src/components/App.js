import React from 'react';
import "./css/sudoku.css";
import Sudoku from './sudoku/Sudoku';

const App = () => {
  return (
    <div>
      <h1>Sudoku Solver</h1>
      <h2><a target="_blank" href="https://github.com/marinaikeno/sudoku_solver"><i className="fa fa-github" /></a></h2>
      <p>
        You're ready to give up on your sudoku?
      </p>
      <p>
        Just type in the puzzle and click solve!
      </p>

      <Sudoku />
    </div>
  );
}

export default App;
