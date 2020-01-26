import React from 'react';
import classes from './ActivitiesSection.module.css';
import Swiper from 'react-id-swiper';
import ActivityCard from '../ActivityCard/ActivityCard';
import eventData from '../../../data/Events.json'

const ActivitySection = (props) => {


    const params = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        }
    }

    return (
        <div className={classes.Container}>
            <Swiper {...params}>
                {eventData.map((item) => {
                    
                    return (
                        <div className={classes.cardContainer}><ActivityCard img={item.image} title={item.title} maintxt={item.maintxt} /></div>
                    );
                })}

            </Swiper>

        </div>
    );

}



export default ActivitySection;