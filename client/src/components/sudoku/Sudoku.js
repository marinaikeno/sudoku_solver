import React, { Component } from 'react';
import { connect } from 'react-redux';
import { solveSudoku, emptySudoku } from '../../actions';
import SudokuForm from './SudokuForm';

class Sudoku extends Component {
    componentDidMount() {
        this.props.emptySudoku();
    }

    onSubmit = (formValues) => {
        this.props.solveSudoku(formValues);
    }

    render() {
        return (
            <div className="sudoku-grid">
                <SudokuForm 
                    sudoku={this.props.sudoku}
                    onSubmit={this.onSubmit}
                    onReset={this.props.emptySudoku}
                    solved={this.props.solved} />
            </div>
        );
    }
}

const mapStateToProps = ({ sudoku, solved }) => {
    return { sudoku, solved };
}

export default connect(
    mapStateToProps,
    { solveSudoku, emptySudoku })(Sudoku);