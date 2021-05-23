import classes from './Chart.module.css';
import React from 'react';
import ChartBar from './ChartBar/ChartBar';

const Chart = props => {

    const dataPointValues = props.points.map(dataPoint => {
        return dataPoint.value
    });
    
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={classes.chart}>
            {props.points.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />
            ))}
        </div>
    );
};

export default Chart;