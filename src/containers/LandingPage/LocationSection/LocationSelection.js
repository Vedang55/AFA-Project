import React, { useState } from 'react';
import LocationCard from '../LocationCard/LocationCard'
import classes from './LocationSelection.module.css';
import locationData from '../../../data/locations';
import LocationButton from '../LocationButton/LocationButton';
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';
import './swipercss.css';




const LocationSelection = () => {
    const [selected, setSelected] = useState(0);

    const buttonClickHandler = (index) => {
        setSelected(index);
    }

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        effect: 'flip',
    }




    return (
        <div className={classes.Container}>
            <div className={classes.locationCardCont}>
                <LocationCard data={locationData.locations[selected]} />
            </div>

            <div className={classes.LocationButtonContainer}>
                {locationData.locations.map((loc, index) => {
                    let selectedTag = 'false';
                    if (index === selected) {
                        selectedTag = 'true';
                    }
                    return (
                        <LocationButton key={Math.random()} place={loc.place} selected={selectedTag} clicked={buttonClickHandler.bind(this, index)} />
                    );
                })}
            </div>



            <div className={classes.carCont}>
                <Swiper {...params}>
                    {locationData.locations.map((item) => {
                        return (
                            <div className={classes.slideItem} key={Math.random()}>
                                <LocationCard data={item} />
                            </div>);
                    })}
                </Swiper>
            </div>


        </div>
    );
}

export default LocationSelection;