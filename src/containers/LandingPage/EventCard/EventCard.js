import React from 'react';
import classes from './EventCard.module.css'

const EventCard = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.header}>
                <h2>Winter Solstice, <span>22 December 2019</span></h2>
                <h3>Add event to calendar</h3>
            </div>

            <p>
                At Panjim obeseravatory <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha
            </p>
        </div>
    );
}

export default EventCard;