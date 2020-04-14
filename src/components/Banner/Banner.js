import React, { useState, useEffect, useRef } from 'react'
import classes from './Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Banner = (props) => {

    const [open, setOpen] = useState(1);
    const [loaded, setLoaded] = useState(0);
    const announcements= useRef();

    useEffect(() => {
        fetch('https://spreadsheets.google.com/feeds/cells/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/2/public/full?alt=json')
            .then((response) => response.json())
            .then((responseJson) => {

                const entry = responseJson.feed.entry;
                announcements.current = entry.map(element => {
                    return (element.content['$t']);
                }).filter(function (element) {
                    return element !== undefined;
                });
                setLoaded(1);
            })
            .catch((error) => {
                
            });
    }, []);

    const onCrossClick = () => {
        setOpen(0);
    }

    const attachedClasses = [classes.Container];
    if (!open)
        attachedClasses[1] = classes.close;

    

    if (loaded) {
        console.log(announcements.current)
        return (
            <div className={attachedClasses.join(' ')}>
                <div className="marquee">{announcements.current[0]}</div>
                <FontAwesomeIcon icon={faTimesCircle} className={classes.Icon} onClick={onCrossClick} />
            </div>
        );
    }
    else {
        return <div className={classes.close}></div>;
    }
}

export default Banner;