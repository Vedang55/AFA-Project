import React from 'react';
import Layout from '../../components/Layouts/Layout';
import classes from './LandingPage.module.css';
import LocationSelection from './LocationSection/LocationSelection';
import EventSection from './EventsSection/EventsSection';
import ActivitiesSection from './ActivitiesSection/ActivitiesSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import { FiChevronDown } from "react-icons/fi";



const LandingPage = () => {
    return (
        <Layout stickyNavbar="true">
            <div className={classes.Container}>
                <div className={[classes.Sec1, classes.seccontainer].join(' ')}>
                    <h1 align='center'>The Universe is our playground</h1>
                    <h2 align='center'>Friends of Astronomy - Goa</h2>
                    <p align='center'>Want to schedule a program at your organisation?</p>
                    <button>Book a Program</button>
                    <div className={classes.downIcon}>
                        <FiChevronDown size={'100%'} />
                    </div>

                </div>

                <div className={[classes.Sec2, classes.seccontainer].join(' ')}>
                    <h1>About the organisation</h1>
                    <p>
                        The Association of Friends of Astronomy (Goa) was set up in December 1982 by a group of enthusiastic Astronomy
                        buffs. The Association opens its arms to all individuals who are mesmerized by the awesome universe and are
                        curious to know more about it. Activities like workshops, sky observations, lectures, film screenings,
                        exhibitions etc are regularly organized all over Goa for the popularization of science and astronomy among
                        students and general public. As on 2014, Association of Friends of Astronomy (Goa) has 8 Centers in Goa:
                        The main unit at Panjim and sub units at Margao, Mapusa, Vasco, Porvorim and Canacona and Rural astronomy
                        centres at Morjim &amp; Borim. Any individual regardless of age and education is welcome to join the
                        Association and enrich his life with the beautiful and timeless hobby of appreciating The Mother of
                        Science…ASTRONOMY.
                    </p>
                </div>


                <div className={[classes.Sec3, classes.seccontainer].join(' ')}>
                    <h1>Our locations</h1>
                    <LocationSelection />
                </div>



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

        </Layout>
    );
}

export default LandingPage;
