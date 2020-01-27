import React from 'react';
import classes from './LocationCard.module.css'

const LocationCard = (props) => {
    return (
        <div className={classes.Container}>
            <h2>{props.data.place}</h2>
            <p>{props.data.timings}</p>
            <hr />
            <p>{props.data.details}</p>
            <span>Co-ordinator: {props.data.coordinator}</span>
            <span>Contact: {props.data.Contact}</span>
            <span className={classes.directionButton}>Get directions to observatory</span>
        </div>
    );
}

export default LocationCard;