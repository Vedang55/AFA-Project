import React from 'react';
import classes from './LocationButton.module.css';

const LocationButton = (props) => {
    let classArr = [classes.Container, classes.NotSelected];
    if (props.selected==='true'){
        classArr[1] = classes.Selected;
    }
    return (
        <div className={classArr.join(' ')} onClick={props.clicked}>
            <p>{props.place}</p>
            <hr/>
        </div>
    );
}

export default React.memo(LocationButton);