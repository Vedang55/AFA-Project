import React from 'react';
import classes from './EventCard.module.css'

const EventCard = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.header}>
                <h2>{props.item.name}, <span>{props.item.date}</span></h2>
                <h3>Add event to calendar</h3>
            </div>

            <p>
                {props.item.place} <br />
                {props.item.description}
            </p>
        </div>
    );
}

export default EventCard;