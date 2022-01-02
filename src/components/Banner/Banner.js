import React, { useState, useEffect, useRef } from 'react'
import classes from './Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Banner = (props) => {
    const [announcements, setAnnouncements] = useState([])
    const [open, setOpen] = useState(1);
    const [loaded, setLoaded] = useState(1);

    let announce = []
 

    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/values/Announcements?alt=json&key=${process.env.REACT_APP_GOOGLE_KEY}`)
            .then((response) => response.json())
            .then((responseJson) => {
                for (const property in responseJson.values) {
                    announce.push(responseJson.values[property][0])
                    
                }
                setAnnouncements(announce)
                setLoaded(1);
            })
            .catch((error) => {
                console.log(error)
                setLoaded(-1);
            });
         
    }, []);


    const onCrossClick = () => {
        setOpen(0);
    }

    const attachedClasses = [classes.Container];
    if (!open)
        attachedClasses[1] = classes.close;

    

    if (loaded && announcements.length > 0) {
        
        return (
            
            <div className={attachedClasses.join(' ')}>
               
                <div className="marquee">
                    {
                    announcements.map((announcement, index) => {
                        return (
                            <span className={classes.announceText} key={index}>
                                {announcement}
                            </span>
                        )
                    })
                    }
                
                </div>
                <FontAwesomeIcon icon={faTimesCircle} className={classes.Icon} onClick={onCrossClick} />
            </div>
        );
    }
    else {
        return <div className={classes.close}></div>;
    }
}

export default Banner;