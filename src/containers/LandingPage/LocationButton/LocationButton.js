import React from 'react';
import classes from './LocationButton.module.css';

const LocationButton = (props) => {
    let classArr = [classes.Container];
    if (props.selected==='true'){
        classArr[1] = classes.Selected;
    }
    return (
        <div className={classArr.join(' ')} onClick={props.clicked}>
            <p>{props.place}</p>
            <hr className={props.selected==='true'? classes.Selected : undefined}/>
        </div>
    );
}

export default React.memo(LocationButton);