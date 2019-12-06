import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';

class SudokuForm extends Component {
    state = {
        highlightedRow: null,
        highlightedCol: null,
        hasError: false,
    };
    
    renderInput = ({ input, meta, row, col, isSolved, val }) => {
        let className = `cell ${(col + 1) % 3 === 0 && col < 6 ? "br " : ""}${(row + 1) % 3 === 0 && row < 6 ? "bb " : ""}${meta.active ? "current-cell " : ""}${this.state.highlightedRow === row || this.state.highlightedCol === col ? "highlighted-cell" : ""}`;
        if (!meta.active && this.state.highlightedRow === row && this.state.highlightedCol === col) {
            this.setState({ highlightedRow: null, highlightedCol: null });
        }

        if (val) {
            return (
                <input {...input} className={className} style={{color:`${isSolved ? "red" : "black"}`}} type="number" value={val} disabled />
            );
        } else {
            return (
                <input {...input} className={className} type="number" />
            );
        }
    }

    renderRow(arr, row) {
        return arr.map((cell, col) => {
            return (
                <td><Field name={cell.id} component={this.renderInput} {...cell} onFocus={() => { this.setState({ highlightedRow: row, highlightedCol: col }) }} /></td>
            );
        });
    }

    renderSudoku() {
        return this.props.sudoku.map((row, r) => {
            return (
                <tr>{this.renderRow(row, r)}</tr>
            );
        });
    }

    onSubmit = (formValues) => {
        if (!validate(formValues)) {
            window.alert("The puzzle you entered cannot have the same number in the same row, column or grid");
        } else {
            this.props.onSubmit(formValues);
        }
    }

    onReset = (e) => {
        e.preventDefault();
        this.props.onReset()
    }

    render() {
        return (    
            <form className="sudoku-form">
                <table className="sudoku">
                    <tbody>
                        {this.renderSudoku()}
                    </tbody>
                </table>
                <div className="sudoku-actions">
                    <div className="sudoku-buttons">
                        <input id="solve" type="submit" value="Solve" onClick={this.props.handleSubmit(this.onSubmit)} disabled={this.props.solved} />
                        <button id="solve" onClick={this.onReset}>Reset</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'sudoku'
    })(SudokuForm);