import classes from './ExpenseItems.module.css';
import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItems = props => {
    if (props.expenses.length === 0) {
        return <h2 className={classes.expensesList__fallback}>No expenses found !</h2>
    }

    return <ul className={classes.expensesList}>
        {props.expenses.map(expenseitem => (
            <ExpenseItem
                key={expenseitem.id}
                title={expenseitem.title}
                amount={expenseitem.amount}
                date={expenseitem.date} />
        ))}
    </ul>
};

export default ExpenseItems;