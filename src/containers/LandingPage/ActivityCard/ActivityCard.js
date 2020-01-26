import React from 'react';
import classes from './ActivityCard.module.css';
import logo from '../../../assets/images/AFA-logo.png'

const ActivityCard = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.imageCont}>
                <img src={require(`../../../assets/images/${props.img}`)} />
            </div>

            <h1>{props.title}</h1>
            <hr />
            <p>
                {props.maintxt}
            </p>
        </div>);

}

export default ActivityCard;