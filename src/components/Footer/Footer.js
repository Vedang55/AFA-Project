import React from 'react';
import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <div style={{ backgroundColor: 'black', padding: '30px', borderTop:'4px solid #EC741D' }}>
            <div className={classes.Container}>
                <h4 className={classes.tagLine}>
                    Scale the heights of the earth, reach for the effulgent skies, delight in the divine radiance of the cosmos - Atharva Veda
                </h4>

                <p>
                    <span>Visit us <br/></span>
                    Observatory:<br/>
                    Public Astronomical Observatory, <br/>
                    Terrace, Junta House,<br/>
                    Panaji - Goa

                </p>

                <p>
                    <span>Working Hours</span><br/>
                    <span>Office</span><br/>
                    Mon - Fri: 09:30 AM to 05:30 PM<br/>
                    Sat: 09:30 AM to 01:30 PM<br/>
                    Phone: <a href='tel:9923257267'>9923257267</a>

                </p>

                <p>
                    <span>Mail Us</span><br/>
                    <a href='mailto:afagoa@gmail.com'>afagoa@gmail.com</a>
                    

            </p>
            </div>
        </div>
    )
}

export default Footer;