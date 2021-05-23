import React, { useState } from 'react';
import classes from './Expenses.module.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card/Card';
import ExpenseItems from './ExpenseItems/ExpenseItems';

const Expenses = props => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const yearChangedHandler = (changedYear) => {
        setFilteredYear(changedYear);
    };

    const filteredItems = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;    
    });

    return (
        <div>
            <Card className={classes.expenses}>
                <ExpenseFilter selectedYear={filteredYear} onYearChange={yearChangedHandler} />
                <ExpenseItems expenses={filteredItems} />
            </Card>
        </div>
    );
};

export default Expenses;