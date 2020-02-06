import React from 'react';
import classes from './NavigationItems.module.css';
import {NavLink} from 'react-router-dom';

const NavigationItems = (props) => {

    return (
        <nav className={classes.Nav} style={{...props.style}} >
            <NavLink to="/equipment" activeClassName={classes.active}>Equipment</NavLink>
            <NavLink to="/gallery" activeClassName={classes.active}>Gallery</NavLink>
            <NavLink to="/clubs" activeClassName={classes.active}>Clubs</NavLink>
            <NavLink to="/publications" activeClassName={classes.active}>Publications</NavLink>
            <NavLink to="/aboutus" activeClassName={classes.active}>About Us</NavLink>
        </nav>
    );
}

export default React.memo(NavigationItems);