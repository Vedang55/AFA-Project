import ImageGallery from 'react-image-gallery';
import React from 'react';
import Layout from '../../components/Layouts/Layout';
import classes from './AboutUs.module.css';




class AboutUs extends React.Component {
    render() {
        return (
            <Layout>
                <div className={classes.Container}>
                    <h1>AboutUs</h1>
                </div>
            </Layout>
        );
    }
}

export default AboutUs;