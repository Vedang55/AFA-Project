import React from 'react';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <nav className={classes.Nav} style={{...props.style}} >
            <a>Equipment</a>
            <a>Gallery</a>
            <a>Clubs</a>
            <a>Publications</a>
            <a>About Us</a>
        </nav>
    );
}

export default NavigationItems;