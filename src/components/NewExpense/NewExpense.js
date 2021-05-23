import classes from './NewExpense.module.css';
import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = props => {

    const saveNewExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onGetNewExpense(expenseData);
    };

    return (
        <div className={classes.newExpense}>
            <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
        </div>
    );
};

export default NewExpense;