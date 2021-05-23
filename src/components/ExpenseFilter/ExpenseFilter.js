import classes from './ExpenseFilter.module.css';
import React from 'react';

const ExpenseFilter = props => {

    const dropDownChangedHandler = (event) => {
        // console.log(event.target.value);
        props.onYearChange(event.target.value);
    };

    return (
        <div className={classes.expenseFilter}>
            <div className={classes.expenseFilter__control}>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={dropDownChangedHandler}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;