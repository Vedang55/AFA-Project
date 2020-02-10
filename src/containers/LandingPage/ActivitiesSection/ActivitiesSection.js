import React from 'react';
import classes from './ActivitiesSection.module.css';
import Swiper from 'react-id-swiper';
import ActivityCard from '../ActivityCard/ActivityCard';
import eventData from '../../../data/Activities.json'
import './activity.css'

const ActivitySection = (props) => {

    const params = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },

    }


    return (
        <div className={classes.Container}>
            <Swiper {...params}>
                {eventData.map((item) => {

                    return (
                        <div key={Math.random()} className={classes.cardContainer}><ActivityCard img={item.image} title={item.title} maintxt={item.maintxt} /></div>
                    );
                })}

            </Swiper>

        </div>
    );

}



export default ActivitySection;