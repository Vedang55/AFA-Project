import React from 'react';
import Layout from '../../components/Layouts/Layout';
import classes from './LandingPage.module.css';
import LocationSelection from './LocationSection/LocationSelection';
import EventSection from './EventsSection/EventsSection';
import ActivitiesSection from './ActivitiesSection/ActivitiesSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import { FiChevronDown } from "react-icons/fi";
import StarfieldAnimation from 'react-starfield-animation'

const LandingPage = () => {
    return (
        <Layout stickyNavbar="true">
            <div className={classes.Container}>
                <div className={[classes.Sec1, classes.seccontainer].join(' ')} style={{ backgroundImage: `url(${require('../../assets/images/landingpage/bg2.jpg')})`}}>
                    <h1 align='center'>Your Journey through the Universe starts here</h1>
                    <h2 align='center'>Association of Friends of Astronomy <br />Goa</h2>
                    <p align='center'>Want to schedule a programme at your organisation?</p>
                    <a target='_blank' href='https://afagoa.typeform.com/to/Lmtiz9'>
                        <button>Book a programme</button>
                    </a>
                    <div className={classes.downIcon}>
                        <FiChevronDown size={'100%'} />
                    </div>
                <StarfieldAnimation
                    style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                    }}
                />
                </div>



                <div className={classes.backgroundContainer1} style={{ backgroundImage: `url(${require('../../assets/images/landingpage/bg3.jpg')})` }}>


                    <div className={[classes.Sec2, classes.seccontainer].join(' ')}>
                        <h1>About the organisation</h1>
                        <p>
                            In the year 1982 due to the zeal and perseverance of a Panaji resident and retired government officer Mr Percival Noronha, the Association of Friends of Astronomy (AFA) was founded by a group of astronomy enthusiasts in Panaji, Goa. Amateur astronomy enthusiasts and tourists are encouraged to stop by and are eagerly helped by the seasoned locals. Dedicated to the appreciation and popularization of Amateur Astronomy, the association was successful in founding the Public Astronomical Observatory at Panaji which is voluntarily managed by the association and supported by the Department of Science, Technology & Environment (Government of Goa), and is the first public observatory in India.
                        </p>
                    </div>


                    <div className={[classes.Sec3, classes.seccontainer].join(' ')}>
                        <h1>Our locations</h1>
                        <LocationSelection />
                    </div>

                </div>


                <div className={classes.backgroundContainer2} style={{ backgroundImage: `url(${require('../../assets/images/landingpage/bg3.jpg')})` }}>
                    <div className={[classes.Sec4, classes.seccontainer].join(' ')}>
                        <h1>Upcoming events</h1>
                        <EventSection />
                    </div>


                    <div className={[classes.Sec5, classes.seccontainer].join(' ')}>
                        <h1>Our Activities</h1>
                        <ActivitiesSection />
                    </div>

                    <div className={[classes.Sec6, classes.seccontainer].join(' ')}>
                        <h1>Testimonials</h1>
                        <TestimonialsSection />
                    </div>

                </div>






            </div>

        </Layout>
    );
}

export default LandingPage;
