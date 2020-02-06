import React from 'react';
import classes from './ClubsCard.module.css';
import data from '../../../data/clubs'


const ClubsCard = (props) => {


    return (
        <div className={classes.Container}>
            <div className={classes.imageCont}>
                <img src={require(`../../../assets/images/clubs/${data[props.index].image}`)} alt="club" />
            </div>

            <div className={classes.textCont}>
                <h1>{data[props.index].name}</h1>
                <p>
                    {data[props.index].description}
                </p>
                {
                    data[props.index].activities.length > 0 ? (<ul>
                        {data[props.index].activities.map((item, index) => {
                            return <li style={{marginBottom:'4px'}}><span style={{ fontWeight: "bold" }}>{item.name}: </span>
                                {item.description}</li>
                        })}
                    </ul>) : undefined
                }
            </div>


        </div>);
}

export default ClubsCard;
