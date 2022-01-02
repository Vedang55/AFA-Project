import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import classes from './EventsSection.module.css';
import ReactLoading from 'react-loading';



const EventSection = () => {
    let eventsEach = [];
    const [events, setEvents] = useState(eventsEach)
    const [expand, setExpand] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [showMore, setShowMore] = useState(3);


    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/values/Events?alt=json&key=${process.env.REACT_APP_GOOGLE_KEY}`)
            .then((response) => response.json())
            .then((responseJson) => {
                for (const property in responseJson.values) {
                    
                        
                        eventsEach.push({
                            name:responseJson.values[property][0],
                            date:responseJson.values[property][1],
                            location:responseJson.values[property][2],
                            description:responseJson.values[property][3],
                            link: responseJson.values[property][4] 
                        })
                 
                        
                    
                }
                
                
                  
                setLoaded(1);
            })
            .catch((error) => {
                console.log(error)
                setLoaded(-1);
            });
    }, []);



;



    useEffect(() => {
        if (expand) {
            setShowMore(events.length)
        }
        else{
            setShowMore(3)
        }
    }, [expand]);


    const toggleExpand = () => {
        setExpand((state) => {
            return !state;
        })
    }



    if (loaded === 1) {
        const eventCards = [];
        /*for (let i = 0; i < events.length && i < 2; i++) {
            eventCards[i] = <EventCard key={Math.random()} item={events[i]} />
        }*/

        return (
            <div className={classes.eventCardContainer} id={'scrollto'}>
                {eventCards}
                {events.slice(1, showMore).map((event)=>{
                    return(
                        <EventCard item={event}/>
                    )
                })}
                
                {events.length > 2 ? <p onClick={toggleExpand} className={classes.showMore}>
                    {!expand ? `Show ${events.length - 3} more` : 'Show Less'}
        </p> : undefined}

            </div>
        );
    }
    else if (loaded === 0) {
        return (
            <div className={classes.loadingCont}>
                <ReactLoading type={'bubbles'} height={100} width={100} color={'white'} />
            </div>
        )
    }

    else {
        return (
            <div className={classes.loadingCont}>
                <h4>Failed to load event data, please refresh page</h4>
            </div>
        )
    }
}

export default EventSection;