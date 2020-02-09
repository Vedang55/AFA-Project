import React from 'react';
import classes from '../../Clubs/ClubsCard/ClubsCard.module.css';


const EquipmentCard = (props) => {


    return (
        <div className={classes.Container}>
            <div className={classes.imageCont}>
                <img src={require(`../../../assets/images/equipment/${props.item.image}`)} alt="Equipment"/>
            </div>

            <div className={classes.textCont}>
                <h1>{props.item.name}</h1>
                <p>
                {props.item.description}
                </p>
            </div>


        </div>);
}

export default React.memo(EquipmentCard);
