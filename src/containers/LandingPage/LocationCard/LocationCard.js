import React from 'react';
import classes from './LocationCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const LocationCard = (props) => {
    return (
        <div className={classes.Container}>
            <h2 style={{ margin: 0, padding: 0 }}>{props.data.place}</h2>
            <p style={{ textAlign: "center", lineHeight:1.7 }}><span style={{ fontSize: "1.2rem" }}>{props.data.timings}</span>
                {props.data.days !== "" ? (<br/>) :undefined }
                {props.data.days !== "" ?  `Open: ${props.data.days}` : undefined }
            </p>
            <hr />
            <p style={{ color:'#eee', fontWeight: 600, textAlign:"center", fontSize:'1rem', lineHeight:'1.5em' }}>{props.data.details}</p>
            <span>Co-ordinator: {props.data.coordinator}</span>
            <span style={{ fontFamily: 'Arial'}}>Contact: <a style={{color:'white'}} href={`tel:${props.data.Contact}`}>{props.data.Contact}</a></span>

            
            {props.data.coordinates !== undefined ? (  
            <a style={{textDecoration: 'none'}} href={`https://www.google.com/maps/search/?api=1&query=${props.data.coordinates}&query_place_id=${props.data.placeid}`} target="_blank"><span className={classes.directionButton}><FontAwesomeIcon icon={faMapMarker} /> Get directions to observatory</span></a>) : undefined}
            
        </div>
    );
}

export default LocationCard;