import React from 'react';
import classes from './PublicationsCard.module.css'


const PublicationsCard = () => {
    return (

        <div className={classes.Container}>
            <h2>Viva Lactea</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p style={{marginBottom: 0, fontWeight: "bold"}}>
                <span style={{color: 'gray'}}>Issues: </span>
                <span style={{color: '#EC741D'}}>March 2018 &nbsp; &nbsp; March 2018</span>
            
            </p>
        </div>

    );


}

export default PublicationsCard;