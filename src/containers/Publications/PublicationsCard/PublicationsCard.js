import React from 'react';
import classes from '../../Clubs/ClubsCard/ClubsCard.module.css';


const PublicationsCard = (props) => {
    return (

        // <div className={classes.Container}>
        //     <h2> {props.item.name}</h2>
        //     <p className={classes.publicationsText}>
        //         {props.item.description}
        //     </p>

        //     {props.item.issues.length > 0 ? (
        //     <p>
        //         <span style={{ color: 'gray' }}>Issues: </span>
        //         {props.item.issues.map(()=>{
        //             return <span style={{ color: '#EC741D' }}>March 2018 &nbsp; </span>
        //         })}

        //     </p>) :undefined }


        // </div>

        <div className={classes.Container}>
        <div className={classes.imageCont}>
            <img src={require(`../../../assets/images/publications/${props.item.image}`)} alt="Equipment"/>
        </div>

        <div className={classes.textCont}>
            <h1>{props.item.name}</h1>
            <p>
            {props.item.description}
            </p>
            <a style={{color: '#EC741D', textDecoration: 'none'}} target='_blank' href={props.item.link}>
                <button style={styles.button}>Download</button>
            </a>
        </div>


        </div>

    );


}

export default PublicationsCard;

const styles = {
    button : {
        backgroundColor: '#EC741D',
        borderRadius: '5px',
        border: 'none',
        width: '10rem',
        height: '30px',
        outline: 'none',
        color: 'white',
        fontWeight: 400,
        marginTop: '15px',
        fontSize: '1rem',
    }
}