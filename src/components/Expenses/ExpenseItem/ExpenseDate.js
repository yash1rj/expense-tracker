import React from 'react';
import classes from "./ExpenseDate.module.css";

const ExpenseDate = props => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className={classes.expenseDate}>
            <div className={classes.expenseDate__month}>{month}</div>
            <div className={classes.expenseDate__year}>{year}</div>
            <div className={classes.expenseDate__day}>{day}</div>
        </div>
    );
};

export default ExpenseDate;