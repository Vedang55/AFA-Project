import React from 'react';
import afaLogo from '../../assets/images/AFA-logo.png'
import classes from './Logo.module.css';


const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={afaLogo} altText='logo' />
        </div>
    );

}

export default Logo;