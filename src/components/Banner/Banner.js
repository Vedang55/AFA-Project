import React, { useState } from 'react'
import classes from './Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Banner = (props) => {

    const [open, setOpen] = useState(1);

    const onCrossClick = () => {
        setOpen(0);
    }

    const attachedClasses = [classes.Container];
    if (!open)  
        attachedClasses[1] = classes.close;

    return (
        <div className={attachedClasses.join(' ')}>



            <marquee scrollamount='10' behavior="scroll" direction="left">
                Announcements: Here is some scrolling text... left to right! Your Journey through the Universe starts here
Association of Friends of Astronomy In the year 1982 due to the zeal and perseverance of a Panaji resident an</marquee>
            <FontAwesomeIcon icon={faTimesCircle} className={classes.Icon} onClick={onCrossClick}/>

        </div>
    );
}

export default Banner;