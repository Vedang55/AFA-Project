import React from 'react';
import classes from './ActivityCard.module.css';

const ActivityCard = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.imageCont}>
                <img src={require(`../../../assets/images/${props.img}`)} alt="Activity"/>
            </div>

            <h1>{props.title}</h1>
            <hr />
            <p>
                {props.maintxt}
            </p>
        </div>);

}

export default ActivityCard;