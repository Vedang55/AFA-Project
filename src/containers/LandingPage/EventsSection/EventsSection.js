import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import classes from './EventsSection.module.css';



const EventSection = () => {
    useEffect(() => {
        fetch('https://spreadsheets.google.com/feeds/cells/1BjWScaREAAHatoXOUX-07843THquWzqny4WX3uPAkzk/1/public/full?alt=json')
            .then((response) => response.json())
            .then((responseJson) => {
                const eventData = [];
                const entry = responseJson.feed.entry;
                entry.forEach(element => {
                    if (eventData[element['gs$cell'].row] === undefined && element['gs$cell'].row !== '1') {
                        eventData[element['gs$cell'].row] = {};
                    }

                    if(element['gs$cell'].row !== '1')
                    switch (element['gs$cell'].col) {
                        case '1':
                            eventData[element['gs$cell'].row].name = element.content['$t'];
                            break;
                        case '2':
                            eventData[element['gs$cell'].row].date = element.content['$t'];
                            break
                        case '3':
                            eventData[element['gs$cell'].row].location = element.content['$t']
                            break
                        case '4':
                            eventData[element['gs$cell'].row].description = element.content['$t']
                            break
                    }
                });
                setEvents(eventData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [events, setEvents] = useState([]);

    return (
        <div className={classes.eventCardContainer}>
            {
                events.map((item) => {
                    return <EventCard key={Math.random()} item={item} />
                })
            }
        </div>
    );
}

export default EventSection;