import React from 'react'
import classes from './TestimonialsCard.module.css'

const TestimonialsCard = (props) => {
    return (
        <div className={classes.Container}>
            <p className={classes.text}>
                "{props.text}"
            </p>

            <h5 style={{ marginBottom: 0 }}>
                -{props.by}, &nbsp;
                <span style={{ fontWeight: "300" }}>{props.place}</span>
            </h5>
            {/* <h4 style={{ marginTop: 0, fontWeight: "300"}}>
                {props.date}
            </h4> */}
        </div>);
}

export default TestimonialsCard;