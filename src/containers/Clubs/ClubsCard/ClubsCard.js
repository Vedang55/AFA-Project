import React from 'react';
import classes from './ClubsCard.module.css';


const ClubsCard = (props) => {


    return (
        <div className={classes.Container}>
            <div className={classes.imageCont}>
                <img src={require(`../../../assets/images/clubs/${props.item.image}`)} alt="club" />
            </div>

            <div className={classes.textCont}>
                <h1>{props.item.name}</h1>
                <p>
                {props.item.description}
                </p>
            </div>


        </div>);
}

export default ClubsCard;
