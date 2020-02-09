import React from 'react';
import classes from './PublicationsCard.module.css'


const PublicationsCard = (props) => {
    return (

        <div className={classes.Container}>
            <h2> {props.item.name}</h2>
            <p className={classes.publicationsText}>
                {props.item.description}
            </p>

            {props.item.issues.length > 0 ? (
            <p>
                <span style={{ color: 'gray' }}>Issues: </span>
                {props.item.issues.map(()=>{
                    return <span style={{ color: '#EC741D' }}>March 2018 &nbsp; </span>
                })}

            </p>) :undefined }


        </div>

    );


}

export default PublicationsCard;