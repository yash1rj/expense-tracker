import classes from './ExpenseForm.module.css';
import React, { useState } from 'react';

const ExpenseForm = props => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(newExpenseData);
        props.onSaveNewExpense(newExpenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.newExpense__controls}>
                <div className={classes.newExpense__control}>
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler}
                        value={enteredTitle} />
                </div>
                <div className={classes.newExpense__control}>
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}
                        value={enteredAmount} />
                </div>
                <div className={classes.newExpense__control}>
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2023-12-31" 
                        onChange={DateChangeHandler}
                        value={enteredDate} />
                </div>
            </div>
            <div className={classes.newExpense__actions}>
                <button type="button" onClick={props.clicked}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;