import React, { useState } from 'react';
import classes from './ExpenseItems.module.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card/Card';

const ExpenseItems = props => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const yearChangedHandler = (changedYear) => {
        setFilteredYear(changedYear);
    };

    const expenseItems = props.items.map(expenseitem => (
        <ExpenseItem
            key={expenseitem.id}
            title={expenseitem.title}
            amount={expenseitem.amount}
            date={expenseitem.date} />
    ));

    return (
        <div>
            <Card className={classes.expenses}>
                <ExpenseFilter selectedYear={filteredYear} onYearChange={yearChangedHandler} />
                {expenseItems}
            </Card>
        </div>
    );
};

export default ExpenseItems;