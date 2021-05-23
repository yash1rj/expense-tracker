import classes from './NewExpense.module.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = props => {

    const [viewToggler, setViewToggler] = useState(false);

    const saveNewExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onGetNewExpense(expenseData);
    };

    const expandNewExpenseHandler = () => {
        setViewToggler(true);
    };
    
    const collapseNewExpenseHandler = () => {
        setViewToggler(false);
    };

    return (
        <div className={classes.newExpense}>
            {viewToggler 
                ? <ExpenseForm clicked={collapseNewExpenseHandler} onSaveNewExpense={saveNewExpenseHandler} /> 
                : <button onClick={expandNewExpenseHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpense;