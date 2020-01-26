import React from 'react';
import EventCard from '../EventCard/EventCard';
import classes from './EventsSection.module.css';

const EventSection = () => {
    return (
        <div className={classes.eventCardContainer}>
            <EventCard />
            <EventCard />
        </div>
    );
}

export default EventSection;