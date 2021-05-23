import React from 'react';
import classes from "./Card.module.css";

const Card = props => {
    const joinedClasses = [classes.Card, props.className ]

    return <div className={joinedClasses.join(' ')}>{props.children}</div>
};

export default Card;