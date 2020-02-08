import React from 'react';
import classes from './LocationCard.module.css'

const LocationCard = (props) => {
    return (
        <div className={classes.Container}>
            <h2 style={{ margin: 0, padding: 0 }}>{props.data.place}</h2>
            <p style={{ textAlign: "center", lineHeight:1.7 }}><span style={{ fontSize: "1.2em" }}>{props.data.timings}</span>
                {props.data.days !== "" ? (<br/>) :undefined }
                {props.data.days !== "" ?  `"${props.data.days}"` : undefined }
              </p>
            <hr />
            <p style={{ opacity: 0.75, fontWeight: 400, textAlign:"center" }}>{props.data.details}</p>
            <span>Co-ordinator: {props.data.coordinator}</span>
            <span style={{borderBottom:'1px solid white', fontFamily: 'Arial'}}>Contact: {props.data.Contact}</span>
            <span className={classes.directionButton}>Get directions to observatory</span>
        </div>
    );
}

export default LocationCard;