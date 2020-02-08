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

                    if (element['gs$cell'].row !== '1')
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
                setEvents(eventData.filter(function (element) {
                    return element !== undefined;
                }));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [events, setEvents] = useState([]);
    const [expand, setExpand] = useState(0);

    const toggleExpand = () => {
        setExpand((state) => {
            return !state;
        })
    }

    const eventCards = [];

    for (let i = 0; i < events.length && i < 2; i++){
        eventCards[i] =  <EventCard key={Math.random()} item={events[i]}/>
    }

    return (
        <div className={classes.eventCardContainer}>
            {eventCards}

            {
                events.map((item, index) => {
                    if (index > 1 && expand) {
                        return <EventCard key={Math.random()} item={item} />
                    }
                    else {
                        return undefined;
                    }
                })
            }

            {events.length > 2 ? <p onClick={toggleExpand} style={{ color: '#EC741D', cursor: 'pointer' }}>
               {!expand ? `Show ${events.length - 2} more` : 'Show Less'}
                </p> : undefined} 

        </div>
    );
}

export default EventSection;