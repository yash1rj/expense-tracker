import React from 'react';
import classes from './ExpenseItems.module.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../Card/Card';

const ExpenseItems = props => {
    const expenseItems = props.items.map(expenseitem => (
        <ExpenseItem
          key={expenseitem.id}
          title={expenseitem.title}
          amount={expenseitem.amount}
          date={expenseitem.date} />
      ));

    return (
        <Card className={classes.expenses}>
            {expenseItems}
        </Card>
    );
};

export default ExpenseItems;