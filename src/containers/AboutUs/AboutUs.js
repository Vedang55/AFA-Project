import ImageGallery from 'react-image-gallery';
import React from 'react';
import Layout from '../../components/Layouts/Layout';
import classes from './AboutUs.module.css';
import AboutUsCont from './AboutUsCont/AboutUsCont'




class AboutUs extends React.Component {
    render() {
        return (
            <Layout>
                <div className={classes.Container}>
                    <h1>About Us</h1>
                    <AboutUsCont/>
                </div>
            </Layout>
        );
    }
}

export default AboutUs;