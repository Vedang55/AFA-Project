import React from 'react'
import classes from './TestimonialsCard.module.css'

const TestimonialsCard = (props) => {
    return (
        <div className={classes.Container}>
            <p>
                "{props.text}"
        </p>

            <h4 style={{ marginBottom: 0 }}>
                -{props.by}, &nbsp;
                <span style={{fontWeight: "300"}}>{props.place}</span>
            </h4>
            {/* <h4 style={{ marginTop: 0, fontWeight: "300"}}>
                {props.date}
            </h4> */}
        </div>);
}

export default TestimonialsCard;