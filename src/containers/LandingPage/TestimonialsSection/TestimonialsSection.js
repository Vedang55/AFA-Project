import React from 'react'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard'
import Data from '../../../data/testimonials'
import classes from './TestimonialsSection.module.css'
import Swiper from 'react-id-swiper';

const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
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

const TestimonialsSection = () => {
    return (
        <div className={classes.Container}>
            <Swiper {...params}>
                {Data.map((item) => {

                    return (
                        <div key={Math.random()}><TestimonialsCard text={item.text} by={item.by} date={item.date} place={item.place}/></div>
                    );
                })}

            </Swiper>

        </div>
    );
}

export default TestimonialsSection;